import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t to-[#a9744f] from-[#4c3627] text-white py-6 px-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <span className="font-bold text-lg">Incubator Hacks II</span>
          <span className="block text-xs text-gray-300 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/IncubatorHacks" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">GitHub</a>
          <a href="mailto:info@incubatorhacks.com" className="hover:text-yellow-300 transition-colors">Contact</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
