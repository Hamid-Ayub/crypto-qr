"use client";

import { useState } from "react";
import { cryptocurrencies } from "../data/cryptocurrencies";

const ConfigurationPanel = ({ 
  showConfig, 
  setShowConfig, 
  selectedCrypto, 
  setSelectedCrypto,
  address,
  setAddress,
  amount,
  setAmount,
  label,
  setLabel,
  phoneTime,
  setPhoneTime,
  signalStrength,
  setSignalStrength,
  batteryLevel,
  setBatteryLevel,
  showWifi,
  setShowWifi,
  qrSize,
  setQrSize,
  qrColor,
  setQrColor,
  qrBackground,
  setQrBackground,
  qrDotType,
  setQrDotType,
  qrCornerType,
  setQrCornerType,
  regenerateQR,
  qrErrorCorrection,
  setQrErrorCorrection,
  qrLogoSize,
  setQrLogoSize,
  qrMargin,
  setQrMargin,
  qrCornerColor,
  setQrCornerColor,
  qrDotColor,
  setQrDotColor,
  qrShowLogo,
  setQrShowLogo,
  qrGradientBackground,
  setQrGradientBackground,
  qrGradientStart,
  setQrGradientStart,
  qrGradientEnd,
  setQrGradientEnd,
  qrAnimated,
  isMobile = false
}) => {
  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false);

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
    setShowCryptoDropdown(false);
    setAddress("");
  };

  // Mobile positioning
  const mobileClasses = isMobile 
    ? "relative w-full max-w-none mb-4" 
    : "absolute top-4 left-4 z-50 max-w-sm";

  return (
    <div className={mobileClasses}>
      <div className="bg-white rounded-xl shadow-lg p-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Configuration</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={regenerateQR}
              className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
            >
              {isMobile ? "Generate" : "Generate QR"}
            </button>
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="text-gray-600 hover:text-gray-900 p-1"
            >
              {showConfig ? "▼" : "▶"}
            </button>
          </div>
        </div>
        
        {showConfig && (
          <div className="space-y-6">
            {/* Cryptocurrency Selection */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Cryptocurrency</h3>
              <div className="relative">
                <button
                  onClick={() => setShowCryptoDropdown(!showCryptoDropdown)}
                  className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src={selectedCrypto.logo} 
                      alt={selectedCrypto.name}
                      className="w-6 h-6"
                      crossOrigin="anonymous"
                    />
                    <span className="font-medium">{selectedCrypto.name}</span>
                    <span className="text-gray-500">({selectedCrypto.symbol})</span>
                  </div>
                  <span className="text-gray-400">▼</span>
                </button>
                
                {showCryptoDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                    {cryptocurrencies.map((crypto) => (
                      <button
                        key={crypto.id}
                        onClick={() => handleCryptoSelect(crypto)}
                        className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        <img 
                          src={crypto.logo} 
                          alt={crypto.name}
                          className="w-6 h-6"
                          crossOrigin="anonymous"
                        />
                        <div className="text-left">
                          <div className="font-medium">{crypto.name}</div>
                          <div className="text-sm text-gray-500">{crypto.symbol}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Payment Details */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Payment Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">{selectedCrypto.name} Address</label>
                  <input
                    type="text"
                    placeholder={`Enter ${selectedCrypto.name} address`}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Amount ({selectedCrypto.symbol})</label>
                  <input
                    type="number"
                    placeholder={`Enter amount in ${selectedCrypto.symbol}`}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Label (optional)</label>
                  <input
                    type="text"
                    placeholder="Enter payment label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* iPhone UI Settings */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-800 mb-4">iPhone UI Settings</h3>
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Time</label>
                  <input
                    type="text"
                    value={phoneTime}
                    onChange={(e) => setPhoneTime(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="9:41"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Signal Strength</label>
                  <select
                    value={signalStrength}
                    onChange={(e) => setSignalStrength(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value={1}>1 Bar</option>
                    <option value={2}>2 Bars</option>
                    <option value={3}>3 Bars</option>
                    <option value={4}>4 Bars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Battery Level (%)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={batteryLevel}
                    onChange={(e) => setBatteryLevel(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">{batteryLevel}%</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showWifi"
                    checked={showWifi}
                    onChange={(e) => setShowWifi(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="showWifi" className="text-sm text-gray-600">Show WiFi</label>
                </div>
              </div>
            </div>

            {/* QR Code Settings */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">QR Code Settings</h3>
              <div className="space-y-4">
                {/* Basic Settings */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Size (px)</label>
                    <input
                      type="number"
                      value={qrSize}
                      onChange={(e) => setQrSize(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      min="100"
                      max="500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Error Correction</label>
                    <select
                      value={qrErrorCorrection || "M"}
                      onChange={(e) => setQrErrorCorrection(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="L">Low (7%)</option>
                      <option value="M">Medium (15%)</option>
                      <option value="Q">Quartile (25%)</option>
                      <option value="H">High (30%)</option>
                    </select>
                  </div>
                </div>

                {/* Color Settings */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">QR Color</label>
                    <input
                      type="color"
                      value={qrColor}
                      onChange={(e) => setQrColor(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg h-10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Background</label>
                    <input
                      type="color"
                      value={qrBackground === "transparent" ? "#ffffff" : qrBackground}
                      onChange={(e) => setQrBackground(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg h-10"
                    />
                  </div>
                </div>

                {/* Style Settings */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Dot Type</label>
                    <select
                      value={qrDotType}
                      onChange={(e) => setQrDotType(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="dots">Dots</option>
                      <option value="rounded">Rounded</option>
                      <option value="square">Square</option>
                      <option value="classy">Classy</option>
                      <option value="extra-rounded">Extra Rounded</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Corner Type</label>
                    <select
                      value={qrCornerType}
                      onChange={(e) => setQrCornerType(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="extra-rounded">Extra Rounded</option>
                      <option value="rounded">Rounded</option>
                      <option value="square">Square</option>
                      <option value="dot">Dot</option>
                    </select>
                  </div>
                </div>

                {/* Image Settings */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Logo Size (%)</label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={qrLogoSize || 30}
                      onChange={(e) => setQrLogoSize(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-500">{qrLogoSize || 30}%</span>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Margin (px)</label>
                    <input
                      type="number"
                      value={qrMargin || 10}
                      onChange={(e) => setQrMargin(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      min="0"
                      max="50"
                    />
                  </div>
                </div>

                {/* Advanced Settings */}
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Corner Color</label>
                    <input
                      type="color"
                      value={qrCornerColor || "#000000"}
                      onChange={(e) => setQrCornerColor(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg h-10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Dot Color</label>
                    <input
                      type="color"
                      value={qrDotColor || "#000000"}
                      onChange={(e) => setQrDotColor(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg h-10"
                    />
                  </div>
                </div>

                {/* Toggle Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600">Show Logo</label>
                    <input
                      type="checkbox"
                      id="showLogo"
                      checked={qrShowLogo !== false}
                      onChange={(e) => setQrShowLogo(e.target.checked)}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600">Gradient Background</label>
                    <input
                      type="checkbox"
                      id="gradientBackground"
                      checked={qrGradientBackground || false}
                      onChange={(e) => setQrGradientBackground(e.target.checked)}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600">Animated QR</label>
                    <input
                      type="checkbox"
                      id="animatedQR"
                      checked={qrAnimated || false}
                      onChange={(e) => setQrAnimated(e.target.checked)}
                      className="ml-2"
                    />
                  </div>
                </div>

                {/* Gradient Settings (conditional) */}
                {qrGradientBackground && (
                  <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4 p-4 bg-gray-50 rounded-lg`}>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Gradient Start</label>
                      <input
                        type="color"
                        value={qrGradientStart || "#ffffff"}
                        onChange={(e) => setQrGradientStart(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg h-10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Gradient End</label>
                      <input
                        type="color"
                        value={qrGradientEnd || "#f0f0f0"}
                        onChange={(e) => setQrGradientEnd(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg h-10"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigurationPanel; 