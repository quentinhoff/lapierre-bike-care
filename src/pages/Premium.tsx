
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft, Crown, Shield, Cloud, Brain, Gift, Calendar, Trophy } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';

const Premium = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  
  const features = [
    {
      icon: Shield,
      title: 'Suivi multi-vélos illimité',
      description: 'Gérez tous vos vélos en un seul endroit'
    },
    {
      icon: Cloud,
      title: 'Sauvegarde cloud automatique',
      description: "Sauvegardez automatiquement l'historique de vos entretiens"
    },
    {
      icon: Brain,
      title: 'Diagnostic intelligent',
      description: 'Notre système vous alerte en amont en cas d\'anomalie ou de besoin d\'entretien'
    },
    {
      icon: Gift,
      title: 'Réductions exclusives',
      description: 'Profitez de réductions exclusives sur les produits Lapierre et les accessoires d\'entretien'
    },
    {
      icon: Calendar,
      title: 'Accès en avant-première',
      description: 'Accédez en avant-première à des événements spéciaux et des tests produits réservés aux membres Premium'
    },
    {
      icon: Trophy,
      title: 'Badges et récompenses Premium',
      description: 'Débloquez des badges et récompenses Premium pour votre régularité et votre soin apporté au vélo'
    }
  ];
  
  const plans = {
    monthly: {
      price: '5.99',
      period: 'mois',
      save: null
    },
    yearly: {
      price: '59.99',
      period: 'année',
      save: 'Économisez 16%'
    }
  };
  
  return (
    <MobileLayout
      showBackButton={true}
      onBack={() => navigate(-1)}
    >
      <div className="py-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-4">
            <Crown size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-3 text-gray-900">Lapierre Care Premium</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Soyez un cycliste prévoyant, connecté et récompensé avec Lapierre Care Premium
          </p>
        </div>
        
        {/* Plan Selection */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
          <div className="flex p-1 bg-gray-100 rounded-lg mb-6">
            <button
              className={`flex-1 py-3 text-center rounded-md font-medium transition-all ${
                selectedPlan === 'monthly'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Mensuel
            </button>
            <button
              className={`flex-1 py-3 text-center rounded-md font-medium transition-all relative ${
                selectedPlan === 'yearly'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setSelectedPlan('yearly')}
            >
              Annuel
              {plans.yearly.save && (
                <span className="absolute -top-2 -right-1 bg-green-500 text-white text-xs py-1 px-2 rounded-full">
                  {plans.yearly.save}
                </span>
              )}
            </button>
          </div>
          
          <div className="text-center mb-6">
            <div className="inline-flex items-baseline">
              <span className="text-2xl text-gray-600 font-medium">€</span>
              <span className="text-5xl font-bold text-gray-900">
                {plans[selectedPlan].price}
              </span>
              <span className="text-xl text-gray-600 ml-1">
                /{plans[selectedPlan].period}
              </span>
            </div>
            {selectedPlan === 'yearly' && (
              <p className="text-sm text-green-600 mt-2">
                Soit 5€/mois • Économisez 11,88€/an
              </p>
            )}
          </div>
          
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 rounded-lg transition-all shadow-lg">
            Commencer mon abonnement Premium
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            Résiliable à tout moment • Sans engagement
          </p>
        </div>
        
        {/* Features List */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-center text-gray-900">
            Avantages exclusifs Premium
          </h2>
          
          <div className="space-y-5">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Trust Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Rejoignez plus de 10 000 cyclistes Premium
            </h3>
            <p className="text-sm text-gray-600">
              Ils nous font confiance pour l'entretien de leurs vélos Lapierre
            </p>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Questions fréquentes</h2>
          
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">Puis-je annuler à tout moment ?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Oui, vous pouvez annuler votre abonnement à tout moment. Si vous annulez, vous continuerez à avoir accès aux fonctionnalités Premium jusqu'à la fin de votre période de facturation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">Comment fonctionne le diagnostic intelligent ?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Notre système analyse l'utilisation de votre vélo et vous envoie des alertes personnalisées pour vous prévenir des entretiens nécessaires avant qu'un problème ne survienne.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">Quels moyens de paiement acceptez-vous ?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nous acceptons toutes les cartes bancaires principales, PayPal et Apple Pay pour les paiements d'abonnement.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">Les réductions s'appliquent-elles immédiatement ?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Oui, dès votre abonnement activé, vous recevrez vos codes de réduction exclusifs par email et dans l'application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Premium;
