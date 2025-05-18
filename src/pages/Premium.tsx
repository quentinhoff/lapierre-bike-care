
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';

const Premium = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  
  const features = [
    'Unlimited bike registrations',
    'Advanced maintenance predictions',
    'Full maintenance history export (PDF)',
    'Priority customer support',
    'Extended warranty tracking',
    'Strava integration',
    'Customized maintenance schedule'
  ];
  
  const plans = {
    monthly: {
      price: '5.99',
      period: 'month',
      save: null
    },
    yearly: {
      price: '59.99',
      period: 'year',
      save: 'Save 16%'
    }
  };
  
  return (
    <MobileLayout
      showBackButton={true}
      onBack={() => navigate(-1)}
    >
      <div className="py-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Lapierre Care Premium</h1>
          <p className="text-gray-600">
            Unlock the full potential of your Lapierre bikes
          </p>
        </div>
        
        {/* Plan Selection */}
        <div className="bg-white rounded-xl p-4 mb-8 shadow-sm">
          <div className="flex p-1 bg-gray-100 rounded-lg mb-5">
            <button
              className={`flex-1 py-2 text-center rounded-md ${
                selectedPlan === 'monthly'
                  ? 'bg-white shadow-sm font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Monthly
            </button>
            <button
              className={`flex-1 py-2 text-center rounded-md ${
                selectedPlan === 'yearly'
                  ? 'bg-white shadow-sm font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setSelectedPlan('yearly')}
            >
              Yearly
              {plans.yearly.save && (
                <span className="ml-2 bg-green-100 text-green-700 text-xs py-0.5 px-1.5 rounded-full">
                  {plans.yearly.save}
                </span>
              )}
            </button>
          </div>
          
          <div className="text-center mb-5">
            <div className="inline-flex items-baseline">
              <span className="text-gray-600">€</span>
              <span className="text-4xl font-bold">
                {plans[selectedPlan].price}
              </span>
              <span className="text-gray-600">
                /{plans[selectedPlan].period}
              </span>
            </div>
          </div>
          
          <button className="w-full btn-primary py-3">
            Subscribe Now
          </button>
        </div>
        
        {/* Features List */}
        <div className="bg-white rounded-xl p-4 mb-8">
          <h2 className="text-lg font-semibold mb-4">Premium Features</h2>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                  <Check size={12} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* FAQ */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-medium mb-1">Can I cancel anytime?</h3>
              <p className="text-sm text-gray-600">
                Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to Premium features until the end of your billing period.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">How does extended warranty work?</h3>
              <p className="text-sm text-gray-600">
                Premium members receive an additional 6 months of warranty coverage on eligible Lapierre bikes when registered within 30 days of purchase.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">What payment methods do you accept?</h3>
              <p className="text-sm text-gray-600">
                We accept all major credit cards, PayPal, and Apple Pay for subscription payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Premium;
