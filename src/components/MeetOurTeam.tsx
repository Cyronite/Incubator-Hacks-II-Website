import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

type TeamMember = {
  name: string;
  image: string;
  linkedin: string;
};

type TeamDepartment = {
  name: string;
  members: TeamMember[];
};

type MeetOurTeamProps = {
  departments: TeamDepartment[];
};

export default function MeetOurTeam({ departments }: MeetOurTeamProps) {
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => prev - 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const repeatedDepartments = [...departments, ...departments];

  return (
    <div className="relative bg-[#FFFBEA] py-24 overflow-hidden">
      <h2 className="text-5xl font-bold text-center text-[#4B3F72] mb-20">
        Meet Our Team
      </h2>

      <div className="relative h-[360px] w-full overflow-hidden">
        <motion.div
          animate={{ x }}
          transition={{ ease: "linear", duration: 0 }}
          style={{ display: "flex", width: "max-content" }}
          className="absolute gap-16"
        >
          {repeatedDepartments.map((department, idx) => (
            <div
              key={idx}
              className="relative bg-[#E2B07F] rounded-[12px] min-w-[350px] h-[250px] px-6 pt-6 pb-12 shadow-lg border-4 border-[#A05A2C] flex flex-col items-center"
            >
              {/* Wagon shape */}
              <div className="absolute -bottom-8 left-6 w-12 h-12 bg-[#A05A2C] rounded-full border-[6px] border-[#703C1C]"></div>
              <div className="absolute -bottom-8 right-6 w-12 h-12 bg-[#A05A2C] rounded-full border-[6px] border-[#703C1C]"></div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {department.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {department.members.map((member, i) => (
                  <div key={i} className="w-20 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xs mt-1 text-center font-medium text-white">
                      {member.name}
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white mt-1 hover:text-yellow-300"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}