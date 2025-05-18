
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Bike } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import QRScanner from '../components/Bike/QRScanner';

const AddBike = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'scan' | 'form'>('scan');
  const [bikeId, setBikeId] = useState('');
  
  // Form state
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [purchaseLocation, setPurchaseLocation] = useState('');
  const [size, setSize] = useState('');
  const [wheelSize, setWheelSize] = useState('');
  const [color, setColor] = useState('');
  
  const handleScanComplete = (value: string) => {
    // In a real app, we would fetch bike details from an API
    // For now, we'll just move to the form step with the scanned value
    setBikeId(value);
    setSerialNumber(value);
    setStep('form');
  };
  
  const handleManualEntry = () => {
    setStep('form');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit to an API
    // For now, we'll just navigate back to dashboard
    navigate('/dashboard');
  };
  
  return (
    <MobileLayout
      title="Add New Bike"
      showBackButton={true}
      onBack={() => navigate('/dashboard')}
    >
      {step === 'scan' ? (
        <div className="flex flex-col items-center">
          <QRScanner onScanComplete={handleScanComplete} />
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Scan the QR code on your Lapierre bike to automatically add it to your account
            </p>
            
            <button 
              onClick={handleManualEntry}
              className="btn-secondary"
            >
              Manual Entry
            </button>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Bike photo */}
            <div className="flex justify-center">
              <div className="w-40 h-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center">
                <Camera size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Add Photo</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Bike Model *
              </label>
              <input
                id="model"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
                className="form-input"
                placeholder="e.g. Lapierre Zesty"
              />
            </div>
            
            <div>
              <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Serial Number *
              </label>
              <input
                id="serialNumber"
                type="text"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                required
                className="form-input"
                placeholder="e.g. LP20220001"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Purchase Date *
                </label>
                <input
                  id="purchaseDate"
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                  Size
                </label>
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="form-input"
                >
                  <option value="">Select size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="X-Large">X-Large</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="wheelSize" className="block text-sm font-medium text-gray-700 mb-1">
                  Wheel Size
                </label>
                <select
                  id="wheelSize"
                  value={wheelSize}
                  onChange={(e) => setWheelSize(e.target.value)}
                  className="form-input"
                >
                  <option value="">Select wheel size</option>
                  <option value='26"'>26"</option>
                  <option value='27.5"'>27.5"</option>
                  <option value='29"'>29"</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="form-input"
                  placeholder="e.g. Blue / Orange"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="purchaseLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Purchase Location
              </label>
              <input
                id="purchaseLocation"
                type="text"
                value={purchaseLocation}
                onChange={(e) => setPurchaseLocation(e.target.value)}
                className="form-input"
                placeholder="e.g. Bike City Store"
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Bike size={20} className="mr-2" />
                <span>Add Bike to My Account</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </MobileLayout>
  );
};

export default AddBike;
