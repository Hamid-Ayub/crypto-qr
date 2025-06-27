"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import ScreenshotModal from "./ScreenshotModal";

const ScreenshotButton = ({ phoneFrameRef, isQRReady }) => {
  const buttonRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenshotData, setScreenshotData] = useState(null);

  const takeScreenshot = async () => {
    if (!phoneFrameRef.current || isCapturing) return;

    try {
      setIsCapturing(true);

      // Show loading state
      if (buttonRef.current) {
        buttonRef.current.innerHTML = `
          <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        `;
      }

      // Wait for QR code to be ready
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds max wait
      while (!isQRReady() && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      if (!isQRReady()) {
        setIsCapturing(false);
        return;
      }
      // Additional wait to ensure everything is fully rendered
      await new Promise(resolve => setTimeout(resolve, 200));

      // Use html-to-image to capture the screenshot
      const dataUrl = await toPng(phoneFrameRef.current, {
        cacheBust: true,
        backgroundColor: '#fff', // match your bg
        pixelRatio: 2,
        // filter: (node) => true, // Optionally filter nodes
      });
      setScreenshotData(dataUrl);
      setIsModalOpen(true);

      // Reset button state
      if (buttonRef.current) {
        buttonRef.current.innerHTML = `
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        `;
      }
      setIsCapturing(false);

    } catch (error) {
      console.error("Screenshot failed:", error);
      // Show error feedback
      if (buttonRef.current) {
        buttonRef.current.innerHTML = `
          <svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        `;
      }
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.innerHTML = `
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          `;
        }
        setIsCapturing(false);
      }, 2000);
    }
  };

  const handleDownload = () => {
    if (!screenshotData) return;
    // Create download link with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
    const link = document.createElement("a");
    link.download = `iphone-qr-screenshot-${timestamp}.png`;
    link.href = screenshotData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
    setScreenshotData(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setScreenshotData(null);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50">
        <button
          ref={buttonRef}
          onClick={takeScreenshot}
          disabled={isCapturing}
          className="bg-white hover:bg-gray-50 text-gray-700 rounded-full p-3 lg:p-4 shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          title={isCapturing ? "Capturing..." : "Take Screenshot"}
        >
          <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
      </div>
      <ScreenshotModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        screenshotData={screenshotData}
        onDownload={handleDownload}
      />
    </>
  );
};

export default ScreenshotButton; 