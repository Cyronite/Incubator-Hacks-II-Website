"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import sharon from "../assets/sharon.jpg";

const teamMembers = [
  { name: "Sharon Basovich", image: sharon },
  { name: "Prasun", image: "../assets/sharon.jpg" },
  { name: "Elisha", image: "/images/jamie.jpg" },
  { name: "Sathvik", image: "/images/chris.jpg" },
  // add as many as you like
];

export default function MeetOurTeam() {
  const [isPaused, setIsPaused] = useState(false);

  // Reference to one full set container to measure width dynamically
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Width of one full set of members
      setScrollWidth(containerRef.current.scrollWidth);
    }
  }, []);

  return (
    <section className="max-w-6xl mx-auto border-4 border-black rounded-3xl px-0 py-6">
      <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-12">
        Meet Our Team
      </h2>

      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: isPaused ? 0 : -scrollWidth,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          }}
          style={{ cursor: "grab" }}
        >
          {/* Duplicate the array twice for smooth scrolling */}
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-[#242424]"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-lg font-semibold mt-4 text-[#242424]">
                {member.name}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Hidden div to measure width of one set */}
        <div
          ref={containerRef}
          className="flex gap-8 whitespace-nowrap absolute top-0 left-0 opacity-0 pointer-events-none select-none"
          style={{ width: "max-content" }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={`measure-${idx}`}
              className="flex-shrink-0 w-40 flex flex-col items-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-[#242424]"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-lg font-semibold mt-4 text-[#242424]">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
