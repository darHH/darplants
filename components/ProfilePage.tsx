"use client";

import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Clickable Robot Icon */}
      <img
        className="cursor-pointer mr-20 w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 transition-transform hover:scale-110"
        src="/images/robot.png"
        alt="Future Profile Icon"
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
                I'm working on it!
            </h2>
            <p className="text-[#465D52] mt-1 text-xs">
                Oh, you found me! Dar is busy sprouting new and exciting features for this website — stay tuned
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 px-4 py-1 bg-[#65F695] text-white text-sm rounded-md hover:bg-[#0BC148] transition"
            >
              got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;