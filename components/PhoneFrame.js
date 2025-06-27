"use client";

import { forwardRef } from "react";

const PhoneFrame = forwardRef(({ children, screenRef }, ref) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#181f2a]" ref={ref} data-phone-frame>
      {/* Phone Body */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[60px] p-4 shadow-2xl flex items-center justify-center">
        {/* Screen */}
        <div className="relative w-[366px] h-[794px] bg-white rounded-[52px] overflow-hidden flex flex-col">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-black rounded-b-[18px] z-20 flex items-center justify-center">
            <div className="w-[22px] h-[22px] bg-gray-800 rounded-full mr-2"></div>
            <div className="w-[13px] h-[13px] bg-gray-800 rounded-full"></div>
          </div>
          {/* Screenshot area */}
          <div
            ref={screenRef}
            className="relative flex-1 flex flex-col z-30"
            style={{
              marginTop: 44, // Adjusted to account for status bar height
              padding: "0 0 0 0",
              background: "none",
              borderRadius: 0,
              boxShadow: "none",
            }}
            data-phone-screenshot
          >
            {children}
          </div>
        </div>
      </div>
      {/* Phone Shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-8 bg-black opacity-20 rounded-full blur-xl z-0"></div>
    </div>
  );
});

PhoneFrame.displayName = "PhoneFrame";

export default PhoneFrame; 