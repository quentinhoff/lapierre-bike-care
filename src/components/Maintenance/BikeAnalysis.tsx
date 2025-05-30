
import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Progress } from "../ui/progress";

interface ComponentPoint {
  id: string;
  x: number;
  y: number;
  name: string;
  currentUsage: number;
  recommendedChange: number;
  unit: string;
  condition: 'good' | 'medium' | 'warning' | 'critical';
  repairCost?: number;
  description?: string;
}

const BikeAnalysis: React.FC = () => {
  const [componentPoints, setComponentPoints] = useState<ComponentPoint[]>([
    { 
      id: 'chain', 
      x: 55, 
      y: 65, 
      name: 'Chaîne SRAM Force 12s',
      currentUsage: 1800,
      recommendedChange: 2500,
      unit: 'km',
      condition: 'medium',
      repairCost: 120,
      description: 'Usure normale de la chaîne'
    },
    { 
      id: 'front-brake', 
      x: 20, 
      y: 35, 
      name: 'Plaquettes de frein avant',
      currentUsage: 950,
      recommendedChange: 1200,
      unit: 'km',
      condition: 'good',
      repairCost: 45,
      description: 'Plaquettes en bon état'
    },
    { 
      id: 'rear-brake', 
      x: 85, 
      y: 35, 
      name: 'Plaquettes de frein arrière',
      currentUsage: 1100,
      recommendedChange: 1200,
      unit: 'km',
      condition: 'warning',
      repairCost: 45,
      description: 'Remplacement bientôt nécessaire'
    },
    { 
      id: 'front-tire', 
      x: 15, 
      y: 50, 
      name: 'Pneu avant Continental GP5000S TR',
      currentUsage: 3500,
      recommendedChange: 4000,
      unit: 'km',
      condition: 'warning',
      repairCost: 75,
      description: 'Usure visible sur les flancs'
    },
    { 
      id: 'rear-tire', 
      x: 85, 
      y: 50, 
      name: 'Pneu arrière Continental GP5000S TR',
      currentUsage: 3800,
      recommendedChange: 4000,
      unit: 'km',
      condition: 'critical',
      repairCost: 75,
      description: 'Remplacement urgent recommandé'
    },
    { 
      id: 'cassette', 
      x: 75, 
      y: 55, 
      name: 'Cassette Shimano Ultegra 11-28',
      currentUsage: 8500,
      recommendedChange: 10000,
      unit: 'km',
      condition: 'good',
      repairCost: 180,
      description: 'Cassette en excellent état'
    },
    { 
      id: 'front-disc', 
      x: 18, 
      y: 45, 
      name: 'Disque de frein avant SRAM',
      currentUsage: 5200,
      recommendedChange: 6000,
      unit: 'km',
      condition: 'medium',
      repairCost: 65,
      description: 'Légères rayures visibles'
    },
    { 
      id: 'rear-disc', 
      x: 82, 
      y: 45, 
      name: 'Disque de frein arrière SRAM',
      currentUsage: 5500,
      recommendedChange: 6000,
      unit: 'km',
      condition: 'warning',
      repairCost: 65,
      description: 'Usure importante détectée'
    }
  ]);
  
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  
  const handleComponentClick = (id: string) => {
    setSelectedComponent(selectedComponent === id ? null : id);
  };
  
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'good': return 'bg-green-500';
      case 'medium': return 'bg-lapierre-blue';
      case 'warning': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getConditionBadge = (condition: string) => {
    switch (condition) {
      case 'good': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-lapierre-blue/10 text-lapierre-blue';
      case 'warning': return 'bg-orange-100 text-orange-700';
      case 'critical': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };
  
  const getConditionText = (condition: string) => {
    switch (condition) {
      case 'good': return 'Bon état';
      case 'medium': return 'État correct';
      case 'warning': return 'Attention';
      case 'critical': return 'Critique';
      default: return 'Inconnu';
    }
  };
  
  const calculatePercentage = (current: number, recommended: number) => {
    return Math.min((current / recommended) * 100, 100);
  };
  
  const getTotalRepairCost = () => {
    return componentPoints
      .filter(point => point.condition === 'warning' || point.condition === 'critical')
      .reduce((total, point) => total + (point.repairCost || 0), 0);
  };
  
  const getComponentsByCondition = (condition: string) => {
    return componentPoints.filter(point => point.condition === condition).length;
  };
  
  const renderSelectedComponent = () => {
    if (!selectedComponent) return null;
    
    const component = componentPoints.find(point => point.id === selectedComponent);
    if (!component) return null;
    
    const percentage = calculatePercentage(component.currentUsage, component.recommendedChange);
    const remaining = component.recommendedChange - component.currentUsage;
    
    return (
      <div className="mt-4 p-4 border rounded-lg bg-white">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium">{component.name}</h3>
          <Badge className={getConditionBadge(component.condition)}>
            {getConditionText(component.condition)}
          </Badge>
        </div>
        
        <div className="mb-3">
          <Progress 
            value={100 - percentage} 
            className="h-2"
            indicatorClassName={getConditionColor(component.condition)}
          />
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{component.currentUsage} {component.unit} utilisés</span>
          <span>{remaining > 0 ? `${remaining} ${component.unit} restants` : `Dépassé de ${Math.abs(remaining)} ${component.unit}`}</span>
        </div>
        
        <p className="text-sm text-gray-700 mb-3">{component.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">€{component.repairCost}</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-lapierre-blue text-white rounded-md text-sm">
              Commander
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm">
              Plus d'infos
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Header with statistics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-700">{getComponentsByCondition('good')}</div>
          <div className="text-xs text-green-600">Bon état</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-700">{getComponentsByCondition('warning') + getComponentsByCondition('critical')}</div>
          <div className="text-xs text-orange-600">À surveiller</div>
        </div>
        <div className="bg-lapierre-blue/10 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-lapierre-blue">€{getTotalRepairCost()}</div>
          <div className="text-xs text-lapierre-blue">Coût estimé</div>
        </div>
      </div>
      
      {/* Bike inspection with components */}
      <Card className="relative overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Analyse des composants</h2>
            <div className="flex items-center text-sm">
              <AlertTriangle size={16} className="mr-1 text-lapierre-blue" />
              <span>{componentPoints.length} composants analysés</span>
            </div>
          </div>
          
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <img 
              src="/lovable-uploads/1acc67b4-cd47-4ae0-a5d7-1978b804a520.png" 
              alt="Vélo Lapierre" 
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            <TooltipProvider>
              {componentPoints.map(point => (
                <Tooltip key={point.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute w-5 h-5 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 ${
                        selectedComponent === point.id 
                          ? `${getConditionColor(point.condition)} scale-125 animate-pulse` 
                          : getConditionColor(point.condition)
                      }`}
                      style={{ left: `${point.x}%`, top: `${point.y}%` }}
                      onClick={() => handleComponentClick(point.id)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{point.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
          
          {renderSelectedComponent()}
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <span className="text-sm text-gray-600">Dernière analyse: 15 mai 2023</span>
            <button className="text-sm text-lapierre-blue font-medium">
              Historique complet
            </button>
          </div>
        </CardContent>
      </Card>
      
      {/* Component summary list */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900">Résumé des composants</h3>
        {componentPoints.map(component => {
          const percentage = calculatePercentage(component.currentUsage, component.recommendedChange);
          const remaining = component.recommendedChange - component.currentUsage;
          
          return (
            <div 
              key={component.id} 
              className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => handleComponentClick(component.id)}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-sm">{component.name}</h4>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getConditionBadge(component.condition)}`}>
                    {getConditionText(component.condition)}
                  </span>
                  <span className="text-sm font-medium">€{component.repairCost}</span>
                </div>
              </div>
              
              <div className="mb-1">
                <Progress 
                  value={100 - percentage} 
                  className="h-1"
                  indicatorClassName={getConditionColor(component.condition)}
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-600">
                <span>{component.currentUsage} {component.unit} utilisés</span>
                <span>{remaining > 0 ? `${remaining} ${component.unit} restants` : `Dépassé de ${Math.abs(remaining)} ${component.unit}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BikeAnalysis;
