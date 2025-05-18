
import React from 'react';
import { Clock } from 'lucide-react';

interface ReminderCardProps {
  id: string;
  bikeModel: string;
  maintenanceType: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

const ReminderCard: React.FC<ReminderCardProps> = ({
  id,
  bikeModel,
  maintenanceType,
  dueDate,
  priority,
}) => {
  const getPriorityStyles = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={`p-4 rounded-xl mb-3 border ${getPriorityStyles()}`}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{maintenanceType}</h4>
          <p className="text-sm mt-1">{bikeModel}</p>
        </div>
        <div className="flex items-center text-sm">
          <Clock size={16} className="mr-1" />
          <span>{dueDate}</span>
        </div>
      </div>
      
      <div className="mt-3 flex justify-between">
        <button className="bg-white rounded-full px-3 py-1 text-sm shadow-sm border border-gray-200">
          Postpone
        </button>
        <button className="bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
          Mark as Done
        </button>
      </div>
    </div>
  );
};

export default ReminderCard;
