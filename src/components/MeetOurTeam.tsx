import { useEffect, useState } from "react";
import cartImg from "../assets/cart.png";
import wheelImg from "../assets/wheel.png";
import Sharon from "../assets/portraits/sharon.jpg";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Sharon", role: "Web Developer", img: Sharon, linkedin: "" },
  { name: "Sathvik", role: "Web Developer", img: "/pfp2.jpg", linkedin: "https://www.linkedin.com/in/sathvik" },
  { name: "Prasun", role: "Web Developer", img: "/pfp3.jpg", linkedin: "https://www.linkedin.com/in/prasun" },
  { name: "Dana", role: "QA Engineer", img: "/pfp4.jpg", linkedin: "https://www.linkedin.com/in/dana" },
  { name: "Eli", role: "DevOps", img: "/pfp5.jpg", linkedin: "https://www.linkedin.com/in/eli" },
  { name: "Fiona", role: "UX Researcher", img: "/pfp6.jpg", linkedin: "https://www.linkedin.com/in/fiona" },
  { name: "George", role: "Scrum Master", img: "/pfp7.jpg", linkedin: "https://www.linkedin.com/in/george" },
  { name: "Hannah", role: "Engineer", img: "/pfp8.jpg", linkedin: "https://www.linkedin.com/in/hannah" },
  { name: "Ian", role: "Analyst", img: "/pfp9.jpg", linkedin: "https://www.linkedin.com/in/ian" },
  { name: "Jill", role: "Content Strategist", img: "/pfp10.jpg", linkedin: "https://www.linkedin.com/in/jill" },
  // Add more members up to 18 as needed
];

const WAGON_WIDTH = 260;
const NUM_CARTS = 6; // Fixed number of carts
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