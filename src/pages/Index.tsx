
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Bienvenue sur Lapierre Care',
      description: 'Votre carnet d\'entretien numérique pour vélos Lapierre',
      image: '/lovable-uploads/9e28294e-1d5b-4d1e-ae4a-e6e957efc65c.png'
    },
    {
      title: 'Suivez vos entretiens',
      description: 'Gardez un historique complet de l\'entretien de votre vélo',
      image: '/lovable-uploads/48440c78-103b-416c-b373-5068b4849176.png'
    },
    {
      title: 'Rappels opportuns',
      description: 'Recevez des notifications quand votre vélo a besoin d\'attention',
      image: '/lovable-uploads/21da506a-5ed0-4366-aba0-dbbcde3922d9.png'
    },
    {
      title: 'Trouvez des ateliers',
      description: 'Localisez les centres de service Lapierre autorisés près de chez vous',
      image: '/lovable-uploads/dfad583a-0d7e-4d98-a50a-58da0c3af43c.png'
    }
  ];
  
  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Logo */}
      <div className="py-8 flex justify-center">
        <div className="bg-primary rounded-lg px-6 py-3">
          <span className="text-white font-bold text-xl">LAPIERRE CARE</span>
        </div>
      </div>
      
      {/* Onboarding Slides */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="w-full aspect-square mb-6 flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-900">
            {slides[currentSlide].title}
          </h2>
          <p className="text-center text-gray-600 mb-8 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide
                    ? 'bg-primary'
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
                className="w-full bg-primary text-white rounded-full py-3 mb-4 flex items-center justify-center font-medium transition-colors hover:bg-primary/90"
              >
                <span>Continuer</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
              <Link to="/login" className="block text-center text-gray-600 underline hover:text-gray-800 transition-colors">
                Passer l'introduction
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="w-full bg-primary text-white rounded-full py-3 mb-4 block text-center font-medium transition-colors hover:bg-primary/90"
              >
                Se connecter
              </Link>
              <Link
                to="/register"
                className="w-full border border-gray-300 rounded-full py-3 block text-center font-medium transition-colors hover:bg-gray-50"
              >
                Créer un compte
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
