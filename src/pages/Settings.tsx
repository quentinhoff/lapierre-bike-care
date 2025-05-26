
import React from 'react';
import { LogOut, Bell, Lock, Moon, HelpCircle, MapPin } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <MobileLayout title="Settings">
      <div className="space-y-6">
        {/* Account Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 dark:text-white">Account</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Lock size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">Change Password</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">Update Location</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700 text-red-500">
              <div className="flex items-center">
                <LogOut size={18} className="mr-3" />
                <span>Log Out</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        {/* Notifications Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 dark:text-white">Notifications</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Bell size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">Push Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Bell size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">Email Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Appearance Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 dark:text-white">Appearance</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Moon size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 dark:text-white">Help</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <HelpCircle size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">FAQ</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <HelpCircle size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                <span className="dark:text-white">Contact Support</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 dark:text-white">About</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Version</span>
                <span className="dark:text-white">1.0.0</span>
              </div>
            </div>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <span className="dark:text-white">Terms of Service</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3">
              <span className="dark:text-white">Privacy Policy</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Settings;
