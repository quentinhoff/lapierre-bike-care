
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Wrench, AlertTriangle, CheckCircle } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';

const BikeShopDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data étendue pour le vélo sélectionné
  const bikeData = {
    'used-001': {
      id: 'used-001',
      model: 'Lapierre Xelius SL 8.0 2022',
      price: 3200,
      originalPrice: 4500,
      condition: 'Excellent',
      year: 2022,
      mileage: 1200,
      imageUrl: '/lovable-uploads/fb9c4f6c-f434-4917-b558-fc6ef903b6e5.png',
      location: 'Paris, France',
      seller: 'Lapierre Store Paris',
      serialNumber: 'LP2022XE001',
      frameSize: 'L (56cm)',
      weight: '7.8 kg',
      specifications: {
        frame: 'Carbone Xelius SL',
        fork: 'Carbone Xelius SL',
        groupset: 'Shimano Ultegra Di2',
        wheels: 'Mavic Cosmic Elite',
        tires: 'Continental Grand Prix 5000, 25mm',
        brakes: 'Freins à disque hydrauliques Shimano',
        saddle: 'Lapierre Racing',
        handlebar: 'Lapierre Carbon Compact'
      },
      damages: [
        {
          type: 'Cosmétique',
          description: 'Légères rayures sur le tube diagonal',
          severity: 'Mineur',
          date: '10 Mars 2024',
          repairedBy: 'Jean Dupont - Technicien Lapierre Paris',
          location: 'Lapierre Store Paris',
          cost: 0,
          status: 'Non réparé (cosmétique uniquement)'
        }
      ],
      maintenanceHistory: [
        {
          date: '15 Mars 2024',
          type: 'Révision complète',
          description: 'Révision générale, réglage transmission, freins',
          technician: 'Jean Dupont',
          location: 'Lapierre Store Paris',
          cost: 120,
          parts: ['Plaquettes de frein', 'Câbles de vitesse']
        },
        {
          date: '20 Janvier 2024',
          type: 'Entretien préventif',
          description: 'Nettoyage chaîne, lubrification, contrôle général',
          technician: 'Marie Martin',
          location: 'Lapierre Store Paris',
          cost: 45,
          parts: ['Lubrifiant chaîne']
        },
        {
          date: '15 Octobre 2023',
          type: 'Remplacement pneus',
          description: 'Remplacement des pneus avant et arrière',
          technician: 'Pierre Leroy',
          location: 'Lapierre Store Paris',
          cost: 80,
          parts: ['Pneu Continental GP5000 x2']
        }
      ]
    }
    // Ajouter d'autres vélos si nécessaire...
  };

  const bike = bikeData[id as keyof typeof bikeData];

  if (!bike) {
    return (
      <MobileLayout>
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">Vélo non trouvé</div>
          <Link to="/shop" className="text-primary">Retour à la boutique</Link>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      {/* Header */}
      <div className="bg-primary text-white px-4 py-3 -mx-4 -mt-4 mb-6">
        <div className="flex items-center">
          <Link to="/shop" className="mr-3">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-lg font-semibold flex-1">{bike.model}</h1>
        </div>
      </div>

      {/* Image principale */}
      <div className="mb-6">
        <img
          src={bike.imageUrl}
          alt={bike.model}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* Prix et infos principales */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{bike.model}</h2>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <MapPin size={14} className="mr-1" />
              {bike.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{bike.price}€</div>
            <div className="text-sm text-gray-500 line-through">{bike.originalPrice}€</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">État:</span>
            <span className="ml-2 font-medium">{bike.condition}</span>
          </div>
          <div>
            <span className="text-gray-600">Année:</span>
            <span className="ml-2 font-medium">{bike.year}</span>
          </div>
          <div>
            <span className="text-gray-600">Kilométrage:</span>
            <span className="ml-2 font-medium">{bike.mileage} km</span>
          </div>
          <div>
            <span className="text-gray-600">Taille:</span>
            <span className="ml-2 font-medium">{bike.frameSize}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Aperçu
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'specs'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Composants
          </button>
          <button
            onClick={() => setActiveTab('damages')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'damages'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Dommages
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'history'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Historique
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-3">Informations générales</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Numéro de série:</span>
                <span className="font-medium">{bike.serialNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Poids:</span>
                <span className="font-medium">{bike.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vendeur:</span>
                <span className="font-medium">{bike.seller}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-3">État général</h3>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-sm">Vélo certifié par nos techniciens Lapierre</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'specs' && (
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold mb-4">Composants du vélo</h3>
          <div className="space-y-3">
            {Object.entries(bike.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-600 capitalize">{key}:</span>
                <span className="font-medium text-right flex-1 ml-4">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'damages' && (
        <div className="space-y-4">
          {bike.damages.map((damage, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start">
                <AlertTriangle 
                  className={`mr-3 mt-1 ${
                    damage.severity === 'Mineur' ? 'text-yellow-500' : 'text-red-500'
                  }`} 
                  size={20} 
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{damage.type}</h4>
                    <span className={`px-2 py-1 rounded text-xs ${
                      damage.severity === 'Mineur' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {damage.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{damage.description}</p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>Constaté le {damage.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      <span>{damage.repairedBy}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-1" />
                      <span>{damage.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                    <strong>Status:</strong> {damage.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-4">
          {bike.maintenanceHistory.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start">
                <Wrench className="text-primary mr-3 mt-1" size={20} />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{service.type}</h4>
                    <span className="text-sm font-bold text-primary">{service.cost}€</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{service.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      <span>{service.technician}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-1" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                  
                  {service.parts.length > 0 && (
                    <div className="mt-3 p-2 bg-gray-50 rounded">
                      <div className="text-xs font-medium text-gray-700 mb-1">Pièces remplacées:</div>
                      <div className="text-xs text-gray-600">
                        {service.parts.join(', ')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bouton Contact */}
      <div className="mt-8 bg-white rounded-xl p-4 shadow-sm">
        <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
          Contacter le vendeur
        </button>
        <div className="text-center text-xs text-gray-500 mt-2">
          Réponse garantie sous 24h
        </div>
      </div>
    </MobileLayout>
  );
};

export default BikeShopDetail;
