import { useState, useEffect, type FC } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import cartImg from "../assets/cart.png";
import wheelImg from "../assets/wheel.png";
import Aanya from "../assets/portraits/Aanya.png";
import Alan from "../assets/portraits/Alan.jpg";
import Ayah from "../assets/portraits/Ayah.jpeg";
import Charmaine from "../assets/portraits/Charmaine.jpg";
import Daniel from "../assets/portraits/Daniel.jpg";
import Jaitra from "../assets/portraits/Jaitra.jpg";
import Luning from "../assets/portraits/luning.jpg";
import Nereyal from "../assets/portraits/nereyal.jpeg";
import Sathvik from "../assets/portraits/Sathvik.png";
import Sharon from "../assets/portraits/sharon.jpg";
import Shreemayi from "../assets/portraits/Shreemayi.jpg";
import Sophia from "../assets/portraits/Sophia.png";
import Elisha from "../assets/portraits/Elisha.jpg";
import Prasun from "../assets/portraits/Prasun.png";  

interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  // Co-leads
  { name: "Shreemayi Kurup", role: "Co-lead", img: Shreemayi, linkedin: "https://www.linkedin.com/in/shreemayi-kurup-50b890210" },
  {name: "Elisha Wong", role: "Co-lead", img: Elisha, linkedin: "https://www.linkedin.com/in/elisha-wong-71b175312"},
  // Website Team
  { name: "Prasun Sharma", role: "Website Lead", img: Prasun, linkedin: "https://prasunsharma.xyz/" },
  { name: "Sathvik Haridasu", role: "Website", img: Sathvik, linkedin: "https://www.linkedin.com/in/sathvik-haridasu/" },
  { name: "Sharon Basovich", role: "Website", img: Sharon, linkedin: "https://www.linkedin.com/in/sharon-basovich" },

  // Logistics Team
  { name: "Luning Wang", role: "Logistics Lead", img: Luning, linkedin: "https://www.linkedin.com/in/luning-wang~" },
  { name: "Daniel Xu", role: "Logistics", img: Daniel, linkedin: "https://www.linkedin.com/in/daniel-xu-876272368/" },
  { name: "Ayah Elhedhli", role: "Logistics", img: Ayah, linkedin: "" },

  // Finance Team
  { name: "Nereyal Jeyakumar", role: "Finance Lead", img: Nereyal, linkedin: "https://ca.linkedin.com/in/nereyal-jeyakumar-8ab86931a" },
  { name: "Jaitra Bhatt", role: "Finance", img: Jaitra, linkedin: "https://docs.google.com/document/d/1w0SbDl-k7kOLoUUBUNR8OUf6ijcPJ-cxbPODvJYxv4k/edit?tab=t.0" },
  { name: "Alan Liu", role: "Finance", img: Alan, linkedin: "http://www.tcal.xyz" },

  // Marketing Team
  { name: "Charmaine Chan", role: "Marketing Lead", img: Charmaine, linkedin: "" },
  { name: "Sophia Cui", role: "Marketing", img: Sophia, linkedin: "" },
  { name: "Aanya Rooprai", role: "Marketing", img: Aanya, linkedin: "" },
];


