
import React from 'react';
import { Calendar, User } from 'lucide-react';

interface MaintenanceCardProps {
  id: string;
  type: string;
  date: string;
  location: string;
  technician?: string;
  notes?: string;
  official?: boolean;
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
  id,
  type,
  date,
  location,
  technician,
  notes,
  official = false,
}) => {
  return (
    <div className="maintenance-card">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <h3 className="font-medium">{type}</h3>
            {official && (
              <span className="ml-2 bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                Official Service
              </span>
            )}
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{location}</p>
        </div>
      </div>
      
      {technician && (
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <User size={14} className="mr-1" />
          <span>Technician: {technician}</span>
        </div>
      )}
      
      {notes && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      )}
    </div>
  );
};

export default MaintenanceCard;
