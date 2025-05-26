import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Bike, Bell } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock data based on the images
  const mainBike = {
    id: 'bike1',
    name: 'Mon Vélo Principal',
    model: 'Lapierre Overvolt AM 7.5.6',
    nextRevision: '12 avril 2025',
    battery: 80,
    tires: 'OK',
    imageUrl: '/lovable-uploads/ce4816f3-3b04-4a83-a577-8134667dd28d.png'
  };

  const lastRevision = {
    date: '12 avril 2025',
    type: 'Dernière révision'
  };

  const serviceHistory = [
    {
      id: 1,
      type: 'Révision annuelle',
      date: '12 avril 2025',
      icon: Calendar
    },
    {
      id: 2,
      type: 'Réparation',
      date: '02 décembre 2024',
      icon: Calendar
    },
    {
      id: 3,
      type: 'Révision annuelle',
      date: '12 avril 2024',
      icon: Calendar
    },
    {
      id: 4,
      type: 'Inspection',
      date: '05 février 2024',
      icon: Calendar
    }
  ];

  const bikes = [
    {
      id: 'bike1',
      model: 'Lapierre Overvolt AM 7.6'
    }
  ];

  return (
    <MobileLayout>
      {/* Hero Section with Parallax */}
      <div className="relative h-80 overflow-hidden -mx-4 -mt-4">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${mainBike.imageUrl})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Header */}
        <div className="relative z-10 flex justify-between items-center p-4 pt-8">
          <div className="bg-primary rounded-lg px-4 py-2">
            <span className="text-white font-bold text-lg">LAPIERRE CARE</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
            <Bell size={18} />
          </button>
        </div>
      </div>

      {/* Last Revision Card */}
      <div className="-mt-20 relative z-20 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{lastRevision.type}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{lastRevision.date}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Bike Card */}
      <div className="mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <div className="flex items-center mb-4">
            <Bike size={24} className="text-primary mr-3" />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white">{mainBike.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{mainBike.model}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Prochaine révision : {mainBike.nextRevision}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Batterie : {mainBike.battery}%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Pneus : {mainBike.tires}</span>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-4">
            <Link 
              to={`/bike/${mainBike.id}`}
              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center py-2 rounded-lg text-sm font-medium"
            >
              Voir le détail
            </Link>
            <Link 
              to="/planning"
              className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-medium"
            >
              Planifier un entretien
            </Link>
          </div>
        </div>
      </div>

      {/* Service History Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 dark:text-white">Historique des services</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {serviceHistory.map((service, index) => (
            <div key={service.id} className={`p-4 flex items-center justify-between ${index !== serviceHistory.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <service.icon size={20} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{service.type}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.date}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* My Bikes Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 dark:text-white">Mes Vélos</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {bikes.map((bike, index) => (
            <Link 
              key={bike.id}
              to={`/bike/${bike.id}`}
              className={`p-4 flex items-center justify-between ${index !== bikes.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <Bike size={20} className="text-gray-600 dark:text-gray-400" />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{bike.model}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Home;
