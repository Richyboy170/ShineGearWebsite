import React from 'react';
import Navbar from '@/app/Components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Fetch or define userPoints here
  const userPoints = 1000; // Replace with actual points fetching logic

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
      <div className="w-full flex-none md:w-64">
        <Navbar userPoints={userPoints} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 text-customDarkGold bg-customGoldo">
        {children}
      </div>
    </div>
  );
}
