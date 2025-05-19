
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Bike } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import QRScanner from '../components/Bike/QRScanner';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AddBike = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'scan' | 'form'>('scan');
  const [bikeId, setBikeId] = useState('');
  
  // Basic information
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [purchaseLocation, setPurchaseLocation] = useState('');
  const [size, setSize] = useState('');
  const [wheelSize, setWheelSize] = useState('');
  const [color, setColor] = useState('');
  
  // Technical specifications
  const [frameType, setFrameType] = useState('');
  const [bottomBracket, setBottomBracket] = useState('');
  const [cassette, setCassette] = useState('');
  const [chain, setChain] = useState('');
  const [handlebar, setHandlebar] = useState('');
  const [collection, setCollection] = useState('');
  const [rearDerailleur, setRearDerailleur] = useState('');
  const [frontDerailleur, setFrontDerailleur] = useState('');
  const [brakeRotors, setBrakeRotors] = useState('');
  const [fork, setFork] = useState('');
  const [headset, setHeadset] = useState('');
  const [shifters, setShifters] = useState('');
  const [pedals, setPedals] = useState('');
  const [crankset, setCrankset] = useState('');
  const [tires, setTires] = useState('');
  const [weight, setWeight] = useState('');
  const [wheels, setWheels] = useState('');
  const [handlebarTape, setHandlebarTape] = useState('');
  const [saddle, setSaddle] = useState('');
  const [seatpost, setSeatpost] = useState('');
  const [eAssist, setEAssist] = useState('Non');
  
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
        <div className="pb-16">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Bike photo */}
            <div className="flex justify-center">
              <div className="w-40 h-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center">
                <Camera size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Add Photo</span>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="basic-info">
                <AccordionTrigger className="text-left font-medium">
                  Basic Information
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
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
                          <option value="XS">XS</option>
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
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tech-specs">
                <AccordionTrigger className="text-left font-medium">
                  Technical Specifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="eAssist" className="block text-sm font-medium text-gray-700 mb-1">
                        Assistance Électrique
                      </label>
                      <select
                        id="eAssist"
                        value={eAssist}
                        onChange={(e) => setEAssist(e.target.value)}
                        className="form-input"
                      >
                        <option value="Non">Non</option>
                        <option value="Oui">Oui</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="frameType" className="block text-sm font-medium text-gray-700 mb-1">
                        Cadre
                      </label>
                      <input
                        id="frameType"
                        type="text"
                        value={frameType}
                        onChange={(e) => setFrameType(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Xelius SL disc thru axle UD Superlight carbon"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="bottomBracket" className="block text-sm font-medium text-gray-700 mb-1">
                          Boîtier de pédalier
                        </label>
                        <input
                          id="bottomBracket"
                          type="text"
                          value={bottomBracket}
                          onChange={(e) => setBottomBracket(e.target.value)}
                          className="form-input"
                          placeholder="e.g. SRAM DUB Press Fit"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="fork" className="block text-sm font-medium text-gray-700 mb-1">
                          Fourche
                        </label>
                        <input
                          id="fork"
                          type="text"
                          value={fork}
                          onChange={(e) => setFork(e.target.value)}
                          className="form-input"
                          placeholder="e.g. Xelius SL carbon"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cassette" className="block text-sm font-medium text-gray-700 mb-1">
                          Cassette
                        </label>
                        <input
                          id="cassette"
                          type="text"
                          value={cassette}
                          onChange={(e) => setCassette(e.target.value)}
                          className="form-input"
                          placeholder="e.g. SRAM XG 1270 10-33T 12s"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="chain" className="block text-sm font-medium text-gray-700 mb-1">
                          Chaîne
                        </label>
                        <input
                          id="chain"
                          type="text"
                          value={chain}
                          onChange={(e) => setChain(e.target.value)}
                          className="form-input"
                          placeholder="e.g. SRAM Force 12s"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="handlebar" className="block text-sm font-medium text-gray-700 mb-1">
                        Cintre
                      </label>
                      <input
                        id="handlebar"
                        type="text"
                        value={handlebar}
                        onChange={(e) => setHandlebar(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Lapierre Combo UD carbon"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="collection" className="block text-sm font-medium text-gray-700 mb-1">
                          Collection
                        </label>
                        <input
                          id="collection"
                          type="text"
                          value={collection}
                          onChange={(e) => setCollection(e.target.value)}
                          className="form-input"
                          placeholder="e.g. 2024"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                          Poids (kg)
                        </label>
                        <input
                          id="weight"
                          type="text"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className="form-input"
                          placeholder="e.g. 7.8"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="rearDerailleur" className="block text-sm font-medium text-gray-700 mb-1">
                          Dérailleur Arrière
                        </label>
                        <input
                          id="rearDerailleur"
                          type="text"
                          value={rearDerailleur}
                          onChange={(e) => setRearDerailleur(e.target.value)}
                          className="form-input"
                          placeholder="e.g. SRAM Force ETAP AXS"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="frontDerailleur" className="block text-sm font-medium text-gray-700 mb-1">
                          Dérailleur avant
                        </label>
                        <input
                          id="frontDerailleur"
                          type="text"
                          value={frontDerailleur}
                          onChange={(e) => setFrontDerailleur(e.target.value)}
                          className="form-input"
                          placeholder="e.g. SRAM Force ETAP AXS"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="brakeRotors" className="block text-sm font-medium text-gray-700 mb-1">
                        Disques - Rotors
                      </label>
                      <input
                        id="brakeRotors"
                        type="text"
                        value={brakeRotors}
                        onChange={(e) => setBrakeRotors(e.target.value)}
                        className="form-input"
                        placeholder="e.g. SRAM Paceline 160mm/140mm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="headset" className="block text-sm font-medium text-gray-700 mb-1">
                        Jeu de direction
                      </label>
                      <input
                        id="headset"
                        type="text"
                        value={headset}
                        onChange={(e) => setHeadset(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Acros integrated"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="shifters" className="block text-sm font-medium text-gray-700 mb-1">
                        Levier de vitesses
                      </label>
                      <input
                        id="shifters"
                        type="text"
                        value={shifters}
                        onChange={(e) => setShifters(e.target.value)}
                        className="form-input"
                        placeholder="e.g. SRAM Force ETAP AXS"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pedals" className="block text-sm font-medium text-gray-700 mb-1">
                        Pédales
                      </label>
                      <input
                        id="pedals"
                        type="text"
                        value={pedals}
                        onChange={(e) => setPedals(e.target.value)}
                        className="form-input"
                        placeholder="e.g. VP-335 Clips&Strap"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="crankset" className="block text-sm font-medium text-gray-700 mb-1">
                        Pédalier
                      </label>
                      <input
                        id="crankset"
                        type="text"
                        value={crankset}
                        onChange={(e) => setCrankset(e.target.value)}
                        className="form-input"
                        placeholder="e.g. SRAM Force D2 Dub 48-35T"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="tires" className="block text-sm font-medium text-gray-700 mb-1">
                        Pneus
                      </label>
                      <input
                        id="tires"
                        type="text"
                        value={tires}
                        onChange={(e) => setTires(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Continental GP5000S TR 28-622"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="wheels" className="block text-sm font-medium text-gray-700 mb-1">
                        Roues complètes
                      </label>
                      <input
                        id="wheels"
                        type="text"
                        value={wheels}
                        onChange={(e) => setWheels(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Lapierre Road Disc Carbon"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="handlebarTape" className="block text-sm font-medium text-gray-700 mb-1">
                        Ruban cintre
                      </label>
                      <input
                        id="handlebarTape"
                        type="text"
                        value={handlebarTape}
                        onChange={(e) => setHandlebarTape(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Lapierre Vexgel Tape"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="saddle" className="block text-sm font-medium text-gray-700 mb-1">
                        Selle
                      </label>
                      <input
                        id="saddle"
                        type="text"
                        value={saddle}
                        onChange={(e) => setSaddle(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Fizik Argo Vento R5"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="seatpost" className="block text-sm font-medium text-gray-700 mb-1">
                        Tige de selle
                      </label>
                      <input
                        id="seatpost"
                        type="text"
                        value={seatpost}
                        onChange={(e) => setSeatpost(e.target.value)}
                        className="form-input"
                        placeholder="e.g. Lapierre carbon light, Ø: 27.2mm"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center bg-primary"
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
