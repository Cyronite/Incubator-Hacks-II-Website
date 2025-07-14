import { useEffect, useState } from "react";
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

interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  // Co-leads
  { name: "Shreemayi Kurup", role: "Co-lead", img: Shreemayi, linkedin: "https://www.linkedin.com/in/shreemayi-kurup-50b890210" },

  // Website Team
  // { name: "Prasun Sharma", role: "Website Lead", img: "", linkedin: "https://www.linkedin.com/in/prasun-sharma-98a4a32b2/" },
  { name: "Sathvik Haridasu", role: "Website", img: Sathvik, linkedin: "https://www.linkedin.com/in/sathvik-haridasu/" },
  { name: "Sharon Basovich", role: "Website", img: Sharon, linkedin: "https://www.linkedin.com/in/sharon-basovich" },

  // Logistics Team
  { name: "Luning Wang", role: "Logistics Lead", img: Luning, linkedin: "https://www.linkedin.com/in/luning-wang~" },
  { name: "Daniel Xu", role: "Logistics", img: Daniel, linkedin: "https://www.linkedin.com/in/daniel-xu-876272368/" },
  // { name: "Yuvaansh Kapila", role: "Logistics", img: "", linkedin: "https://www.linkedin.com/in/yuvaansh-kapila-3b4bab364" },
  { name: "Ayah Elhedhli", role: "Logistics", img: Ayah, linkedin: "" },

  // Finance Team
  { name: "Nereyal Jeyakumar", role: "Finance Lead", img: Nereyal, linkedin: "https://ca.linkedin.com/in/nereyal-jeyakumar-8ab86931a" },
  { name: "Jaitra Bhatt", role: "Finance", img: Jaitra, linkedin: "https://docs.google.com/document/d/1w0SbDl-k7kOLoUUBUNR8OUf6ijcPJ-cxbPODvJYxv4k/edit?tab=t.0" },
  { name: "Alan Liu", role: "Finance", img: Alan, linkedin: "http://www.tcal.xyz" },
  // { name: "Elizabeth Liu", role: "Finance", img: "", linkedin: "https://www.linkedin.com/in/elizabeth-liu-951314366" },

  // Marketing Team
  { name: "Charmaine Chan", role: "Marketing Lead", img: Charmaine, linkedin: "" },
  { name: "Sophia Cui", role: "Marketing", img: Sophia, linkedin: "" },
  { name: "Aanya Rooprai", role: "Marketing", img: Aanya, linkedin: "" },
];


const NUM_CARTS = 4; // Fixed number of carts
const MEMBERS_PER_CART = 3;

const MeetOurTeam: React.FC = () => {
  const [paused, setPaused] = useState<boolean>(false);

  // Create groups of 3 members each, cycling through all team members
  const createGroups = (): TeamMember[][] => {
    const groups: TeamMember[][] = [];
    const totalMembers = teamMembers.length;
    
    for (let i = 0; i < NUM_CARTS; i++) {
      const group: TeamMember[] = [];
      for (let j = 0; j < MEMBERS_PER_CART; j++) {
        const memberIndex = (i * MEMBERS_PER_CART + j) % totalMembers;
        group.push(teamMembers[memberIndex]);
      }
      groups.push(group);
    }
    
    return groups;
  };

  const allGroups = createGroups();

  // Duplicate the wagons for infinite scroll effect
  const allWagons = [...allGroups, ...allGroups].map((group, i) => (
    <div
      key={i}
      className="relative flex flex-col items-center w-[340px] h-[200px] justify-end mx-8"
    >
      <div className="flex w-full justify-between px-10 mb-[-36px]">
        {group.map((member, j) => (
          <div key={j} className="relative group flex flex-col items-center">
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={member.name + " LinkedIn"}
                className="focus:outline-none"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-28 w-20 object-cover border-2 border-white transition-transform duration-300 group-hover:-translate-y-4"
                  style={{
                    borderRadius: "60% 60% 50% 50% / 80% 80% 60% 60%",
                  }}
                />
              </a>
            ) : (
              <img
                src={member.img}
                alt={member.name}
                className="h-28 w-20 object-cover border-2 border-white transition-transform duration-300 group-hover:-translate-y-4"
                style={{
                  borderRadius: "60% 60% 50% 50% / 80% 80% 60% 60%",
                }}
              />
            )}
            <div className="absolute top-[-2.5rem] left-1/2 z-20 w-max -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 shadow-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
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
          className="w-[400px] h-auto z-0"
          style={{ objectFit: "contain" }}
        />
        <img
          src={wheelImg}
          alt="Wheel"
          className={`absolute left-[40px] bottom-[-32px] w-[72px] h-[72px] animate-spin-slow z-20${
            paused ? " paused-spin" : ""
          }`}
          style={{ objectFit: "contain" }}
        />
        <img
          src={wheelImg}
          alt="Wheel"
          className={`absolute right-[40px] bottom-[-32px] w-[72px] h-[72px] animate-spin-slow z-20${
            paused ? " paused-spin" : ""
          }`}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  ));

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffeb9c] to-white pt-10">
      <h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center w-full">
        THE TEAM
      </h2>
      <div
        className={`flex w-max animate-scroll${
          paused ? " paused-scroll" : ""
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ minWidth: '100%', width: 'max-content' }}
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
      <div className="w-full h-8 bg-[#a9744f] mt-2 rounded-t-sm" />
    </div>
  );
};

export default MeetOurTeam;