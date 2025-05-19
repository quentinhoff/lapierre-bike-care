import React, { useState } from 'react';
import { Calendar, Plus, Bike } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import ReminderCard from '../components/Maintenance/ReminderCard';
import MaintenanceCard from '../components/Maintenance/MaintenanceCard';
import ConsumableItem from '../components/Maintenance/ConsumableItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MaintenanceLog = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history' | 'consumables'>('upcoming');
  
  // Mock data for reminders
  const [reminders, setReminders] = useState([
    {
      id: 'rem1',
      bikeModel: 'Lapierre Zesty',
      maintenanceType: 'Fork Service',
      dueDate: 'In 2 days',
      priority: 'high'
    },
    {
      id: 'rem2',
      bikeModel: 'Lapierre Spicy',
      maintenanceType: 'Chain Lubrication',
      dueDate: 'Overdue by 3 days',
      priority: 'medium'
    },
    {
      id: 'rem3',
      bikeModel: 'Lapierre Spicy',
      maintenanceType: 'Brake Pad Check',
      dueDate: 'In 2 weeks',
      priority: 'low'
    }
  ]);
  
  // Mock data for maintenance history
  const [history, setHistory] = useState([
    {
      id: 'maint1',
      type: 'Suspension Service',
      date: '02 Mar 2023',
      location: 'Lapierre Official Workshop',
      technician: 'Jean Dupont',
      notes: 'Full suspension service including oil change, seals replacement on front fork.',
      official: true,
      bikeModel: 'Lapierre Zesty'
    },
    {
      id: 'maint2',
      type: 'Brake Bleeding',
      date: '15 Jan 2023',
      location: 'Bike City Store',
      technician: 'Mark Smith',
      notes: 'Front and rear brake bleeding, new brake pads installed.',
      official: true,
      bikeModel: 'Lapierre Zesty'
    },
    {
      id: 'maint3',
      type: 'Chain & Cassette Replacement',
      date: '10 Dec 2022',
      location: 'Home',
      notes: 'Replaced worn chain and cassette. Used Shimano SLX components.',
      official: false,
      bikeModel: 'Lapierre Spicy'
    }
  ]);
  
  // Mock data for consumables
  const [consumables, setConsumables] = useState([
    {
      id: 'cons1',
      name: 'Continental GP5000S TR Tires',
      currentUsage: 2500,
      recommendedChange: 4000,
      unit: 'km',
      bikeModel: 'Lapierre Zesty'
    },
    {
      id: 'cons2',
      name: 'SRAM Paceline Brake Discs',
      currentUsage: 5200,
      recommendedChange: 6000,
      unit: 'km',
      bikeModel: 'Lapierre Zesty'
    },
    {
      id: 'cons3',
      name: 'SRAM Force 12s Chain',
      currentUsage: 1800,
      recommendedChange: 2500,
      unit: 'km',
      bikeModel: 'Lapierre Spicy'
    },
    {
      id: 'cons4',
      name: 'Power Meter Battery',
      currentUsage: 290,
      recommendedChange: 300,
      unit: 'hours',
      bikeModel: 'Lapierre Zesty'
    },
    {
      id: 'cons5',
      name: 'Brake Pads',
      currentUsage: 950,
      recommendedChange: 1200,
      unit: 'km',
      bikeModel: 'Lapierre Spicy'
    }
  ]);
  
  const [showBikeSelector, setShowBikeSelector] = useState(false);
  const [selectedBike, setSelectedBike] = useState<string | null>(null);
  
  const bikes = [
    { id: 'bike1', model: 'Lapierre Zesty' },
    { id: 'bike2', model: 'Lapierre Spicy' }
  ];
  
  const filteredHistory = selectedBike 
    ? history.filter(item => item.bikeModel === bikes.find(b => b.id === selectedBike)?.model)
    : history;
  
  const filteredReminders = selectedBike
    ? reminders.filter(item => item.bikeModel === bikes.find(b => b.id === selectedBike)?.model)
    : reminders;
  
  const filteredConsumables = selectedBike
    ? consumables.filter(item => item.bikeModel === bikes.find(b => b.id === selectedBike)?.model)
    : consumables;
  
  return (
    <MobileLayout title="Maintenance">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'upcoming'
              ? 'text-lapierre-red border-b-2 border-lapierre-red'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'history'
              ? 'text-lapierre-red border-b-2 border-lapierre-red'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'consumables'
              ? 'text-lapierre-red border-b-2 border-lapierre-red'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('consumables')}
        >
          Consumables
        </button>
      </div>
      
      {/* Bike Selector */}
      <div className="mb-4">
        <button
          onClick={() => setShowBikeSelector(!showBikeSelector)}
          className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-lg text-sm"
        >
          <Bike size={14} className="mr-1" />
          <span>
            {selectedBike 
              ? bikes.find(b => b.id === selectedBike)?.model
              : 'All Bikes'
            }
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1"
          >
            <path d={showBikeSelector ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"} />
          </svg>
        </button>
        
        {showBikeSelector && (
          <div className="mt-2 p-2 bg-white rounded-lg shadow-lg border border-gray-200 absolute z-10">
            <button
              onClick={() => {
                setSelectedBike(null);
                setShowBikeSelector(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                !selectedBike ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              All Bikes
            </button>
            {bikes.map(bike => (
              <button
                key={bike.id}
                onClick={() => {
                  setSelectedBike(bike.id);
                  setShowBikeSelector(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  selectedBike === bike.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                {bike.model}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Content based on active tab */}
      {activeTab === 'upcoming' ? (
        <div>
          <div className="space-y-3 mb-6">
            {filteredReminders.length > 0 ? (
              filteredReminders.map(reminder => (
                <ReminderCard
                  key={reminder.id}
                  id={reminder.id}
                  bikeModel={reminder.bikeModel}
                  maintenanceType={reminder.maintenanceType}
                  dueDate={reminder.dueDate}
                  priority={reminder.priority as 'high' | 'medium' | 'low'}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar size={48} className="mx-auto text-gray-300 mb-2" />
                <p className="text-gray-500">No upcoming maintenance</p>
              </div>
            )}
          </div>
          
          <button className="btn-primary w-full flex items-center justify-center">
            <Plus size={20} className="mr-2" />
            <span>Add Reminder</span>
          </button>
        </div>
      ) : activeTab === 'history' ? (
        <div>
          <div className="space-y-3 mb-6">
            {filteredHistory.length > 0 ? (
              filteredHistory.map(maintenance => (
                <div key={maintenance.id} className="maintenance-card">
                  <div className="text-xs text-gray-500 mb-1">
                    {maintenance.bikeModel}
                  </div>
                  <MaintenanceCard
                    id={maintenance.id}
                    type={maintenance.type}
                    date={maintenance.date}
                    location={maintenance.location}
                    technician={maintenance.technician}
                    notes={maintenance.notes}
                    official={maintenance.official}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar size={48} className="mx-auto text-gray-300 mb-2" />
                <p className="text-gray-500">No maintenance history</p>
              </div>
            )}
          </div>
          
          <button className="btn-primary w-full flex items-center justify-center">
            <Plus size={20} className="mr-2" />
            <span>Add Maintenance Record</span>
          </button>
        </div>
      ) : (
        <div>
          <div className="space-y-3 mb-6">
            {filteredConsumables.length > 0 ? (
              filteredConsumables.map(consumable => (
                <ConsumableItem
                  key={consumable.id}
                  name={consumable.name}
                  currentUsage={consumable.currentUsage}
                  recommendedChange={consumable.recommendedChange}
                  unit={consumable.unit}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar size={48} className="mx-auto text-gray-300 mb-2" />
                <p className="text-gray-500">No consumables tracked</p>
              </div>
            )}
          </div>
          
          <button className="btn-primary w-full flex items-center justify-center">
            <Plus size={20} className="mr-2" />
            <span>Add Consumable</span>
          </button>
        </div>
      )}
    </MobileLayout>
  );
};

export default MaintenanceLog;
