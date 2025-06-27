"use client";

import { forwardRef } from "react";

const PhoneFrame = forwardRef(({ children, screenRef, isMobile = false }, ref) => {
  // Responsive sizing
  const mobileClasses = isMobile 
    ? "w-[280px] h-[600px] rounded-[40px] p-3" 
    : "w-[390px] h-[844px] rounded-[60px] p-4";
  
  const mobileScreenClasses = isMobile
    ? "w-[256px] h-[564px] rounded-[32px]"
    : "w-[366px] h-[794px] rounded-[52px]";

  const mobileIslandClasses = isMobile
    ? "w-[80px] h-[24px] rounded-b-[12px]"
    : "w-[120px] h-[36px] rounded-b-[18px]";

  const mobileIslandDotClasses = isMobile
    ? "w-[16px] h-[16px] mr-1"
    : "w-[22px] h-[22px] mr-2";

  const mobileIslandSmallDotClasses = isMobile
    ? "w-[9px] h-[9px]"
    : "w-[13px] h-[13px]";

  return (
    <div className="relative flex items-center justify-center bg-[#181f2a]" ref={ref} data-phone-frame>
      {/* Phone Body */}
      <div className={`relative ${mobileClasses} bg-black shadow-2xl flex items-center justify-center`}>
        {/* Screen */}
        <div className={`relative ${mobileScreenClasses} bg-white overflow-hidden flex flex-col`}>
          {/* Dynamic Island */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${mobileIslandClasses} bg-black z-20 flex items-center justify-center`}>
            <div className={`${mobileIslandDotClasses} bg-gray-800 rounded-full`}></div>
            <div className={`${mobileIslandSmallDotClasses} bg-gray-800 rounded-full`}></div>
          </div>
          {/* Screenshot area */}
          <div
            ref={screenRef}
            className="relative flex-1 flex flex-col z-30"
            style={{
              marginTop: isMobile ? 32 : 44, // Adjusted to account for status bar height
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
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${isMobile ? 'w-[220px] h-6' : 'w-[320px] h-8'} bg-black opacity-20 rounded-full blur-xl z-0`}></div>
    </div>
  );
});

PhoneFrame.displayName = "PhoneFrame";

export default PhoneFrame; 