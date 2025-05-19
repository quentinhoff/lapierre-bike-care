
import React from 'react';
import { Progress } from "../ui/progress";

interface ConsumableItemProps {
  name: string;
  currentUsage: number;
  recommendedChange: number;
  unit: string;
}

const ConsumableItem: React.FC<ConsumableItemProps> = ({
  name,
  currentUsage,
  recommendedChange,
  unit,
}) => {
  const calculatePercentage = () => {
    const percentage = (currentUsage / recommendedChange) * 100;
    return Math.min(percentage, 100);
  };

  const percentage = calculatePercentage();
  
  const getStatusColor = () => {
    if (percentage <= 60) return "bg-lapierre-blue"; // Good condition (blue)
    if (percentage <= 85) return "bg-orange-500"; // Medium wear (orange)
    return "bg-lapierre-blue"; // Needs replacement (blue primary instead of red)
  };
  
  const getStatusText = () => {
    if (percentage <= 60) return "Good condition";
    if (percentage <= 85) return "Medium wear";
    return "Replacement recommended";
  };
  
  const getStatusBadgeColor = () => {
    if (percentage <= 60) return 'bg-lapierre-blue/10 text-lapierre-blue';
    if (percentage <= 85) return 'bg-orange-100 text-orange-700';
    return 'bg-lapierre-blue/10 text-lapierre-blue'; // Blue badge instead of red
  };
  
  const getRemainingText = () => {
    const remaining = recommendedChange - currentUsage;
    if (remaining <= 0) {
      return `Exceeded by ${Math.abs(remaining)} ${unit}`;
    }
    return `${remaining} ${unit} remaining`;
  };

  return (
    <div className="border rounded-lg p-4 mb-3">
      <div className="flex justify-between mb-2">
        <h4 className="font-medium">{name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor()}`}>
          {getStatusText()}
        </span>
      </div>
      
      <div className="mb-2">
        <Progress 
          value={100 - percentage} 
          className="h-2"
          indicatorClassName={getStatusColor()}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-600">
        <span>{currentUsage} {unit} used</span>
        <span>{getRemainingText()}</span>
      </div>
      
      <div className="text-xs text-gray-500 mt-1">
        Recommended change: {recommendedChange} {unit}
      </div>
    </div>
  );
};

export default ConsumableItem;
