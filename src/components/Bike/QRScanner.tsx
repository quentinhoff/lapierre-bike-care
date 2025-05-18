
import React, { useState } from 'react';

interface QRScannerProps {
  onScanComplete: (value: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScanComplete }) => {
  const [isScanning, setIsScanning] = useState(false);
  
  // This is a mock function to simulate QR scanning
  // In a real React Native app, we would use a camera package
  const startScanning = () => {
    setIsScanning(true);
    
    // Simulate successful scan after 3 seconds
    setTimeout(() => {
      const mockBikeId = `LP-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsScanning(false);
      onScanComplete(mockBikeId);
    }, 3000);
  };
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="aspect-square relative">
        {isScanning ? (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="relative">
              {/* QR Frame */}
              <div className="w-48 h-48 border-2 border-white/60 rounded-lg"></div>
              
              {/* Scanning animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-lapierre-red animate-pulse-light"></div>
              
              {/* Cancel button */}
              <button 
                onClick={() => setIsScanning(false)}
                className="mt-6 py-2 px-4 bg-white/20 rounded-full text-white text-sm font-medium"
              >
                Cancel Scan
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-qr-code"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/></svg>
            </div>
            <p className="text-gray-600 text-sm mb-3">Scan the QR code on your Lapierre bike</p>
            <button 
              onClick={startScanning}
              className="btn-primary"
            >
              Start Scanning
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