const MEMBERS_PER_CART = 3;

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const MeetOurTeam: FC = () => {
  // Build carts by department: Co-leads (2 only), then Website, Logistics, Finance, Marketing.
  const buildCartsByDepartment = (): TeamMember[][] => {
    const carts: TeamMember[][] = [];

    // Co-leads: exactly the two co-leads in their own cart
    const coLeads = teamMembers.filter(m => m.role === "Co-lead");
    if (coLeads.length > 0) carts.push(coLeads.slice(0, 2));

    // Helper to include both department members and leads
    const dept = (name: string) => teamMembers.filter(m => m.role === name || m.role === `${name} Lead`);

    const departments = ["Website", "Logistics", "Finance", "Marketing"] as const;
    for (const d of departments) {
      const members = dept(d);
      if (members.length) carts.push(...chunk(members, MEMBERS_PER_CART));
    }

    return carts;
  };

  const carts = buildCartsByDepartment();

  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Duplicate the wagons for seamless infinite scroll
  const allWagons = [...carts, ...carts].map((group, i) => {
    const isCoLeads = group.length === 2 && group.every(m => m.role === "Co-lead");
    return (
      <div
        key={i}
        className="relative flex flex-col items-center w-[340px] h-[200px] justify-end mx-8 md:w-[425px] md:h-[250px] md:mx-10"
      >
        <div className={`flex w-full mb-[-36px] md:mb-[-45px] ${isCoLeads ? "justify-center gap-6 px-0 md:gap-[30px]" : "justify-between px-10 md:px-[50px]"}`}>
          {group.map((member, j) => (
            <div key={j} className="relative group flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelected(member)}
                aria-label={`View ${member.name} profile`}
                className="focus:outline-none"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-28 w-20 md:h-[140px] md:w-[100px] object-cover border-2 border-white transition-transform duration-300 group-hover:-translate-y-4 md:group-hover:-translate-y-5"
                  style={{
                    borderRadius: "60% 60% 50% 50% / 80% 80% 60% 60%",
                  }}
                />
              </button>
              <div className="absolute top-[-40px] md:top-[-50px] left-1/2 z-20 w-max -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 shadow-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                <div className="font-bold">{member.name}</div>
                <div>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full flex justify-center items-end group/wagon">
          <img
            src={cartImg}
            alt="Cart"
            className="w-[400px] md:w-[500px] h-auto z-0"
            style={{ objectFit: "contain" }}
          />
          <img
            src={wheelImg}
            alt="Wheel"
            className={`absolute left-[40px] bottom-[-32px] w-[72px] h-[72px] md:left-[50px] md:bottom-[-40px] md:w-[90px] md:h-[90px] animate-spin-slow z-20 ${paused ? 'paused-spin' : ''}`}
            style={{ objectFit: "contain" }}
          />
          <img
            src={wheelImg}
            alt="Wheel"
            className={`absolute right-[40px] bottom-[-32px] w-[72px] h-[72px] md:right-[50px] md:bottom-[-40px] md:w-[90px] md:h-[90px] animate-spin-slow z-20 ${paused ? 'paused-spin' : ''}`}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffeb9c] to-white pt-10 md:pt-[50px]">
      <h2 className="modak text-5xl md:text-[75px] text-[#222] mb-8 md:mb-10 text-center w-full">
        THE TEAM
      </h2>
      <div
        className={`flex w-max animate-scroll ${paused ? 'paused-scroll' : ''}`}
        style={{ minWidth: '100%', width: 'max-content' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {allWagons}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .paused-scroll {
          animation-play-state: paused !important;
        }
        .animate-spin-slow {
          animation: spin-reverse 2s linear infinite;
        }
        .paused-spin {
          animation-play-state: paused !important;
        }
        @keyframes spin-reverse {
          100% { transform: rotate(-360deg); }
        }
      `}</style>
      <div className="w-full h-8 md:h-10 bg-[#a9744f] mt-2 rounded-t-sm" />

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white text-[#333333] rounded-2xl border-2 border-[#f9c74f] shadow-2xl p-4 md:p-6 w-[92vw] max-w-[560px] md:max-w-[640px] lg:max-w-[720px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 md:gap-5">
              <img
                src={selected.img}
                alt={selected.name}
                className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border-2 border-white"
              />
              <div className="flex-1">
                <div className="text-xl md:text-2xl font-bold leading-tight">{selected.name}</div>
                <div className="text-sm md:text-base text-gray-700">{selected.role}</div>
                {selected.linkedin && selected.linkedin.trim() !== "" && (
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[#f9c74f] hover:text-[#FFB300] font-semibold"
                  >
                    <FaGlobeAmericas className="w-4 h-4" />
                    <span>View Profile</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetOurTeam;
