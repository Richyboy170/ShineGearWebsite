"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Define the User interface
interface User {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  password: string;
}

const initialUserData: User = {
  firstName: 'John',
  lastName: 'Doe',
  companyName: 'Gucci',
  country: 'USA',
  streetAddress: '1234 Main St',
  city: 'Springfield',
  state: 'Illinois',
  postcode: '62701',
  phone: '123-456-7890',
  email: 'john.doe@example.com',
  password: 'password123',
};

const AccountDetailsPage: React.FC = () => {
  const [userData, setUserData] = useState<User>(initialUserData);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    // Save the updated user data (e.g., send to server)
    console.log('Saved user data:', userData);
    setIsEditing(false);
    setActiveField(null);
  };

  return (
    <div className="relative">
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      )}
      <div className={`container mx-auto pt-2 bg-customBlue relative z-20 ${isEditing ? 'p-8 shadow-lg' : ''}`} style={{ fontFamily: 'bm hanna_tff' }}>
        <div className="grid gap-6">
          {['firstName', 'lastName', 'companyName', 'country', 'streetAddress', 'city', 'state', 'postcode', 'phone', 'email'].map((field, index) => (
            <div key={index}>
              <label className="block text-customGold" style={{ fontFamily: 'bm hanna_tff' }}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} {field !== 'companyName' && '*'}</label>
              <input
                type="text"
                name={field}
                value={userData[field as keyof User] as string}
                onChange={handleChange}
                disabled={!isEditing}
                onFocus={() => setActiveField(field)}
                onBlur={() => setActiveField(null)}
                className={`w-full px-3 py-2 mt-1 text-customDarkBlue ${isEditing && activeField === field ? 'bg-gray-300 border-none' : 'bg-customGold border'}`}
                style={{ fontFamily: 'bm hanna_tff' }}
              />
            </div>
          ))}
          <div className="flex justify-end">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-customBlue text-white font-bold rounded"
                style={{ fontFamily: 'bm hanna_tff' }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-customBlue text-white font-bold rounded"
                style={{ fontFamily: 'bm hanna_tff' }}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        <div className="mt-6">
          <Link href="/MyAccount/Addresses">
            <button className="px-4 py-2 bg-customGold text-customDarkBlue font-bold rounded" style={{ fontFamily: 'bm hanna_tff' }}>Manage Addresses</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsPage;
