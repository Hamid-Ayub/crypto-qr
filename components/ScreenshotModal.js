"use client";

import { useEffect, useRef } from "react";

const ScreenshotModal = ({ isOpen, onClose, screenshotData, onDownload }) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-2 sm:p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Screenshot Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-140px)] scrollbar-thin">
          {screenshotData ? (
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              {/* Screenshot Preview */}
              <div className="bg-gray-100 rounded-lg p-2 sm:p-4 w-full">
                <img
                  src={screenshotData}
                  alt="Screenshot Preview"
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                  style={{ maxHeight: '50vh' }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <button
                  onClick={onDownload}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span>Download Screenshot</span>
                </button>
                
                <button
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 sm:h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-green-500 mx-auto mb-3 sm:mb-4"></div>
                <p className="text-gray-600 text-sm sm:text-base">Loading preview...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotModal; 