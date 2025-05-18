
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

interface Workshop {
  id: string;
  name: string;
  address: string;
  distance: string;
  phone: string;
  hours: string;
  rating: number;
}

interface WorkshopMapProps {
  workshops: Workshop[];
  onSelectWorkshop: (id: string) => void;
}

const WorkshopMap: React.FC<WorkshopMapProps> = ({ workshops, onSelectWorkshop }) => {
  // This is a placeholder for a real map
  // In a real app, we would use a mapping library like Google Maps or Mapbox
  
  return (
    <div className="w-full">
      {/* Mock Map */}
      <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <p>Interactive Map would be displayed here</p>
        </div>
        
        {/* Mock Map Pins */}
        {workshops.map((workshop, index) => (
          <div 
            key={workshop.id}
            className="absolute z-10"
            style={{ 
              top: `${20 + index * 15}%`, 
              left: `${15 + index * 20}%`,
            }}
          >
            <div className="w-6 h-6 bg-lapierre-red text-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                 onClick={() => onSelectWorkshop(workshop.id)}>
              <MapPin size={14} />
            </div>
          </div>
        ))}
      </div>
      
      {/* Workshop List */}
      <div className="space-y-3 mt-4">
        {workshops.map(workshop => (
          <div 
            key={workshop.id} 
            className="workshop-card cursor-pointer"
            onClick={() => onSelectWorkshop(workshop.id)}
          >
            <h3 className="font-medium">{workshop.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{workshop.address}</p>
            <p className="text-sm text-lapierre-red mt-1">{workshop.distance} away</p>
            
            <div className="flex justify-between mt-2">
              <div className="flex items-center text-xs text-gray-600">
                <Clock size={12} className="mr-1" />
                <span>{workshop.hours}</span>
              </div>
              
              <div className="flex items-center text-xs text-gray-600">
                <Phone size={12} className="mr-1" />
                <span>{workshop.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopMap;
