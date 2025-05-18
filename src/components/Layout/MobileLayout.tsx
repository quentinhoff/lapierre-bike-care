
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bike, Calendar, MapPin, Settings, User } from 'lucide-react';

interface MobileLayoutProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ 
  title, 
  showBackButton = false, 
  onBack, 
  children 
}) => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {title && (
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
          {showBackButton && (
            <button 
              onClick={onBack} 
              className="mr-2 text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}
          <h1 className="text-xl font-medium flex-1 text-center">{title}</h1>
        </header>
      )}
      
      <main className="p-4 pb-20">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-2 z-10 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
        <Link to="/dashboard" className={`flex flex-col items-center justify-center px-3 py-1 ${path === '/dashboard' ? 'text-lapierre-red' : 'text-gray-600'}`}>
          <Bike size={20} />
          <span className="text-xs mt-1">Bikes</span>
        </Link>
        <Link to="/maintenance" className={`flex flex-col items-center justify-center px-3 py-1 ${path === '/maintenance' ? 'text-lapierre-red' : 'text-gray-600'}`}>
          <Calendar size={20} />
          <span className="text-xs mt-1">Maintenance</span>
        </Link>
        <Link to="/workshops" className={`flex flex-col items-center justify-center px-3 py-1 ${path === '/workshops' ? 'text-lapierre-red' : 'text-gray-600'}`}>
          <MapPin size={20} />
          <span className="text-xs mt-1">Workshops</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center justify-center px-3 py-1 ${path === '/profile' ? 'text-lapierre-red' : 'text-gray-600'}`}>
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/settings" className={`flex flex-col items-center justify-center px-3 py-1 ${path === '/settings' ? 'text-lapierre-red' : 'text-gray-600'}`}>
          <Settings size={20} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileLayout;
