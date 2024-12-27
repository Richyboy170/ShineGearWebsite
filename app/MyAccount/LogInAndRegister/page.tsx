"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const LogInAndRegister: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistering) {
      // Handle registration logic here
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Registered successfully, user ID:', data.userId);
        } else {
          console.error('Error registering:', data.error);
        }
      } catch (error) {
        console.error('Error registering:', error);
      }
    } else {
      // Handle login logic here
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        console.error('Error logging in:', result.error);
      } else {
        console.log('Logged in successfully');
      }
    }
  };

  const handleGoogleLogin = async () => {
    await signIn('google');
  };

  return (
    <div className="container mx-auto flex justify-center min-h-screen" style={{ fontFamily: 'bm hanna_tff' }}>
      <div className={`w-1/3 transform -translate-x-1/3 p-8 ${isRegistering ? 'bg-customRed' : 'bg-customGold'} shadow-lg`} style={{ fontFamily: 'bm hanna_tff' }}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${isRegistering ? 'text-white' : 'text-customDarkBlue'}`}>
          {isRegistering ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block ${isRegistering ? 'text-white' : 'text-customDarkBlue'}`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 mt-1 ${isRegistering ? 'bg-customGold' : 'bg-white'} border ${isRegistering ? 'text-white' : 'text-customDarkBlue'}`}
              required
              style={{ borderRadius: '0' }}
            />
          </div>
          <div>
            <label className={`block ${isRegistering ? 'text-white' : 'text-customDarkBlue'}`} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 mt-1 ${isRegistering ? 'bg-customGold' : 'bg-white'} border ${isRegistering ? 'text-white' : 'text-customDarkBlue'}`}
              required
              style={{ borderRadius: '0' }}
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 ${isRegistering ? 'bg-white' : 'bg-customBlue'} text-${isRegistering ? 'customDarkBlue' : 'white'} font-bold`}
            style={{ borderRadius: '0' }}
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className={`w-full px-4 py-2 ${isRegistering ? 'bg-white' : 'bg-red-600'} text-${isRegistering ? 'customDarkBlue' : 'white'} font-bold mb-2`}
            style={{ borderRadius: '0' }}
          >
            {isRegistering ? 'Register' : 'Login'} with Google
          </button>
          <p className={isRegistering ? 'text-white' : 'text-customDarkBlue'}>
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className={`font-bold ml-2 ${isRegistering ? 'text-customGold' : 'text-customBlue'}`}
            >
              {isRegistering ? 'Login' : 'Register'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInAndRegister;
