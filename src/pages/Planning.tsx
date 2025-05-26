
import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, Check } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Planning = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const serviceTypes = [
    { id: 'revision', name: 'Révision complète', duration: '2h', price: '80€' },
    { id: 'maintenance', name: 'Entretien de base', duration: '1h', price: '45€' },
    { id: 'repair', name: 'Réparation', duration: '1-3h', price: 'Sur devis' },
    { id: 'check', name: 'Contrôle technique', duration: '30min', price: '25€' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && serviceType) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmation = () => {
    // Simuler la confirmation du RDV
    setShowConfirmation(false);
    navigate('/home');
  };

  if (showConfirmation) {
    return (
      <MobileLayout title="Confirmation">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
            <Check size={40} className="text-green-600 dark:text-green-400" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Rendez-vous confirmé !</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm w-full max-w-md mb-8">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Service :</span>
                <span className="font-medium dark:text-white">
                  {serviceTypes.find(s => s.id === serviceType)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date :</span>
                <span className="font-medium dark:text-white">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Heure :</span>
                <span className="font-medium dark:text-white">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Durée :</span>
                <span className="font-medium dark:text-white">
                  {serviceTypes.find(s => s.id === serviceType)?.duration}
                </span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="text-gray-600 dark:text-gray-400">Prix :</span>
                <span className="font-bold text-primary">
                  {serviceTypes.find(s => s.id === serviceType)?.price}
                </span>
              </div>
            </div>
          </div>
          
          <Button onClick={handleConfirmation} className="w-full max-w-md">
            Retour à l'accueil
          </Button>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout 
      title="Planifier un entretien" 
      showBackButton 
      onBack={() => navigate('/home')}
    >
      <div className="space-y-6">
        {/* Service Type Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Type de service</h3>
          <div className="space-y-3">
            {serviceTypes.map((service) => (
              <button
                key={service.id}
                onClick={() => setServiceType(service.id)}
                className={`w-full p-4 rounded-xl border-2 transition-colors ${
                  serviceType === service.id
                    ? 'border-primary bg-primary/5 dark:bg-primary/10'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-left">
                    <h4 className="font-medium dark:text-white">{service.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Durée : {service.duration}
                    </p>
                  </div>
                  <span className="font-bold text-primary">{service.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Date souhaitée</h3>
          <div className="grid grid-cols-3 gap-3">
            {['Lun 27', 'Mar 28', 'Mer 29', 'Jeu 30', 'Ven 31', 'Sam 1'].map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedDate === date
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white'
                }`}
              >
                <div className="flex flex-col items-center">
                  <Calendar size={20} className="mb-1" />
                  <span className="text-sm font-medium">{date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Heure</h3>
          <div className="grid grid-cols-4 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedTime === time
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white'
                }`}
              >
                <div className="flex flex-col items-center">
                  <Clock size={16} className="mb-1" />
                  <span className="text-sm font-medium">{time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Workshop Info avec vraies coordonnées */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
          <h4 className="font-medium mb-2 dark:text-white">Cycles Laurent - Atelier Lapierre Officiel</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            45 Avenue de la République, 75011 Paris
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tél : 01 43 79 61 24
          </p>
        </div>

        {/* Book Button */}
        <Button 
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime || !serviceType}
          className="w-full"
        >
          Confirmer le rendez-vous
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Planning;
