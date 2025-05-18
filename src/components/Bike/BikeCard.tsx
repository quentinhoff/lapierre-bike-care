
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Bike } from 'lucide-react';

interface BikeCardProps {
  id: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  lastMaintenance?: string;
  nextMaintenance?: string;
  imageUrl?: string;
}

const BikeCard: React.FC<BikeCardProps> = ({
  id,
  model,
  serialNumber,
  purchaseDate,
  lastMaintenance,
  nextMaintenance,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <div className="flex items-start">
        <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={model} className="h-full w-full object-cover" />
          ) : (
            <Bike size={24} className="text-gray-400" />
          )}
        </div>
        
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{model}</h3>
          </div>
          <p className="text-sm text-gray-600 mt-0.5">S/N: {serialNumber}</p>
          
          <div className="flex items-center mt-1.5 text-xs text-gray-500">
            <Calendar size={12} className="mr-1" />
            <span>Purchased: {purchaseDate}</span>
          </div>
          
          {lastMaintenance && (
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <Clock size={12} className="mr-1" />
              <span>Last service: {lastMaintenance}</span>
            </div>
          )}
        </div>
      </div>
      
      {nextMaintenance && (
        <div className="mt-3 pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-lapierre-red mr-2 animate-pulse-light"></div>
              <p className="text-sm">Next: {nextMaintenance}</p>
            </div>
            <Link to={`/bike/${id}`} className="text-lapierre-red flex items-center text-sm">
              Details
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BikeCard;
