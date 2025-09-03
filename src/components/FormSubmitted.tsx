// src/components/FormSubmitted.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function FormSubmitted() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("Finalizing your application…");

  useEffect(() => {
    (async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) console.error("getSession error:", error);
      if (!session) { navigate("/signin", { replace: true }); return; }

      const user = session.user;

      const { error: upsertErr } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            email: user.email,
            provider: (user.app_metadata?.provider as string) ?? "email",
            application_status: "Submitted",
          },
          { onConflict: "id" }
        );

      if (upsertErr) {
        console.error("profiles upsert error:", upsertErr);
        setMsg("We received your form, but updating your dashboard failed. You can continue.");
      } else {
        setMsg("Application marked as Submitted! Taking you to your dashboard…");
      }

      setTimeout(() => navigate("/dashboard", { replace: true }), 800);
    })();
  }, [navigate]);

  return (
    <div className="min-h-[calc(100vh-216px)] grid place-items-center px-6 py-16 bg-gradient-to-b from-yellow-50 via-white/50 to-yellow-50">
      <div className="w-full max-w-md bg-white/50 backdrop-blur-lg border border-gray-300/30 rounded-3xl p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-yellow-400/90 grid place-items-center text-white font-black">IH</div>
        <h1 className="modak text-2xl text-gray-900 mb-2">Thanks!</h1>
        <p className="inter text-gray-700">{msg}</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-4 py-2 rounded-xl inter border border-gray-300 bg-white/80 hover:bg-white"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
