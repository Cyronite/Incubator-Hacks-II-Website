import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [applicationStatus, setApplicationStatus] = useState<string>("Not submitted");


    
useEffect(() => {
  const fetchUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/signin"); return; }
    setUser(session.user);

    const { data: profile, error: profileErr } = await supabase
      .from("profiles")
      .select("application_status")
      .eq("id", session.user.id)
      .maybeSingle();

    if (profileErr) console.error(profileErr);
    setApplicationStatus(profile?.application_status ?? "Not submitted");
  };
  fetchUser();
}, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };


  return (
    <div className="min-h-[calc(100vh-216px)] p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      {user && (
        <p className="mb-6 text-gray-700 text-lg">
          Welcome, <span className="font-semibold">{user.email}</span>
        </p>
      )}

      {/* Application Status */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">My Application</h2>
        <p className={`mb-4 ${applicationStatus === "Submitted" ? "text-green-600" : "text-red-500"}`}>
  Status: <span className="font-semibold">{applicationStatus}</span>
</p>

{applicationStatus === "Not submitted" && (
  <button
    onClick={() => navigate("/form")}
    className="py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl shadow"
  >
    Apply
  </button>
)}
        
      </div>

      {/* Password Reset */}
    

      {/* Hacker Package */}

      {/* Sign Out */}
      <button
        onClick={handleSignOut}
        className="mt-4 py-3 px-6 bg-gray-400 hover:bg-gray-500 text-white rounded-xl shadow"
      >
        Sign Out
      </button>
    </div>
  );
}
