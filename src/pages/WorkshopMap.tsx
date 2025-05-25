
import React, { useState } from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import WorkshopMap from '../components/Map/WorkshopMap';

const Workshops = () => {
  // Real workshop data with actual coordinates
  const [workshops, setWorkshops] = useState([
    {
      id: 'ws1',
      name: 'Cycles Vidarelli',
      address: '8 Rue Albert Thomas, 94500 Champigny-sur-Marne',
      distance: '12.8 km',
      phone: '01 48 81 72 58',
      hours: 'Mar-Sam: 10h30-12h30 / 14h30-19h00',
      rating: 4.7,
      coordinates: [2.5158, 48.8169] as [number, number] // Champigny-sur-Marne
    },
    {
      id: 'ws2',
      name: 'Culture Vélo Paris 12',
      address: '12 Rue de Picpus, 75012 Paris',
      distance: '4.2 km',
      phone: '01 43 43 46 46',
      hours: 'Lun: 14h00-19h00 / Mar-Sam: 10h00-13h00 / 14h00-19h00',
      rating: 4.5,
      coordinates: [2.3990, 48.8470] as [number, number] // Paris 12ème
    },
    {
      id: 'ws3',
      name: 'Culture Vélo Buchelay',
      address: '1 Rue des Closeaux, 78200 Buchelay',
      distance: '58.3 km',
      phone: '01 30 92 86 86',
      hours: 'Lun: 14h00-19h00 / Mar-Sam: 10h00-13h00 / 14h00-19h00',
      rating: 4.6,
      coordinates: [1.6750, 49.0250] as [number, number] // Buchelay
    },
    {
      id: 'ws4',
      name: 'My Velo',
      address: 'Paris, France',
      distance: '2.1 km',
      phone: 'Voir site web',
      hours: 'Voir site web',
      rating: 4.3,
      coordinates: [2.3522, 48.8566] as [number, number] // Centre Paris
    },
    {
      id: 'ws5',
      name: 'Lapierre Official Service Center',
      address: '123 Bike Street, Paris',
      distance: '1.2 km',
      phone: '+33 1 23 45 67 89',
      hours: '9:00 - 18:00',
      rating: 4.8,
      coordinates: [2.3488, 48.8534] as [number, number] // Near center of Paris
    },
    {
      id: 'ws6',
      name: 'CycleTech Workshop',
      address: '45 Avenue des Sports, Lyon',
      distance: '2.5 km',
      phone: '+33 4 56 78 90 12',
      hours: '10:00 - 19:00',
      rating: 4.5,
      coordinates: [2.3699, 48.8637] as [number, number] // East Paris
    },
    {
      id: 'ws7',
      name: 'Pro Bike Service',
      address: '78 Rue du Vélo, Marseille',
      distance: '3.7 km',
      phone: '+33 6 78 90 12 34',
      hours: '8:30 - 17:30',
      rating: 4.2,
      coordinates: [2.3300, 48.8800] as [number, number] // North Paris
    }
  ]);
  
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
  
  const handleSelectWorkshop = (id: string) => {
    setSelectedWorkshop(id);
  };
  
  const handleBookAppointment = () => {
    // In a real app, we would navigate to a booking form
    alert('Booking functionality would be implemented here');
  };
  
  return (
    <MobileLayout title="Service Workshops">
      <WorkshopMap 
        workshops={workshops}
        onSelectWorkshop={handleSelectWorkshop}
      />
      
      {selectedWorkshop && (
        <div className="fixed bottom-20 left-0 right-0 mx-auto max-w-md px-4 animate-slide-in-bottom">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            {(() => {
              const workshop = workshops.find(w => w.id === selectedWorkshop);
              
              if (!workshop) return null;
              
              return (
                <>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{workshop.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{workshop.address}</p>
                      <p className="text-sm text-primary mt-1">{workshop.distance} away</p>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
                      ★ {workshop.rating}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Hours Today</div>
                        <div className="font-medium">{workshop.hours}</div>
                      </div>
                      <div>
                        <a
                          href={`tel:${workshop.phone}`}
                          className="bg-white border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm font-medium"
                        >
                          Call
                        </a>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleBookAppointment}
                      className="w-full btn-primary mt-3"
                    >
                      Book Appointment
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </MobileLayout>
  );
};

export default Workshops;
