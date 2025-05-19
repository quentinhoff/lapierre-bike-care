
import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface DamagePoint {
  id: string;
  x: number; // Position en % (0-100)
  y: number; // Position en % (0-100)
  description: string;
  severity: 'minor' | 'medium' | 'serious';
}

const BikeInspection: React.FC = () => {
  const [damagePoints, setDamagePoints] = useState<DamagePoint[]>([
    { id: 'dp1', x: 25, y: 40, description: 'Rayures sur le cadre', severity: 'minor' },
    { id: 'dp2', x: 65, y: 35, description: 'Usure des patins de frein', severity: 'medium' },
    { id: 'dp3', x: 85, y: 45, description: 'Déformation légère de la jante arrière', severity: 'serious' },
    { id: 'dp4', x: 40, y: 65, description: 'Chaîne à remplacer', severity: 'medium' },
    { id: 'dp5', x: 15, y: 55, description: 'Pneu avant usé', severity: 'serious' },
  ]);
  
  const [selectedDamage, setSelectedDamage] = useState<string | null>(null);
  
  const handleDamageClick = (id: string) => {
    setSelectedDamage(selectedDamage === id ? null : id);
  };
  
  const renderDamageDetails = () => {
    if (!selectedDamage) return null;
    
    const damage = damagePoints.find(point => point.id === selectedDamage);
    if (!damage) return null;
    
    const severityInfo = {
      minor: { cost: '€50', label: 'Dommage mineur', color: 'bg-lapierre-blue/10 text-lapierre-blue' },
      medium: { cost: '€150', label: 'Dommage modéré', color: 'bg-orange-100 text-orange-700' },
      serious: { cost: '€300+', label: 'Dommage sérieux', color: 'bg-lapierre-blue text-white' }
    };
    
    return (
      <div className="mt-4 p-4 border rounded-lg">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium">{damage.description}</h3>
          <Badge className={severityInfo[damage.severity].color}>
            {severityInfo[damage.severity].label}
          </Badge>
        </div>
        <p className="text-lg font-semibold">{severityInfo[damage.severity].cost}</p>
        <p className="text-sm text-gray-600 mt-1">Estimation pour la réparation</p>
        
        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2 px-4 bg-lapierre-blue text-white rounded-md">
            Prendre RDV
          </button>
          <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md">
            Plus d'infos
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Inspection du vélo</h2>
        <div className="flex items-center text-sm">
          <AlertTriangle size={16} className="mr-1 text-lapierre-blue" />
          <span>{damagePoints.length} problèmes détectés</span>
        </div>
      </div>
      
      <Card className="relative overflow-hidden">
        <CardContent className="p-4">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <img 
              src="/lovable-uploads/1acc67b4-cd47-4ae0-a5d7-1978b804a520.png" 
              alt="Vélo Lapierre" 
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            <TooltipProvider>
              {damagePoints.map(point => (
                <Tooltip key={point.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute w-5 h-5 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 ${
                        selectedDamage === point.id 
                          ? 'bg-lapierre-blue scale-125 animate-pulse' 
                          : 'bg-lapierre-blue'
                      }`}
                      style={{ left: `${point.x}%`, top: `${point.y}%` }}
                      onClick={() => handleDamageClick(point.id)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{point.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
          
          {renderDamageDetails()}
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <span className="text-sm text-gray-600">Dernière inspection: 15 mai 2023</span>
            <button className="text-sm text-lapierre-blue font-medium">
              Historique complet
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BikeInspection;
