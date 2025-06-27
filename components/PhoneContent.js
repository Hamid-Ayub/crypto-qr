"use client";

const PhoneContent = ({ selectedCrypto, qrRef, handleDownload, isMobile = false }) => {
  // Responsive classes
  const containerClasses = isMobile 
    ? "pt-[60px] px-4 h-full flex flex-col" 
    : "pt-[100px] px-6 h-full flex flex-col";
  
  const headerClasses = isMobile 
    ? "text-center mb-6" 
    : "text-center mb-8";
  
  const titleClasses = isMobile 
    ? "text-xl font-bold text-gray-900" 
    : "text-2xl font-bold text-gray-900";
  
  const subtitleClasses = isMobile 
    ? "text-gray-600 text-xs" 
    : "text-gray-600 text-sm";
  
  const qrContainerClasses = isMobile 
    ? "flex-1 flex items-center justify-center mb-6" 
    : "flex-1 flex items-center justify-center mb-8";
  
  const qrWrapperClasses = isMobile 
    ? "bg-white p-3 rounded-2xl shadow-lg" 
    : "bg-white p-4 rounded-3xl shadow-lg";
  
  const buttonContainerClasses = isMobile 
    ? "flex gap-2 mb-6" 
    : "flex gap-3 mb-8";
  
  const buttonClasses = isMobile 
    ? "flex-1 bg-gray-200 text-gray-800 rounded-lg py-2 text-xs font-medium hover:bg-gray-300 transition-colors" 
    : "flex-1 bg-gray-200 text-gray-800 rounded-xl py-3 text-sm font-medium hover:bg-gray-300 transition-colors";
  
  const shareButtonClasses = isMobile 
    ? "flex-1 bg-green-500 text-white rounded-lg py-2 text-xs font-medium hover:bg-green-600 transition-colors" 
    : "flex-1 bg-green-500 text-white rounded-xl py-3 text-sm font-medium hover:bg-green-600 transition-colors";
  
  const homeIndicatorClasses = isMobile 
    ? "flex justify-center mb-3" 
    : "flex justify-center mb-4";
  
  const homeIndicatorBarClasses = isMobile 
    ? "w-[100px] h-[4px] bg-gray-400 rounded-full" 
    : "w-[134px] h-[5px] bg-gray-400 rounded-full";

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className={headerClasses}>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <img 
            src={selectedCrypto.logo} 
            alt={selectedCrypto.name}
            className={isMobile ? "w-6 h-6" : "w-8 h-8"}
            crossOrigin="anonymous"
          />
          <h1 className={titleClasses}>{selectedCrypto.name}</h1>
        </div>
        <p className={subtitleClasses}>Scan to pay with {selectedCrypto.symbol}</p>
      </div>

      {/* QR Code Container */}
      <div className={qrContainerClasses}>
        <div className={qrWrapperClasses}>
          <div ref={qrRef} className="flex justify-center" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className={buttonContainerClasses}>
        <button className={buttonClasses}>
          Add amount
        </button>
        <button 
          onClick={handleDownload} 
          className={shareButtonClasses}
        >
          Share
        </button>
      </div>

      {/* Home Indicator */}
      <div className={homeIndicatorClasses}>
        <div className={homeIndicatorBarClasses}></div>
      </div>
    </div>
  );
};

export default PhoneContent; 