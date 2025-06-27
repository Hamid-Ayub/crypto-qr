"use client";

import { useState, useRef } from "react";
import { cryptocurrencies } from "../data/cryptocurrencies";
import ConfigurationPanel from "./ConfigurationPanel";
import StatusBar from "./StatusBar";
import PhoneFrame from "./PhoneFrame";
import PhoneContent from "./PhoneContent";
import ScreenshotButton from "./ScreenshotButton";
import useQRCode from "../hooks/useQRCode";

const QRGenerator = () => {
  // Refs
  const phoneFrameRef = useRef(null);
  const phoneScreenRef = useRef(null);
  
  // Payment Details State
  const [address, setAddress] = useState("1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
  const [amount, setAmount] = useState("");
  const [label, setLabel] = useState("");
  
  // Cryptocurrency Configuration
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]); // Bitcoin by default
  
  // iPhone UI Configuration
  const [phoneTime, setPhoneTime] = useState("9:41");
  const [signalStrength, setSignalStrength] = useState(4);
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [showWifi, setShowWifi] = useState(true);
  
  // QR Code Configuration
  const [qrSize, setQrSize] = useState(300);
  const [qrColor, setQrColor] = useState("#000");
  const [qrBackground, setQrBackground] = useState("transparent");
  const [qrDotType, setQrDotType] = useState("dots");
  const [qrCornerType, setQrCornerType] = useState("extra-rounded");
  const [showConfig, setShowConfig] = useState(false);
  
  // Additional QR Code Settings
  const [qrErrorCorrection, setQrErrorCorrection] = useState("M");
  const [qrLogoSize, setQrLogoSize] = useState(30);
  const [qrMargin, setQrMargin] = useState(10);
  const [qrCornerColor, setQrCornerColor] = useState("#000000");
  const [qrDotColor, setQrDotColor] = useState("#000000");
  const [qrShowLogo, setQrShowLogo] = useState(true);
  const [qrGradientBackground, setQrGradientBackground] = useState(false);
  const [qrGradientStart, setQrGradientStart] = useState("#ffffff");
  const [qrGradientEnd, setQrGradientEnd] = useState("#f0f0f0");
  const [qrAnimated, setQrAnimated] = useState(false);
  
  // Custom hook for QR code functionality
  const { qrRef, handleDownload, regenerateQR, isQRReady } = useQRCode(
    address, 
    amount, 
    label, 
    selectedCrypto, 
    qrSize, 
    qrColor, 
    qrDotType, 
    qrCornerType, 
    qrBackground,
    qrErrorCorrection,
    qrLogoSize,
    qrMargin,
    qrCornerColor,
    qrDotColor,
    qrShowLogo,
    qrGradientBackground,
    qrGradientStart,
    qrGradientEnd,
    qrAnimated
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      {/* Configuration Panel */}
      <ConfigurationPanel 
        showConfig={showConfig}
        setShowConfig={setShowConfig}
        selectedCrypto={selectedCrypto}
        setSelectedCrypto={setSelectedCrypto}
        address={address}
        setAddress={setAddress}
        amount={amount}
        setAmount={setAmount}
        label={label}
        setLabel={setLabel}
        phoneTime={phoneTime}
        setPhoneTime={setPhoneTime}
        signalStrength={signalStrength}
        setSignalStrength={setSignalStrength}
        batteryLevel={batteryLevel}
        setBatteryLevel={setBatteryLevel}
        showWifi={showWifi}
        setShowWifi={setShowWifi}
        qrSize={qrSize}
        setQrSize={setQrSize}
        qrColor={qrColor}
        setQrColor={setQrColor}
        qrBackground={qrBackground}
        setQrBackground={setQrBackground}
        qrDotType={qrDotType}
        setQrDotType={setQrDotType}
        qrCornerType={qrCornerType}
        setQrCornerType={setQrCornerType}
        regenerateQR={regenerateQR}
        qrErrorCorrection={qrErrorCorrection}
        setQrErrorCorrection={setQrErrorCorrection}
        qrLogoSize={qrLogoSize}
        setQrLogoSize={setQrLogoSize}
        qrMargin={qrMargin}
        setQrMargin={setQrMargin}
        qrCornerColor={qrCornerColor}
        setQrCornerColor={setQrCornerColor}
        qrDotColor={qrDotColor}
        setQrDotColor={setQrDotColor}
        qrShowLogo={qrShowLogo}
        setQrShowLogo={setQrShowLogo}
        qrGradientBackground={qrGradientBackground}
        setQrGradientBackground={setQrGradientBackground}
        qrGradientStart={qrGradientStart}
        setQrGradientStart={setQrGradientStart}
        qrGradientEnd={qrGradientEnd}
        setQrGradientEnd={setQrGradientEnd}
        qrAnimated={qrAnimated}
        setQrAnimated={setQrAnimated}
      />

      {/* iPhone Frame with proper spacing */}
      <div className="ml-4">
        <PhoneFrame ref={phoneFrameRef} screenRef={phoneScreenRef}>
          {/* Status Bar */}
          <StatusBar 
            phoneTime={phoneTime}
            signalStrength={signalStrength}
            batteryLevel={batteryLevel}
            showWifi={showWifi}
          />
          
          {/* Phone Content */}
          <PhoneContent 
            selectedCrypto={selectedCrypto}
            qrRef={qrRef}
            handleDownload={handleDownload}
          />
        </PhoneFrame>
      </div>

      {/* Screenshot Button */}
      <ScreenshotButton phoneFrameRef={phoneScreenRef} isQRReady={isQRReady} />
    </div>
  );
};

export default QRGenerator; 