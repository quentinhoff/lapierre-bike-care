
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bike, Calendar, MapPin, Settings, User, Home } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {title && (
        <header className="sticky top-0 z-10 bg-primary text-white px-4 py-3 flex items-center shadow-md">
          {showBackButton && (
            <button 
              onClick={onBack} 
              className="mr-2 text-white"
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
      
      <nav className="fixed bottom-0 left-0 right-0 bg-primary border-t border-primary/30 flex justify-around items-center py-2 px-1 z-10 shadow-lg">
        <Link to="/home" className={`flex flex-col items-center justify-center px-2 py-1 ${path === '/home' ? 'text-white' : 'text-primary-foreground/70'}`}>
          <Home size={18} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/dashboard" className={`flex flex-col items-center justify-center px-2 py-1 ${path === '/dashboard' ? 'text-white' : 'text-primary-foreground/70'}`}>
          <Bike size={18} />
          <span className="text-xs mt-1">Bikes</span>
        </Link>
        <Link to="/maintenance" className={`flex flex-col items-center justify-center px-2 py-1 ${path === '/maintenance' ? 'text-white' : 'text-primary-foreground/70'}`}>
          <Calendar size={18} />
          <span className="text-xs mt-1">Maintenance</span>
        </Link>
        <Link to="/workshops" className={`flex flex-col items-center justify-center px-2 py-1 ${path === '/workshops' ? 'text-white' : 'text-primary-foreground/70'}`}>
          <MapPin size={18} />
          <span className="text-xs mt-1">Workshops</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center justify-center px-2 py-1 ${path === '/profile' ? 'text-white' : 'text-primary-foreground/70'}`}>
          <User size={18} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/settings" className={`flex flex-col items-center justify-center px-2 py-1 ${path === '/settings' ? 'text-white' : 'text-primary-foreground/70'}`}>
          <Settings size={18} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileLayout;
