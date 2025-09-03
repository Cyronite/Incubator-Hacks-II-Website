import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, useLocation, Link } from "react-router-dom";

interface AuthProps { mode: "signin" | "signup"; }

export default function Auth({ mode }: AuthProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isSignUp = mode === "signup";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("error") === "duplicate") {
      const via = params.get("via");
      if (via === "oauth") {
        setError("This email is already registered with email/password. Please sign in using your password.");
      } else {
        setError("This email is already registered via another provider.");
      }
    }
  }, [location.search]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isSignUp) {
        if (password !== verifyPassword) throw new Error("Passwords do not match");

        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
        });
        if (signUpError) throw signUpError;

        // If identities is empty, Supabase indicates the email is already registered
        // (often via another provider like Google). In that case, show a clearer message.
        const identities = (data.user as any)?.identities as unknown[] | undefined;
        if (Array.isArray(identities) && identities.length === 0) {
          setError("This email is already registered via another provider. Please sign in with Google.");
          return;
        }

        // No profiles query here (RLS blocks anon). We'll upsert after verification in AuthCallback.
        if (data.user) {
          // Show message; user must verify email before sign-in
          setError("Account created! Please verify your email before signing in.");
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;

        if (data.session) {
          // Optional: upsert profile now that we have a session
          await supabase.from("profiles").upsert({
            id: data.session.user.id,
            email: data.session.user.email,
            provider: (data.session.user.app_metadata?.provider as string) ?? "email",
          }, { onConflict: "id" });

          navigate("/dashboard");
        }
      }
    } catch (err: any) {
      // Typical Supabase messages:
      // - "User already registered" (on signUp)
      // - "Invalid login credentials" (on signIn)
      const raw = err?.message || "Something went wrong. Try again.";
      if (/already registered/i.test(raw)) {
        setError("This email is already registered via another provider. Please sign in with Google.");
      } else {
        setError(raw);
      }
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    const { error: googleError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (googleError) setError(googleError.message);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-216px)] px-4 py-2 bg-gradient-to-b from-yellow-50 via-white/50 to-yellow-50">
      <div className="max-w-md w-full bg-white/30 backdrop-blur-lg border border-gray-400/30 shadow-xl rounded-3xl p-8">
        <h1 className="modak text-5xl text-center mb-4 text-gray-800">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h1>
        <p className="text-center text-gray-700 inter mb-6">
          {isSignUp ? "Join us and get started today!" : "Sign in to continue"}
        </p>

        <form className="space-y-4" onSubmit={handleEmailAuth}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl inter bg-white/40 backdrop-blur-sm border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl inter bg-white/40 backdrop-blur-sm border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Verify Password"
              className="w-full px-4 py-3 rounded-xl inter bg-white/40 backdrop-blur-sm border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-600"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              required
            />
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl inter bg-yellow-400 hover:bg-yellow-500 text-white shadow-lg transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl inter bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/50 transition shadow"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-4 text-center inter">{error}</p>}

        <p className="text-center text-sm text-gray-700 mt-6 inter">
          {isSignUp ? (
            <>Already have an account? <Link to="/signin" className="text-yellow-500 font-semibold hover:underline">Sign In</Link></>
          ) : (
            <>Don’t have an account? <Link to="/signup" className="text-yellow-500 font-semibold hover:underline">Sign Up</Link></>
          )}
        </p>
      </div>
    </div>
  );
}
