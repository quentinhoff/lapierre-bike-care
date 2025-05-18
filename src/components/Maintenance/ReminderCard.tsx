
import React from 'react';
import { Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
        return 'bg-red-50 border-red-100';
      case 'medium':
        return 'bg-yellow-50 border-yellow-100';
      case 'low':
        return 'bg-green-50 border-green-100';
      default:
        return 'bg-gray-50 border-gray-100';
    }
  };

  const getPriorityTextStyles = () => {
    switch (priority) {
      case 'high':
        return 'text-red-700';
      case 'medium':
        return 'text-yellow-700';
      case 'low':
        return 'text-green-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={`p-4 rounded-xl mb-3 border ${getPriorityStyles()}`}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className={`font-medium ${getPriorityTextStyles()}`}>{maintenanceType}</h4>
          <p className="text-sm mt-1 text-gray-600">{bikeModel}</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>{dueDate}</span>
        </div>
      </div>
      
      <div className="mt-3 flex justify-end gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white rounded-full px-3 py-1 text-sm shadow-sm"
        >
          Postpone
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary font-medium rounded-full px-3 py-1"
        >
          Mark as Done
        </Button>
      </div>
    </div>
  );
};

export default ReminderCard;
