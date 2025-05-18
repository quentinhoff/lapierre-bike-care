
import React from 'react';
import { User, Mail, MapPin } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import BikeCard from '../components/Bike/BikeCard';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    location: 'Paris, France',
    joinDate: 'April 2022',
    avatarUrl: null,
    bikes: [
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
    ],
    stats: {
      totalRides: 127,
      totalDistance: 2538,
      totalMaintenance: 14
    }
  };
  
  return (
    <MobileLayout title="Profile">
      {/* Profile header */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User size={32} className="text-gray-400" />
            )}
          </div>
          
          <div className="ml-4 flex-1">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Mail size={14} className="mr-1" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin size={14} className="mr-1" />
              <span>{user.location}</span>
            </div>
          </div>
          
          <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
            Edit
          </button>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{user.stats.totalRides}</div>
            <div className="text-xs text-gray-500">Rides</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{user.stats.totalDistance}</div>
            <div className="text-xs text-gray-500">km</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{user.stats.totalMaintenance}</div>
            <div className="text-xs text-gray-500">Services</div>
          </div>
        </div>
      </div>
      
      {/* Bikes Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">My Bikes</h3>
        
        {user.bikes.map(bike => (
          <BikeCard
            key={bike.id}
            id={bike.id}
            model={bike.model}
            serialNumber={bike.serialNumber}
            purchaseDate={bike.purchaseDate}
            lastMaintenance={bike.lastMaintenance}
            nextMaintenance={bike.nextMaintenance}
            imageUrl={bike.imageUrl}
          />
        ))}
      </div>
      
      {/* Connect Strava */}
      <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Connect with Strava</h3>
            <p className="text-sm text-gray-600 mt-1">
              Sync your rides for better maintenance predictions
            </p>
          </div>
          
          <button className="bg-[#FC4C02] text-white px-3 py-2 rounded text-sm font-bold">
            Connect
          </button>
        </div>
      </div>
      
      {/* Premium Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">Upgrade to Premium</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Advanced maintenance alerts</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Unlimited bike registration</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Extended warranty benefits</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded font-bold text-sm">
            5.99€/mo
          </div>
        </div>
        
        <button className="w-full bg-white text-amber-600 py-2 rounded-lg mt-4 font-medium">
          Upgrade Now
        </button>
      </div>
    </MobileLayout>
  );
};

export default Profile;
