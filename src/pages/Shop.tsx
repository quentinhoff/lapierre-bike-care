
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data pour les vélos d'occasion
  const bikes = [
    {
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
      damages: ['Légères rayures sur le cadre'],
      lastService: '15 Mars 2024'
    },
    {
      id: 'used-002',
      model: 'Lapierre Spicy CF 6.9 2023',
      price: 2800,
      originalPrice: 3800,
      condition: 'Très bon',
      year: 2023,
      mileage: 800,
      imageUrl: '/lovable-uploads/370693c0-31c8-420f-b4ec-d22ad00f4644.png',
      location: 'Lyon, France',
      seller: 'Lapierre Store Lyon',
      damages: ['Usure normale des pneus'],
      lastService: '10 Avril 2024'
    },
    {
      id: 'used-003',
      model: 'Lapierre Overvolt AM 7.6 2021',
      price: 4200,
      originalPrice: 5500,
      condition: 'Bon',
      year: 2021,
      mileage: 2500,
      imageUrl: '/lovable-uploads/ce4816f3-3b04-4a83-a577-8134667dd28d.png',
      location: 'Marseille, France',
      seller: 'Lapierre Store Marseille',
      damages: ['Batterie remplacée', 'Révision complète effectuée'],
      lastService: '25 Février 2024'
    }
  ];

  const filteredBikes = bikes.filter(bike => 
    bike.model.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedFilter === 'all' || bike.condition.toLowerCase() === selectedFilter)
  );

  return (
    <MobileLayout>
      {/* Header */}
      <div className="bg-primary text-white px-4 py-3 -mx-4 -mt-4 mb-6">
        <div className="flex items-center">
          <Link to="/home" className="mr-3">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl font-semibold flex-1">Boutique Lapierre</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm mt-1">Vélos d'occasion certifiés</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher un vélo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedFilter('excellent')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedFilter === 'excellent' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Excellent
          </button>
          <button
            onClick={() => setSelectedFilter('très bon')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedFilter === 'très bon' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Très bon
          </button>
        </div>
      </div>

      {/* Bikes Grid */}
      <div className="space-y-4">
        {filteredBikes.map(bike => (
          <Link
            key={bike.id}
            to={`/shop/bike/${bike.id}`}
            className="block bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex">
              <div className="w-32 h-32 bg-gray-100 flex-shrink-0">
                <img
                  src={bike.imageUrl}
                  alt={bike.model}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{bike.model}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{bike.price}€</div>
                    <div className="text-xs text-gray-500 line-through">{bike.originalPrice}€</div>
                  </div>
                </div>
                
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>État:</span>
                    <span className="font-medium">{bike.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kilométrage:</span>
                    <span>{bike.mileage} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lieu:</span>
                    <span>{bike.location}</span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center justify-between">
                  <span className={`px-2 py-1 rounded text-xs ${
                    bike.condition === 'Excellent' 
                      ? 'bg-green-100 text-green-800'
                      : bike.condition === 'Très bon'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {bike.condition}
                  </span>
                  <span className="text-xs text-gray-500">Année {bike.year}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredBikes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">Aucun vélo trouvé</div>
          <div className="text-sm text-gray-500">Essayez de modifier vos critères de recherche</div>
        </div>
      )}
    </MobileLayout>
  );
};

export default Shop;
