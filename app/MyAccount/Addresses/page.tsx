"use client";

import React, { useState } from 'react';

interface Address {
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
}

const initialBillingAddress: Address = {
  firstName: 'John',
  lastName: 'Doe',
  companyName: '',
  country: 'USA',
  streetAddress: '1234 Main St',
  city: 'Springfield',
  state: 'Illinois',
  postcode: '62701',
  phone: '123-456-7890',
  email: 'john.doe@example.com',
};

const initialShippingAddress: Address = {
  firstName: 'Jane',
  lastName: 'Doe',
  companyName: '',
  country: 'USA',
  streetAddress: '5678 Elm St',
  city: 'Springfield',
  state: 'Illinois',
  postcode: '62702',
  phone: '098-765-4321',
  email: 'jane.doe@example.com',
};

const AddressesPage: React.FC = () => {
  const [billingAddress, setBillingAddress] = useState<Address>(initialBillingAddress);
  const [shippingAddress, setShippingAddress] = useState<Address>(initialShippingAddress);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [addressType, setAddressType] = useState<'billing' | 'shipping' | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'billing' | 'shipping') => {
    const { name, value } = e.target;
    if (type === 'billing') {
      setBillingAddress({ ...billingAddress, [name]: value });
    } else {
      setShippingAddress({ ...shippingAddress, [name]: value });
    }
  };

  const handleSave = () => {
    console.log('Saved billing address:', billingAddress);
    console.log('Saved shipping address:', shippingAddress);
    setIsEditing(false);
    setAddressType(null);
    setActiveField(null);
  };

  const handleEditClick = (type: 'billing' | 'shipping') => {
    setIsEditing(true);
    setAddressType(type);
  };

  return (
    <div className="container mx-auto bg-customBlue relative" style={{ fontFamily: 'bm hanna_tff' }}>
      <h1 className="text-base text-white mb-8 text-left" style={{ fontFamily: 'bm hanna_tff' }}>
        The following addresses will be used on the checkout page by default.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-customGold p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-customDarkBlue no-underline" style={{ fontFamily: 'bm hanna_tff' }}>BILLING ADDRESS</h2>
            <button
              onClick={() => handleEditClick('billing')}
              className="px-4 py-2 text-red-500 font-bold rounded"
              style={{ fontFamily: 'bm hanna_tff' }}
            >
              Edit
            </button>
          </div>
          <div className="mt-4 text-customBlue bg-customLightGold p-4">
            <p style={{ fontFamily: 'bm hanna_tff' }}>{billingAddress.firstName} {billingAddress.lastName}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{billingAddress.companyName}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{billingAddress.streetAddress}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{billingAddress.city}, {billingAddress.state} {billingAddress.postcode}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{billingAddress.country}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>Phone: {billingAddress.phone}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>Email: {billingAddress.email}</p>
          </div>
        </div>
        <div className="bg-customGold p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-customDarkBlue no-underline" style={{ fontFamily: 'bm hanna_tff' }}>SHIPPING ADDRESS</h2>
            <button
              onClick={() => handleEditClick('shipping')}
              className="px-4 py-2 text-red-500 font-bold rounded"
              style={{ fontFamily: 'bm hanna_tff' }}
            >
              Edit
            </button>
          </div>
          <div className="mt-4 text-customBlue bg-customLightGold p-4">
            <p style={{ fontFamily: 'bm hanna_tff' }}>{shippingAddress.firstName} {shippingAddress.lastName}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{shippingAddress.companyName}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{shippingAddress.streetAddress}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postcode}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{shippingAddress.country}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>Phone: {shippingAddress.phone}</p>
            <p style={{ fontFamily: 'bm hanna_tff' }}>Email: {shippingAddress.email}</p>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center overflow-auto">
          <div className="bg-customGold p-8 rounded-lg shadow-lg z-20 w-11/12 md:w-1/2" style={{ fontFamily: 'bm hanna_tff' }}>
            <h2 className="text-xl font-bold text-customDarkBlue mb-4 text-center no-underline" style={{ fontFamily: 'bm hanna_tff' }}>
              Edit {addressType === 'billing' ? 'Billing' : 'Shipping'} Address
            </h2>
            <div className="grid gap-6">
              {['firstName', 'lastName', 'companyName', 'country', 'streetAddress', 'city', 'state', 'postcode', 'phone', 'email'].map((field, index) => (
                <div key={index}>
                  <label className="block text-customDarkBlue no-underline" style={{ fontFamily: 'bm hanna_tff' }}>
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} {field !== 'companyName' && '*'}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={addressType === 'billing' ? billingAddress[field as keyof Address] as string : shippingAddress[field as keyof Address] as string}
                    onChange={(e) => handleChange(e, addressType!)}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-3 py-2 mt-1 text-customDarkBlue ${activeField === field ? 'bg-gray-300 border-none' : 'bg-customGold border'}`}
                    style={{ fontFamily: 'bm hanna_tff' }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-customBlue text-white font-bold rounded mr-2"
                style={{ fontFamily: 'bm hanna_tff' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-customBlue text-white font-bold rounded"
                style={{ fontFamily: 'bm hanna_tff' }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressesPage;
