"use client";

const StatusBar = ({ phoneTime, signalStrength, batteryLevel, showWifi, isMobile = false }) => {
  const renderSignalBars = (strength) => {
    const bars = [];
    const barWidth = isMobile ? 2 : 3;
    const barHeights = isMobile ? [4, 6, 8, 10] : [6, 9, 12, 15];
    
    for (let i = 1; i <= 4; i++) {
      const height = i <= strength ? barHeights[i - 1] : (isMobile ? 2 : 3);
      const opacity = i <= strength ? 1 : 0.3;
      bars.push(
        <div
          key={i}
          className="bg-black rounded-sm"
          style={{ 
            width: `${barWidth}px`, 
            height: `${height}px`, 
            opacity 
          }}
        />
      );
    }
    return bars;
  };

  const renderBattery = (level) => {
    const batteryWidth = isMobile ? 18 : 22;
    const batteryHeight = isMobile ? 10 : 12;
    const width = Math.max(2, (level / 100) * (batteryWidth - 4));
    
    return (
      <div 
        className="border border-black rounded-[2px] relative"
        style={{ width: `${batteryWidth}px`, height: `${batteryHeight}px` }}
      >
        <div 
          className="absolute right-[-2px] top-[2px] bg-black rounded-r-[1px]"
          style={{ 
            width: `${isMobile ? 1.5 : 2}px`, 
            height: `${isMobile ? 5 : 6}px` 
          }}
        ></div>
        <div 
          className="absolute left-[1px] top-[1px] bg-black rounded-[1px]"
          style={{ 
            width: `${width}px`, 
            height: `${batteryHeight - 2}px` 
          }}
        ></div>
      </div>
    );
  };

  // Responsive classes
  const containerClasses = isMobile 
    ? "absolute top-0 left-0 right-0 h-[24px] flex items-center justify-between px-4 z-10" 
    : "absolute top-0 left-0 right-0 h-[30px] flex items-center justify-between px-6 z-10";
  
  const timeClasses = isMobile 
    ? "font-bold pl-1 text-sm" 
    : "font-bold pl-2";
  
  const statusContainerClasses = isMobile 
    ? "flex items-center space-x-1 pr-1" 
    : "flex items-center space-x-1 pr-2";
  
  const signalContainerClasses = isMobile 
    ? "flex items-end space-x-[0.5px]" 
    : "flex items-end space-x-[1px]";
  
  const wifiContainerClasses = isMobile 
    ? "ml-1" 
    : "ml-1";
  
  const batteryContainerClasses = isMobile 
    ? "ml-1 flex items-center" 
    : "ml-1 flex items-center";
  
  const batteryTextClasses = isMobile 
    ? "ml-1 text-xs" 
    : "ml-1 text-xs";

  return (
    <div className={containerClasses}>
      {/* Time (left, with extra left padding) */}
      <div className={timeClasses}>{phoneTime}</div>
      
      {/* Right side - Status icons */}
      <div className={statusContainerClasses}>
        {/* Signal */}
        <div className={signalContainerClasses}>
          {renderSignalBars(signalStrength)}
        </div>
        
        {/* WiFi */}
        {showWifi && (
          <div className={wifiContainerClasses}>
            <svg 
              width={isMobile ? 12 : 15} 
              height={isMobile ? 9 : 11} 
              viewBox="0 0 15 11" 
              fill="none"
            >
              <path d="M7.5 8.5C8.5 8.5 9.5 8.9 10.2 9.6L11.3 8.5C10.3 7.5 8.9 7 7.5 7C6.1 7 4.7 7.5 3.7 8.5L4.8 9.6C5.5 8.9 6.5 8.5 7.5 8.5Z" fill="black"/>
              <path d="M7.5 5.5C9.3 5.5 11 6.2 12.2 7.4L13.3 6.3C11.8 4.8 9.7 4 7.5 4C5.3 4 3.2 4.8 1.7 6.3L2.8 7.4C4 6.2 5.7 5.5 7.5 5.5Z" fill="black"/>
              <path d="M7.5 2.5C10.1 2.5 12.5 3.5 14.2 5.2L15.3 4.1C13.3 2.1 10.5 1 7.5 1C4.5 1 1.7 2.1 -0.3 4.1L0.8 5.2C2.5 3.5 4.9 2.5 7.5 2.5Z" fill="black"/>
            </svg>
          </div>
        )}
        
        {/* Battery */}
        <div className={batteryContainerClasses}>
          {renderBattery(batteryLevel)}
          <span className={batteryTextClasses}>{batteryLevel}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar; 