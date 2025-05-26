import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Settings, ArrowRight, Download } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import MaintenanceCard from '../components/Maintenance/MaintenanceCard';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const BikeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock bike data
  const [bike] = useState({
    id: id,
    model: 'Lapierre Xelius SL 8.0 AXS 2024',
    serialNumber: 'LP20220001',
    purchaseDate: '15 Apr 2022',
    purchaseLocation: 'Bike City Store',
    color: 'White / Black',
    size: 'Large',
    wheelSize: '700c',
    lastMaintenance: '02 Mar 2023',
    nextMaintenance: '15 Sep 2023',
    imageUrl: '/lovable-uploads/fb9c4f6c-f434-4917-b558-fc6ef903b6e5.png',
    specs: {
      electricAssistance: "Non",
      bottomBracket: "SRAM DUB Press Fit 86.5 Road",
      frame: "Xelius SL disc thru axle UD Superlight carbon",
      cassette: "SRAM XG 1270 10-33T 12s",
      chain: "SRAM Force 12s",
      handlebar: "Lapierre Combo UD carbon, -10°, 400mm/90mm (XS,S), 400mm/100mm (M), 420mm/110mm (L), 420mm/120mm (XL)",
      collection: "2024",
      rearDerailleur: "SRAM Force ETAP AXS Max, 12s",
      frontDerailleur: "SRAM Force ETAP AXS Braze-On",
      rotors: "SRAM Paceline 160mm front /140mm rear Center Lock",
      fork: "Xelius SL disc thru axle UD Superlight carbon",
      headset: "Acros integrated + Xelius Acros Spacer",
      shifters: "SRAM Force ETAP AXS",
      pedals: "VP-335 Clips&Strap",
      crankset: "SRAM Force D2 Dub 48-35T 170mm (XS,S), 172,5mm (M,L), 175mm (XL) with POWERMETER",
      tires: "Continental GP5000S TR Tubeless ready 28-622",
      weight: "7.8 kg",
      wheels: "Lapierre Road Disc Carbon 700x21c, 38mm height, Shimano driver, Tubeless Ready",
      handlebarTape: "Lapierre Vexgel Tape",
      saddle: "Fizik Argo Vento R5 140mm",
      seatpost: "Lapierre carbon light, Ø: 27.2mm, L: 350mm"
    },
    maintenanceHistory: [
      {
        id: 'maint1',
        type: 'Suspension Service',
        date: '02 Mar 2023',
        location: 'Lapierre Official Workshop',
        technician: 'Jean Dupont',
        notes: 'Full suspension service including oil change, seals replacement on front fork. Rear shock pressure set to 180 PSI.',
        official: true
      },
      {
        id: 'maint2',
        type: 'Brake Bleeding',
        date: '15 Jan 2023',
        location: 'Bike City Store',
        technician: 'Mark Smith',
        notes: 'Front and rear brake bleeding, new brake pads installed.',
        official: true
      },
      {
        id: 'maint3',
        type: 'Chain & Cassette Replacement',
        date: '10 Dec 2022',
        location: 'Home',
        notes: 'Replaced worn chain and cassette. Used Shimano SLX components.',
        official: false
      }
    ]
  });
  
  return (
    <MobileLayout 
      title={bike.model}
      showBackButton={true}
      onBack={() => navigate('/dashboard')}
    >
      <div className="pb-6">
        {/* Bike image */}
        <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
          {bike.imageUrl ? (
            <img 
              src={bike.imageUrl} 
              alt={bike.model} 
              className="h-full w-full object-cover rounded-xl" 
            />
          ) : (
            <div className="text-gray-400 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bike"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>
              <span className="mt-2">Add bike photo</span>
            </div>
          )}
        </div>
        
        {/* Bike details */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{bike.model}</h2>
              <p className="text-gray-600 mt-1">S/N: {bike.serialNumber}</p>
            </div>
            <button className="text-gray-500">
              <Settings size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xs text-gray-500">Purchase Date</p>
              <p>{bike.purchaseDate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Purchase Location</p>
              <p>{bike.purchaseLocation}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Size</p>
              <p>{bike.size}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Wheel Size</p>
              <p>{bike.wheelSize}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Color</p>
              <p>{bike.color}</p>
            </div>
          </div>
        </div>
        
        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Spécifications Techniques</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="frame">
              <AccordionTrigger className="text-sm font-medium">Cadre et Composants Principaux</AccordionTrigger>
              <AccordionContent>
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Cadre: </span>
                        <span>{bike.specs.frame}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Fourche: </span>
                        <span>{bike.specs.fork}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Collection: </span>
                        <span>{bike.specs.collection}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Poids: </span>
                        <span>{bike.specs.weight}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Assistance Électrique: </span>
                        <span>{bike.specs.electricAssistance}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="transmission">
              <AccordionTrigger className="text-sm font-medium">Transmission</AccordionTrigger>
              <AccordionContent>
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Boîtier de pédalier: </span>
                        <span>{bike.specs.bottomBracket}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Cassette: </span>
                        <span>{bike.specs.cassette}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Chaîne: </span>
                        <span>{bike.specs.chain}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Dérailleur Arrière: </span>
                        <span>{bike.specs.rearDerailleur}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Dérailleur avant: </span>
                        <span>{bike.specs.frontDerailleur}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Levier de vitesses: </span>
                        <span>{bike.specs.shifters}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Pédalier: </span>
                        <span>{bike.specs.crankset}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Pédales: </span>
                        <span>{bike.specs.pedals}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="wheels">
              <AccordionTrigger className="text-sm font-medium">Roues et Freinage</AccordionTrigger>
              <AccordionContent>
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Roues complètes: </span>
                        <span>{bike.specs.wheels}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Pneus: </span>
                        <span>{bike.specs.tires}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Disques - Rotors: </span>
                        <span>{bike.specs.rotors}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cockpit">
              <AccordionTrigger className="text-sm font-medium">Cockpit et Confort</AccordionTrigger>
              <AccordionContent>
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Cintre: </span>
                        <span>{bike.specs.handlebar}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Jeu de direction: </span>
                        <span>{bike.specs.headset}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Ruban cintre: </span>
                        <span>{bike.specs.handlebarTape}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Selle: </span>
                        <span>{bike.specs.saddle}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Tige de selle: </span>
                        <span>{bike.specs.seatpost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Maintenance Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Maintenance History</h2>
            <button className="flex items-center text-sm text-lapierre-red">
              <Download size={16} className="mr-1" />
              <span>Export PDF</span>
            </button>
          </div>
          
          <div className="flex items-center mb-4 space-x-2">
            <button className="bg-lapierre-red text-white px-4 py-2 rounded-full text-sm">
              All
            </button>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">
              Official
            </button>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">
              DIY
            </button>
          </div>
          
          <div className="space-y-3">
            {bike.maintenanceHistory.map(maintenance => (
              <MaintenanceCard
                key={maintenance.id}
                id={maintenance.id}
                type={maintenance.type}
                date={maintenance.date}
                location={maintenance.location}
                technician={maintenance.technician}
                notes={maintenance.notes}
                official={maintenance.official}
              />
            ))}
          </div>
          
          <button className="flex items-center justify-center w-full mt-4 btn-primary">
            <Calendar size={16} className="mr-2" />
            <span>Add Maintenance Record</span>
          </button>
        </div>
        
        {/* Upcoming Service */}
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-blue-900">Next Recommended Service</h3>
              <p className="text-blue-800 mt-1">15 Sep 2023</p>
              <p className="text-sm text-blue-700 mt-2">Full bike inspection &amp; suspension check</p>
            </div>
            <button className="bg-white text-blue-800 px-3 py-1 rounded-lg text-sm font-medium flex items-center">
              Book
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default BikeDetail;
