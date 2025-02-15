import React, { useEffect } from "react";

function NavBar({ menuOpen, setManuOpen }) {
  useEffect(
    () => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    },
    { menuOpen }
  );
  return (
    <div className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg}">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold">
            Rifat<spam className="text-blue-500">.tech</spam>
          </a>
          <div className="w-7 relative cursor-pointer x-40 md:hidden" onClick={()=>setManuOpen((prev)=>(!prev))}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#Projets"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projets
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
