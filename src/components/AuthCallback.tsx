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
    try {
      setStatus("Verifying");

      // PKCE exchange if ?code=...
      await supabase.auth.exchangeCodeForSession(window.location.href).catch(() => {});

      // If implicit flow dumped us on / with #access_token, forward it:
      if (window.location.hash.startsWith("#access_token")) {
        window.location.replace(`/auth/callback${window.location.hash}`);
        return;
      }

      // Ensure session exists (with a short onAuthStateChange fallback)
      let { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        const got = await new Promise((resolve) => {
          const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
            if (s) { resolve(s); sub.subscription.unsubscribe(); }
          });
          setTimeout(async () => {
            const { data: { session: s2 } } = await supabase.auth.getSession();
            resolve(s2 ?? null);
            sub.subscription.unsubscribe();
          }, 800);
        });
        session = got as any;
      }
      if (!session) {
        setStatus("Error");
        setError("Could not verify session.");
        navigate("/signin", { replace: true });
        return;
      }

      // Your duplicate-provider + upsert logic (wrapped safely)
      const providerCheck = (async () => {
        try {
          const user = session!.user;
          const currentProvider = (user.app_metadata as any)?.provider as string | undefined;
          const identities = (user as any)?.identities as Array<{ provider?: string }> | undefined;
          const hasEmailIdentity = Array.isArray(identities) && identities.some(i => i?.provider === "email");

          if (currentProvider && currentProvider !== "email" && hasEmailIdentity) {
            await supabase.auth.signOut();
            navigate("/signin?error=duplicate&via=oauth", { replace: true });
            return { ok: false as const, reason: "duplicate_provider" as const };
          }

          const { error: upsertErr } = await supabase.from("profiles").upsert({
            id: user.id, email: user.email, provider: currentProvider ?? "email",
          });
          if (upsertErr) console.error(upsertErr);
          return { ok: true as const, reason: "done" as const };
        } catch (e) {
          console.error("providerCheck failed:", e);
          return { ok: true as const, reason: "provider_check_failed" as const };
        }
      })();

      const timer = new Promise<"timeout">(r => setTimeout(() => r("timeout"), 300));
      const result = await Promise.race([providerCheck, timer]);
      if (result !== "timeout" && typeof result === "object" && "ok" in result && !result.ok) return;

      // Clean query/hash noise
      try { window.history.replaceState({}, document.title, "/auth/callback"); } catch {}

      setStatus("Redirecting");
      navigate("/dashboard", { replace: true });
      if (result === "timeout") providerCheck.catch(console.error);
    } catch (e) {
      console.error(e);
      setStatus("Error");
      setError("Unexpected error during authentication.");
      navigate("/signin", { replace: true });
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
