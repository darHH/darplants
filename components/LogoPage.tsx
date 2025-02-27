"use client";

import React, { useState } from "react";

const LogoPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Clickable Logo Icon */}
      <img 
      className="m-12 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 drop-shadow-lg hover:scale-110" 
      src="/images/oglogobig.png"
      alt="darplants logo"
      onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} 
        >
          {/* Modal Content */}
          <div
            className="bg-white p-4 rounded-md shadow-lg max-w-xs text-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-lg font-bold text-[#202A25]">
                Did you know?
            </h2>
            <p className="text-[#465D52] mt-1 text-xs">
              Dar is behind every little detail you see here! From hand-drawing this and all the other logos, developing the website, and of course, styling the plants.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 px-4 py-1 bg-[#65F695] text-white text-sm rounded-md hover:bg-[#0BC148] transition"
            >
              happy browsing :D
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoPage;