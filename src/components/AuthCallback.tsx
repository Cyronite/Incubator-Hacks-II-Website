import  { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"Verifying" | "Redirecting" | "Error">("Verifying");
  const [error, setError] = useState<string | null>(null);
  const once = useRef(false);

  useEffect(() => {
    if (once.current) return;
    once.current = true;

    (async () => {
      setStatus("Verifying");

      // 1) Grab session immediately (don’t wait for onAuthStateChange)
      const { data: { session }, error: sessionErr } = await supabase.auth.getSession();

      if (sessionErr) {
        console.error(sessionErr);
        setError("Could not verify session.");
        setStatus("Error");
        // fail fast to sign-in
        navigate("/signin", { replace: true });
        return;
      }

      if (!session) {
        navigate("/signin", { replace: true });
        return;
      }

      const user = session.user;

      // 2) Start provider check + profile upsert but DO NOT block UI
      //    a) We'll race this against a 300ms timer for instant redirect
      const providerCheck = (async () => {
        const currentProvider = (user.app_metadata as any)?.provider as string | undefined;
        const identities = (user as any)?.identities as Array<{ provider?: string }> | undefined;
        const hasEmailIdentity = Array.isArray(identities) && identities.some((i) => i?.provider === "email");

        // If user is coming via an OAuth provider (e.g., Google) but already has an email identity,
        // treat this as a duplicate-provider sign-in and block it.
        if (currentProvider && currentProvider !== "email" && hasEmailIdentity) {
          await supabase.auth.signOut();
          navigate("/signin?error=duplicate&via=oauth", { replace: true });
          return { ok: false as const, reason: "duplicate_provider" as const };
        }

        // Upsert profile (fire-and-forget-ish)
        const { error: upsertErr } = await supabase.from("profiles").upsert({
          id: user.id,
          email: user.email,
          provider: currentProvider ?? "email",
        });
        if (upsertErr) {
          console.error(upsertErr);
          // Not fatal for navigation
          return { ok: true as const, reason: "upsert_error_nonfatal" as const };
        }

        return { ok: true as const, reason: "done" as const };
      })();

      const timer = new Promise<"timeout">((resolve) => setTimeout(() => resolve("timeout"), 300));

      // 3) Race: if providerCheck wins quickly, great; otherwise navigate anyway.
      const result = await Promise.race([providerCheck, timer]);

      // If the provider check already determined a duplicate (and redirected),
      // do NOT override that by navigating to the dashboard.
      if (result !== "timeout" && typeof result === "object" && result && "ok" in result) {
        const r = result as { ok: boolean; reason: string };
        if (!r.ok && r.reason === "duplicate_provider") {
          return; // providerCheck already signed out and redirected to /signin
        }
      }

      setStatus("Redirecting");
      navigate("/dashboard", { replace: true });

      // 4) If the timer won, let the check finish in the background.
      //    When it finishes and finds duplicate, it will sign out + redirect.
      if (result === "timeout") {
        providerCheck.catch((e) => console.error("Provider check later failed:", e));
      }
    })();
  }, [navigate]);

  // Minimal in-between page (very short-lived)
  return (
    <div className="min-h-[calc(100vh-216px)] flex items-center justify-center px-4 py-8 bg-gradient-to-b from-yellow-50 via-white/50 to-yellow-50">
      <div className="relative w-full max-w-md">
        <div className="bg-white/30 backdrop-blur-xl border border-gray-400/30 shadow-2xl rounded-3xl p-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-yellow-400/90 shadow grid place-items-center">
              <span className="text-white font-black">IH</span>
            </div>
            <div>
              <h1 className="modak text-2xl leading-none text-gray-900">
                {status === "Verifying" ? "Signing you in…" : status === "Redirecting" ? "Almost there…" : "Oops"}
              </h1>
              <p className="inter text-gray-700 text-sm mt-1">This will only take a moment.</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Spinner />
            <p className="inter text-gray-800 text-sm" aria-live="polite">
              {status === "Verifying" && "Verifying your session"}
              {status === "Redirecting" && "Redirecting to your dashboard"}
              {status === "Error" && (error ?? "Unexpected error")}
            </p>
          </div>
        </div>

        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-yellow-300/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#685FD4]/40 blur-3xl" />
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div
      className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-yellow-400 animate-spin"
      aria-hidden
    />
  );
}
