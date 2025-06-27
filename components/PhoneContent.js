"use client";

const PhoneContent = ({ selectedCrypto, qrRef, handleDownload }) => {
  return (
    <div className="pt-[100px] px-6 h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <img 
            src={selectedCrypto.logo} 
            alt={selectedCrypto.name}
            className="w-8 h-8"
            crossOrigin="anonymous"
          />
          <h1 className="text-2xl font-bold text-gray-900">{selectedCrypto.name}</h1>
        </div>
        <p className="text-gray-600 text-sm">Scan to pay with {selectedCrypto.symbol}</p>
      </div>

      {/* QR Code Container */}
      <div className="flex-1 flex items-center justify-center mb-8">
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <div ref={qrRef} className="flex justify-center" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-gray-200 text-gray-800 rounded-xl py-3 text-sm font-medium hover:bg-gray-300 transition-colors">
          Add amount
        </button>
        <button 
          onClick={handleDownload} 
          className="flex-1 bg-green-500 text-white rounded-xl py-3 text-sm font-medium hover:bg-green-600 transition-colors"
        >
          Share
        </button>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center mb-4">
        <div className="w-[134px] h-[5px] bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneContent; 