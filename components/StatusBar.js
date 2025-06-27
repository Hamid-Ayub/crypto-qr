"use client";

const StatusBar = ({ phoneTime, signalStrength, batteryLevel, showWifi }) => {
  const renderSignalBars = (strength) => {
    const bars = [];
    for (let i = 1; i <= 4; i++) {
      const height = i <= strength ? [6, 9, 12, 15][i - 1] : 3;
      const opacity = i <= strength ? 1 : 0.3;
      bars.push(
        <div
          key={i}
          className="w-[3px] bg-black rounded-sm"
          style={{ height: `${height}px`, opacity }}
        />
      );
    }
    return bars;
  };

  const renderBattery = (level) => {
    const width = Math.max(2, (level / 100) * 16);
    return (
      <div className="w-[22px] h-[12px] border border-black rounded-[2px] relative">
        <div className="absolute right-[-3px] top-[3px] w-[2px] h-[6px] bg-black rounded-r-[1px]"></div>
        <div 
          className="absolute left-[2px] top-[2px] h-[8px] bg-black rounded-[1px]"
          style={{ width: `${width}px` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-[30px] flex items-center justify-between px-6 z-10">
      {/* Time (left, with extra left padding) */}
      <div className="font-bold pl-2">{phoneTime}</div>
      
      {/* Right side - Status icons */}
      <div className="flex items-center space-x-1 pr-2">
        {/* Signal */}
        <div className="flex items-end space-x-[1px]">
          {renderSignalBars(signalStrength)}
        </div>
        
        {/* WiFi */}
        {showWifi && (
          <div className="ml-1">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path d="M7.5 8.5C8.5 8.5 9.5 8.9 10.2 9.6L11.3 8.5C10.3 7.5 8.9 7 7.5 7C6.1 7 4.7 7.5 3.7 8.5L4.8 9.6C5.5 8.9 6.5 8.5 7.5 8.5Z" fill="black"/>
              <path d="M7.5 5.5C9.3 5.5 11 6.2 12.2 7.4L13.3 6.3C11.8 4.8 9.7 4 7.5 4C5.3 4 3.2 4.8 1.7 6.3L2.8 7.4C4 6.2 5.7 5.5 7.5 5.5Z" fill="black"/>
              <path d="M7.5 2.5C10.1 2.5 12.5 3.5 14.2 5.2L15.3 4.1C13.3 2.1 10.5 1 7.5 1C4.5 1 1.7 2.1 -0.3 4.1L0.8 5.2C2.5 3.5 4.9 2.5 7.5 2.5Z" fill="black"/>
            </svg>
          </div>
        )}
        
        {/* Battery */}
        <div className="ml-1 flex items-center">
          {renderBattery(batteryLevel)}
          <span className="ml-1 text-xs">{batteryLevel}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar; 