
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Plus } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import BikeCard from '../components/Bike/BikeCard';
import ReminderCard from '../components/Maintenance/ReminderCard';

const Dashboard = () => {
  // Mock data for bikes
  const [bikes, setBikes] = useState([
    {
      id: 'bike1',
      model: 'Lapierre Zesty',
      serialNumber: 'LP20220001',
      purchaseDate: '15 Apr 2022',
      lastMaintenance: '02 Mar 2023',
      nextMaintenance: '15 Sep 2023',
      imageUrl: null
    },
    {
      id: 'bike2',
      model: 'Lapierre Spicy',
      serialNumber: 'LP20210052',
      purchaseDate: '10 Jun 2021',
      lastMaintenance: '23 Jan 2023',
      nextMaintenance: '23 Jul 2023',
      imageUrl: null
    }
  ]);
  
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
    }
  ]);
  
  return (
    <MobileLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-xl font-bold">My Bikes</h1>
          <p className="text-gray-600 text-sm">Manage your Lapierre fleet</p>
        </div>
        <Link
          to="/notifications"
          className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm"
        >
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-lapierre-red rounded-full border-2 border-white"></span>
        </Link>
      </div>
      
      {/* Bikes List */}
      <div className="mb-6">
        {bikes.map(bike => (
          <Link key={bike.id} to={`/bike/${bike.id}`} className="block">
            <BikeCard
              id={bike.id}
              model={bike.model}
              serialNumber={bike.serialNumber}
              purchaseDate={bike.purchaseDate}
              lastMaintenance={bike.lastMaintenance}
              nextMaintenance={bike.nextMaintenance}
              imageUrl={bike.imageUrl}
            />
          </Link>
        ))}
        
        <Link
          to="/add-bike"
          className="flex items-center justify-center p-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-lapierre-red hover:text-lapierre-red transition-colors"
        >
          <Plus size={20} className="mr-2" />
          <span className="font-medium">Add New Bike</span>
        </Link>
      </div>
      
      {/* Maintenance Reminders */}
      <div>
        <h2 className="font-semibold text-lg mb-3">Upcoming Maintenance</h2>
        
        {reminders.map(reminder => (
          <ReminderCard
            key={reminder.id}
            id={reminder.id}
            bikeModel={reminder.bikeModel}
            maintenanceType={reminder.maintenanceType}
            dueDate={reminder.dueDate}
            priority={reminder.priority as 'high' | 'medium' | 'low'}
          />
        ))}
        
        <Link
          to="/maintenance"
          className="block text-center text-sm text-lapierre-red font-medium mt-4"
        >
          View All Maintenance Tasks
        </Link>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
