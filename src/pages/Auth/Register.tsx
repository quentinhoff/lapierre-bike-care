import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would call an authentication service
    // For demo purposes, let's redirect to the home page
    window.location.href = '/home';
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <Link to="/" className="text-gray-700 flex items-center">
          <ArrowLeft size={20} className="mr-1" />
          <span>Back</span>
        </Link>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-600">Join Lapierre Care to manage your bikes</p>
          </div>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters
              </p>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-lapierre-red focus:ring-lapierre-red border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-lapierre-red">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-lapierre-red">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary mt-6"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-lapierre-light text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="btn-secondary flex justify-center items-center">
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.25 12.0004 19.25C8.8704 19.25 6.2154 17.14 5.2704 14.295L1.2804 17.39C3.2554 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="ml-2">Google</span>
              </button>
              <button className="btn-secondary flex justify-center items-center">
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.945 1.12-2.29 1.8-3.6 1.71-1.11-.09-2.1-.73-2.76-1.75a4.17 4.17 0 01-.6-1.48c-.18-.62-.17-1.19-.06-1.78.13-.72.44-1.37.87-1.92C9.87-.43 11.23-.95 12.61 1.01c.45.41.83.97 1.08 1.66.2.58.3 1.25.23 2.53-.05.94.37 1.81 1.1 2.43.32.28.7.47 1.1.58.35.1.72.14 1.07.14.39 0 .74-.05 1.03-.13.32-.1.6-.25.83-.45a.26.26 0 00.06-.38.28.28 0 00-.38-.08c-.18.14-.4.25-.64.32-.25.06-.54.1-.88.1-.3 0-.61-.04-.9-.12-.3-.08-.6-.23-.87-.46-.55-.48-.87-1.14-.82-1.83.07-1.44-.05-2.26-.33-3a4.47 4.47 0 00-1.3-1.99c-.64-.53-1.41-.86-2.25-.86-.78 0-1.57.3-2.21.84-.63.52-1.13 1.24-1.46 2.1-.16.42-.24.84-.29 1.28-.04.4-.02.82.08 1.22.1.4.25.78.45 1.11.76 1.25 2.05 2.06 3.49 2.17h.32c1.61.05 3.1-.62 4.1-1.76.41-.47.71-.98.94-1.53.24-.55.39-1.11.47-1.68.04-.28.07-.56.07-.85 0-.12 0-.24-.02-.36a.28.28 0 00-.3-.25.28.28 0 00-.26.29c0 .1.01.21.01.31 0 .26-.02.52-.06.77-.07.52-.2 1.04-.43 1.53-.2.5-.47.96-.85 1.4-.9 1.05-2.24 1.67-3.7 1.62h-.3c-1.2-.1-2.26-.8-2.9-1.86a3.4 3.4 0 01-.37-.9 3.79 3.79 0 01-.06-.99c.04-.37.11-.73.25-1.08.28-.73.7-1.35 1.24-1.8.55-.46 1.18-.7 1.82-.7.69 0 1.32.27 1.85.72.53.45.9 1.05 1.13 1.73.24.7.35 1.5.28 2.92-.07 1.05.4 2.01 1.2 2.7.36.31.77.53 1.19.66.38.12.79.17 1.18.17.45 0 .88-.06 1.27-.16.42-.11.8-.3 1.13-.57a.85.85 0 00.27-.62c0-.37-.3-.67-.67-.67-.2 0-.38.09-.51.24-.15.17-.29.28-.47.36-.2.1-.44.15-.72.15-.3 0-.63-.04-.93-.14-.31-.1-.6-.25-.85-.47-.52-.46-.8-1.13-.76-1.8.06-1.46-.06-2.33-.36-3.14-.27-.72-.7-1.35-1.22-1.8-.61-.51-1.32-.79-2.07-.79-.82 0-1.64.32-2.3.87-.67.56-1.19 1.32-1.53 2.24-.17.44-.26.9-.31 1.35-.05.42-.03.88.08 1.32.11.43.3.87.54 1.27.85 1.38 2.25 2.26 3.85 2.37.12.01.24.02.36.02 1.8.05 3.44-.69 4.59-1.96.45-.5.8-1.05 1.05-1.65.25-.59.4-1.21.48-1.82.04-.29.06-.58.06-.88 0-.29-.02-.58-.06-.87-.08-.61-.23-1.23-.48-1.82-.25-.6-.6-1.15-1.05-1.65C19.96.68 18.32-.06 16.52 0h-.36c-1.6.1-3 1-3.85 2.37-.25.4-.44.83-.54 1.27-.12.44-.13.9-.09 1.32.05.45.14.9.31 1.35.34.92.86 1.69 1.53 2.24.66.55 1.48.87 2.3.87.75 0 1.46-.28 2.07-.79.52-.45.95-1.08 1.22-1.8.3-.8.42-1.67.36-3.14-.04-.67.23-1.34.76-1.8.25-.22.54-.37.85-.47.3-.1.63-.14.93-.14.28 0 .52.05.72.15.18.08.32.19.47.36.12.15.31.24.51.24.37 0 .67-.3.67-.67 0-.23-.1-.44-.27-.62-.33-.27-.7-.47-1.13-.57-.39-.1-.82-.16-1.27-.16-.4 0-.8.05-1.18.17-.42.13-.83.35-1.19.66-.8.69-1.27 1.65-1.2 2.7.07 1.42-.04 2.23-.28 2.92-.23.68-.6 1.28-1.13 1.73-.53.45-1.16.72-1.85.72-.64 0-1.27-.24-1.82-.7a4.1 4.1 0 01-1.24-1.8c-.14-.35-.21-.71-.25-1.08-.03-.35-.01-.71.06-.99.07-.29.2-.6.37-.9.64-1.06 1.7-1.76 2.9-1.86h.3c1.46-.05 2.8.57 3.7 1.62.37.44.65.9.85 1.4.23.5.36 1.01.43 1.53.04.25.06.51.06.77 0 .1 0 .21-.01.31a.28.28 0 00.26.29.28.28 0 00.28-.25c.02-.12.02-.24.02-.36 0-.29-.03-.57-.07-.85-.08-.57-.23-1.13-.47-1.68-.23-.55-.53-1.06-.94-1.53-1-1.14-2.49-1.81-4.1-1.76h-.32c-1.44.11-2.73.92-3.49 2.17-.2.33-.35.71-.45 1.11-.1.4-.12.82-.08 1.22.05.43.13.86.29 1.28.33.86.83 1.58 1.46 2.1.64.53 1.43.84 2.21.84.84 0 1.61-.33 2.25-.86a4.47 4.47 0 001.3-1.99c.28-.74.4-1.56.33-3-.05-.7.27-1.35.82-1.83.27-.23.57-.38.87-.46.29-.08.6-.12.9-.12.34 0 .63.04.88.1.25.07.46.18.64.32a.28.28 0 00.38-.08.26.26 0 00-.06-.38c-.22-.2-.51-.35-.83-.45a4.4 4.4 0 00-1.03-.13c-.36 0-.72.04-1.07.14-.4.11-.78.3-1.1.58-.73.62-1.15 1.49-1.1 2.43.07 1.28-.03 1.95-.23 2.53-.25.69-.63 1.25-1.08 1.66-1.38 1.16-2.74.64-3.54-.44-.43-.55-.74-1.2-.87-1.92-.11-.59-.12-1.16.06-1.78.14-.51.35-.97.6-1.48.67-1.02 1.65-1.66 2.76-1.75 1.31-.09 2.66.59 3.6 1.71.85 1 1.33 2.35 1.3 3.58v.04c0 .7-.57 1.27-1.27 1.27H12.8a.28.28 0 00-.28.27.28.28 0 00.27.28h1.95c1.01 0 1.83-.82 1.83-1.83 0-1.36-.47-2.87-1.4-3.97-1.07-1.27-2.61-2.03-4.22-1.93-1.4.1-2.63.87-3.44 2.09a5.42 5.42 0 00-.75 1.8c-.2.74-.2 1.46-.05 2.2.16.86.53 1.65 1.03 2.3.53.67 1.2 1.18 1.97 1.48.75.3 1.6.35 2.4.17a4.03 4.03 0 003.26-3.88c.01-.27.2-.5.47-.5.26 0 .46.23.46.5 0 2.18-1.66 4-3.92 4.17-.93.2-1.9.15-2.75-.19-.88-.35-1.66-.94-2.27-1.68-.58-.73-1-1.63-1.18-2.62-.17-.82-.17-1.65.06-2.5.21-.79.55-1.5.97-2.17.94-1.4 2.38-2.27 4-2.4 1.84-.12 3.59.72 4.82 2.2 1.04 1.25 1.61 2.98 1.61 4.55a2.4 2.4 0 01-2.4 2.4h-1.94c-.37 0-.67-.3-.67-.67 0-.37.3-.67.67-.67h1.95c.49 0 .89-.4.89-.89v-.04c.02-1-.39-2.13-1.09-2.95-.79-.92-1.89-1.48-2.91-1.4-.82.06-1.56.55-2.08 1.36-.19.4-.36.77-.47 1.16-.12.43-.1.82-.02 1.26.1.55.35 1.04.66 1.46.55.74 1.4 1.16 2.45 1.03 1-.1 1.87-.75 2.34-1.54.14-.25.23-.5.3-.76.11-.45.13-.89.02-1.36.13-.72-.2-1.45-.88-1.88a2.26 2.26 0 00-1.28-.4c-.32 0-.63.06-.92.18-.28.12-.54.3-.75.54-.18.22-.51.26-.74.08a.53.53 0 01-.06-.73 3.33 3.33 0 012.44-1.18c1.76 0 3.22 1.4 3.26 3.16z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2">Apple</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-lapierre-red font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
