
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Welcome to Lapierre Care',
      description: 'Your digital maintenance book for Lapierre bikes',
      image: '/placeholder.svg'
    },
    {
      title: 'Track Maintenance',
      description: 'Keep a complete history of your bike maintenance',
      image: '/placeholder.svg'
    },
    {
      title: 'Timely Reminders',
      description: 'Get notified when your bike needs attention',
      image: '/placeholder.svg'
    },
    {
      title: 'Find Workshops',
      description: 'Locate authorized Lapierre service centers near you',
      image: '/placeholder.svg'
    }
  ];
  
  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        {/* Logo */}
        <div className="py-8 flex justify-center">
          <div className="w-40 h-10 bg-lapierre-dark text-white flex items-center justify-center rounded-md">
            <span className="font-bold">LAPIERRE CARE</span>
          </div>
        </div>
        
        {/* Onboarding Slides */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-md">
            <div className="w-full aspect-square mb-6 flex items-center justify-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full max-h-full object-contain"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-3">
              {slides[currentSlide].title}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex justify-center space-x-2 mb-8">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide
                      ? 'bg-lapierre-red'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="px-6 py-8">
          <div className="w-full max-w-md mx-auto">
            {currentSlide < slides.length - 1 ? (
              <>
                <button
                  onClick={handleNextSlide}
                  className="w-full btn-primary mb-4 flex items-center justify-center"
                >
                  <span>Continue</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
                <Link to="/login" className="block text-center text-gray-600 underline">
                  Skip Introduction
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full btn-primary mb-4 block text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full btn-secondary block text-center"
                >
                  Create an Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
