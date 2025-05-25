"use client";

import { useState, useEffect, useRef } from "react";
import sharon from "../assets/sharon.png";
import teambackground from "../assets/teambackground.png";

const teamMembers = [
  {
    name: "Sharon Basovich",
    image: sharon,
    socialLink: "https://linkedin.com/in/sharon-basovich", // Add your actual social links
  },
  {
    name: "Prasun",
    image: sharon,
    socialLink: "https://linkedin.com/in/prasun",
  },
  {
    name: "Elisha",
    image: sharon,
    socialLink: "https://linkedin.com/in/elisha",
  },
  {
    name: "Sathvik",
    image: sharon,
    socialLink: "https://linkedin.com/in/sathvik",
  },
  // add as many as you like
];

export default function MeetOurTeam() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-12">
        Meet Our Team
      </h2>
      <section
        className="max-w-6xl mx-auto border-4 border-black rounded-3xl px-0 py-6"
        style={{
          backgroundImage: `url(${teambackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "15/10",
        }}
      >
        <div className="overflow-hidden w-full relative mt-72">
          <div
            className="flex gap-15 animate-scroll"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* Render enough copies to ensure seamless scrolling */}
            {Array(4)
              .fill(teamMembers)
              .flat()
              .map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 flex flex-col items-center cursor-pointer relative"
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setHoveredIndex(null);
                  }}
                >
                  <div className="w-45 h-60 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{
                        objectFit: "contain",
                        display: "block",
                      }}
                    />

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 flex items-end justify-center transition-opacity duration-300 pb-4 ${
                        hoveredIndex === index ? "opacity-50" : "opacity-0"
                      }`}
                    >
                      <div className="bg-white bg-opacity-95 rounded-full w-37 h-37 flex flex-col items-center justify-center shadow-lg">
                        <p className="text-[#242424] text-sm font-semibold mb-2 text-center px-3">
                          {member.name}
                        </p>
                        <a
                          href={member.socialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${(160 + 60) * teamMembers.length}px);
            }
          }
          
          .animate-scroll {
            animation: scroll-infinite 8s linear infinite;
          }
        `,
          }}
        />
      </section>
    </>
  );
}
