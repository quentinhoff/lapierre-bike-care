
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send a password reset email
    setIsSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <Link to="/login" className="text-gray-700 flex items-center">
          <ArrowLeft size={20} className="mr-1" />
          <span>Back to Login</span>
        </Link>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
                <p className="text-gray-600">
                  Enter your email and we'll send you instructions to reset your password
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                
                <button
                  type="submit"
                  className="w-full btn-primary mt-6"
                >
                  Send Reset Instructions
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-gray-600 mb-8">
                We've sent password reset instructions to:
                <br />
                <span className="font-medium">{email}</span>
              </p>
              
              <Link to="/login" className="btn-primary block w-full">
                Return to Login
              </Link>
              
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-gray-600 underline"
              >
                Didn't receive an email? Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
