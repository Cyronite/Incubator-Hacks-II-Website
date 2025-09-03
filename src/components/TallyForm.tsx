import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const FORM_ID = "woqag1";
const TALLY_ORIGINS = new Set(["https://tally.so", "https://embed.tally.so"]);

export default function TallyForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // ✅ RESTORED: get user for prefill (this was missing)
  useEffect(() => {
    (async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) console.error("getSession error:", error);
      if (!session) { navigate("/signin", { replace: true }); return; }
      setEmail(session.user.email ?? "");
      setUserId(session.user.id);
      console.log("prefill →", { email: session.user.email, userId: session.user.id });
    })();
  }, [navigate]);

  const ready = !!(email && userId);

  // Build embed URL with prefill (render only when ready)
  const tallySrc = useMemo(() => {
    if (!ready) return "";
    const base = `https://tally.so/embed/${FORM_ID}`;
    const params = new URLSearchParams({
      hideTitle: "1",
      transparentBackground: "1",
      dynamicHeight: "1",
      autoFocus: "1",
      email,
      user_id: userId,
      _ts: String(Date.now()), // cache-buster while testing
    });
    const url = `${base}?${params.toString()}`;
    console.log("iframe src →", url);
    return url;
  }, [ready, email, userId]);

  // Update profile status to "Submitted" when Tally finishes
  const handleSubmitted = useCallback(async () => {
    try {
      const { data: { session }, error: sessErr } = await supabase.auth.getSession();
      if (sessErr) console.error("getSession error:", sessErr);
      if (!session) { navigate("/signin", { replace: true }); return; }

      const user = session.user;

      // Upsert so it works even after table resets
      const { data, error } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            email: user.email,
            provider: (user.app_metadata?.provider as string) ?? "email",
            application_status: "Submitted",
          },
          { onConflict: "id" }
        )
        .select("id, application_status")
        .single();

      if (error) {
        console.error("profiles upsert error:", error);
      } else {
        console.log("profiles upsert OK:", data);
      }

      // Also try server-side via Edge Function (best-effort)
      try {
        const webhookUrl = (import.meta as any).env?.VITE_TALLY_WEBHOOK_URL as string | undefined;
        const payload = {
          data: {
            hiddenFields: { email: user.email, user_id: user.id },
          },
        };
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        } else {
          // If not provided, attempt to invoke by name (requires deployed function)
          await supabase.functions.invoke("tally-webhook", { body: payload });
        }
      } catch (fnErr) {
        console.warn("Edge function invoke failed (non-fatal):", fnErr);
      }
    } catch (e) {
      console.error("submit handler error", e);
    } finally {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  // Listen for Tally events (height + submit)
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!TALLY_ORIGINS.has(e.origin)) return;
      const raw = e.data as any;
      const type = raw?.event || raw?.type || raw?.message || "";

      if (/Tally\.FormHeight|TALLY_FORM_HEIGHT|TALLY_RESIZE/i.test(type)) {
        const h = typeof raw?.height === "number" ? raw.height : undefined;
        if (h && iframeRef.current) {
          const clamped = Math.max(560, Math.min(h, 5000));
          iframeRef.current.style.height = `${clamped}px`;
        }
      }

      if (/Tally\.FormSubmitted|TALLY_FORM_SUBMITTED/i.test(type)) {
        console.log("✅ Tally submission detected");
        void handleSubmitted();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [handleSubmitted]);

  return (
    <div className="min-h-[calc(100vh-216px)] flex items-center justify-center px-0 sm:px-4 py-4 sm:py-8 bg-gradient-to-b from-yellow-50 via-white/50 to-yellow-50">
      <div className="relative w-full max-w-[900px]">
        <div className="bg-white/60 sm:bg-white/30 backdrop-blur-0 sm:backdrop-blur-xl border border-transparent sm:border-gray-400/30 shadow lg:shadow-2xl rounded-none sm:rounded-3xl sm:p-6 p-0">
          <header className="sticky top-0 z-10 bg-white/80 sm:bg-transparent backdrop-blur sm:backdrop-blur-0 px-3 sm:px-1 pt-2 pb-3 sm:pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-yellow-400/90 shadow grid place-items-center">
                <span className="text-white font-black text-sm sm:text-base">IH</span>
              </div>
              <div>
                <h1 className="modak text-lg sm:text-2xl leading-none text-gray-900">Application Form</h1>
                <p className="inter text-gray-700 text-xs sm:text-sm mt-1">Fill once per person. Prefilled with your account.</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl inter border border-gray-300 bg-white/80 hover:bg-white"
            >
              Back
            </button>
          </header>

          <div className="border-t sm:border border-gray-200/60 overflow-x-auto overscroll-x-contain px-3 sm:px-4 pt-3 sm:pt-4 pb-6">
            {!ready ? (
              <div className="p-6 text-center inter text-gray-700">Preparing your form…</div>
            ) : (
              <iframe
                key={`${email}:${userId}`}
                ref={iframeRef}
                src={tallySrc}
                title="Application"
                style={{ width: "1px", minWidth: "100%", minHeight: "70dvh", height: "760px", display: "block" }}
                className="rounded-none sm:rounded-xl"
                frameBorder={0}
                loading="lazy"
                allow="fullscreen"
              />
            )}
          </div>
        </div>

        <div className="pointer-events-none hidden sm:block absolute -top-8 -right-8 h-20 w-20 rounded-full bg-yellow-300/50 blur-3xl" />
        <div className="pointer-events-none hidden sm:block absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-[#685FD4]/40 blur-3xl" />
      </div>
    </div>
  );
}
