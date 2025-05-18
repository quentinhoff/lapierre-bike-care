
import React from 'react';
import { LogOut, Bell, Lock, Moon, HelpCircle, MapPin } from 'lucide-react';
import MobileLayout from '../components/Layout/MobileLayout';

const Settings = () => {
  return (
    <MobileLayout title="Settings">
      <div className="space-y-6">
        {/* Account Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Account</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <Lock size={18} className="mr-3 text-gray-500" />
                <span>Change Password</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-gray-500" />
                <span>Update Location</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100 text-red-500">
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
          <h2 className="text-lg font-semibold mb-3">Notifications</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <Bell size={18} className="mr-3 text-gray-500" />
                <span>Push Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lapierre-red"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <Bell size={18} className="mr-3 text-gray-500" />
                <span>Email Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lapierre-red"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Appearance Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Appearance</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <Moon size={18} className="mr-3 text-gray-500" />
                <span>Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lapierre-red"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Help</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <HelpCircle size={18} className="mr-3 text-gray-500" />
                <span>FAQ</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <div className="flex items-center">
                <HelpCircle size={18} className="mr-3 text-gray-500" />
                <span>Contact Support</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About</h2>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex justify-between">
                <span className="text-gray-500">Version</span>
                <span>1.0.0</span>
              </div>
            </div>
            
            <button className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <span>Terms of Service</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3">
              <span>Privacy Policy</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Settings;
