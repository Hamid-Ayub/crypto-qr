"use client";

import { useEffect, useRef, useCallback } from "react";
import QRCodeStyling from "qr-code-styling";

const useQRCode = (
  address, 
  amount, 
  label, 
  selectedCrypto, 
  qrSize, 
  qrColor, 
  qrDotType, 
  qrCornerType, 
  qrBackground,
  qrErrorCorrection = "M",
  qrLogoSize = 30,
  qrMargin = 10,
  qrCornerColor = "#000000",
  qrDotColor = "#000000",
  qrShowLogo = true,
  qrGradientBackground = false,
  qrGradientStart = "#ffffff",
  qrGradientEnd = "#f0f0f0",
  qrAnimated = false,
  onQRReady = null
) => {
  const qrRef = useRef(null);
  const qrCode = useRef(null);
  const isRendering = useRef(false);

  const generateQRData = useCallback(() => {
    const params = new URLSearchParams();
    if (amount) params.append("amount", amount);
    if (label) params.append("label", label);
    
    // Generate QR data based on cryptocurrency protocol
    let data;
    if (selectedCrypto.protocol === 'bitcoin') {
      data = `bitcoin:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'ethereum') {
      data = `ethereum:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'ripple') {
      data = `ripple:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'litecoin') {
      data = `litecoin:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'dogecoin') {
      data = `dogecoin:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'bitcoincash') {
      data = `bitcoincash:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'stellar') {
      data = `stellar:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'monero') {
      data = `monero:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'eos') {
      data = `eos:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'tezos') {
      data = `tezos:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'cardano') {
      data = `cardano:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'solana') {
      data = `solana:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'polkadot') {
      data = `polkadot:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else if (selectedCrypto.protocol === 'tron') {
      data = `tron:${address}${params.toString() ? "?" + params.toString() : ""}`;
    } else {
      // Fallback to plain address for unsupported protocols
      data = address;
    }

    return data;
  }, [address, amount, label, selectedCrypto]);

  useEffect(() => {
    // Determine background color based on gradient setting
    let backgroundColor = qrBackground;
    if (qrGradientBackground && qrBackground === "transparent") {
      backgroundColor = `linear-gradient(45deg, ${qrGradientStart}, ${qrGradientEnd})`;
    }

    // Determine image based on show logo setting
    const image = qrShowLogo ? selectedCrypto.logo : undefined;

    qrCode.current = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: "svg",
      data: "", // Will be set in the data effect
      image: image,
      margin: qrMargin,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: qrErrorCorrection,
      },
      dotsOptions: { 
        color: qrDotColor, 
        type: qrDotType,
        gradient: qrAnimated ? {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: qrDotColor },
            { offset: 1, color: qrCornerColor }
          ]
        } : undefined
      },
      cornersSquareOptions: { 
        type: qrCornerType,
        color: qrCornerColor,
        gradient: qrAnimated ? {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: qrCornerColor },
            { offset: 1, color: qrDotColor }
          ]
        } : undefined
      },
      cornersDotOptions: { 
        type: qrCornerType,
        color: qrCornerColor 
      },
      backgroundOptions: { 
        color: backgroundColor,
        gradient: qrGradientBackground ? {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: qrGradientStart },
            { offset: 1, color: qrGradientEnd }
          ]
        } : undefined
      },
      imageOptions: { 
        crossOrigin: "anonymous", 
        margin: qrMargin, 
        imageSize: qrLogoSize / 100,
        hideBackgroundDots: true
      },
    });
  }, [
    qrSize, 
    qrColor, 
    qrDotType, 
    qrCornerType, 
    qrBackground, 
    selectedCrypto,
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
  ]);

  useEffect(() => {
    if (!qrCode.current) return;

    isRendering.current = true;
    const data = generateQRData();
    
    qrCode.current.update({ data });
    qrRef.current.innerHTML = "";
    qrCode.current.append(qrRef.current);

    // Wait for QR code to be fully rendered
    setTimeout(() => {
      isRendering.current = false;
      if (onQRReady) {
        onQRReady();
      }
    }, 300);
  }, [address, amount, label, selectedCrypto, generateQRData, onQRReady]);

  const regenerateQR = useCallback(() => {
    if (!qrCode.current || !qrRef.current) return;
    
    isRendering.current = true;
    const data = generateQRData();
    qrCode.current.update({ data });
    qrRef.current.innerHTML = "";
    qrCode.current.append(qrRef.current);

    // Wait for QR code to be fully rendered
    setTimeout(() => {
      isRendering.current = false;
      if (onQRReady) {
        onQRReady();
      }
    }, 300);
  }, [generateQRData, onQRReady]);

  const handleDownload = () => {
    qrCode.current.download({ name: `${selectedCrypto.symbol.toLowerCase()}-qr`, extension: "png" });
  };

  const isQRReady = () => !isRendering.current;

  return { qrRef, handleDownload, regenerateQR, isQRReady };
};

export default useQRCode; 