
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
    <div className="mobile-container">
      {title && (
        <header className="mobile-header flex items-center">
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
      
      <main className="mobile-content pb-16">
        {children}
      </main>
      
      <nav className="mobile-nav-bar">
        <Link to="/dashboard" className={`nav-item ${path === '/dashboard' ? 'active' : ''}`}>
          <Bike size={20} />
          <span className="text-xs mt-1">Bikes</span>
        </Link>
        <Link to="/maintenance" className={`nav-item ${path === '/maintenance' ? 'active' : ''}`}>
          <Calendar size={20} />
          <span className="text-xs mt-1">Maintenance</span>
        </Link>
        <Link to="/workshops" className={`nav-item ${path === '/workshops' ? 'active' : ''}`}>
          <MapPin size={20} />
          <span className="text-xs mt-1">Workshops</span>
        </Link>
        <Link to="/profile" className={`nav-item ${path === '/profile' ? 'active' : ''}`}>
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/settings" className={`nav-item ${path === '/settings' ? 'active' : ''}`}>
          <Settings size={20} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileLayout;
