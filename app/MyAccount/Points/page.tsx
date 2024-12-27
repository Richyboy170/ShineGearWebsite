"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  image: string;
  name: string;
  points: number;
}

const Points: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [userPoints, setUserPoints] = useState<number>(1000); // Example starting points

  useEffect(() => {
    // Fetch products and user points from API
    const exampleProducts: Product[] = [
      { id: '1', image: '/images/sky.jpg', name: 'Sky T-Shirt', points: 100 },
      { id: '2', image: '/images/pink.jpg', name: 'Pink T-Shirt', points: 200 },
      { id: '3', image: '/images/oatmeal.jpg', name: 'Oatmeal T-Shirt', points: 300 },
      { id: '4', image: '/images/white.jpg', name: 'White T-Shirt', points: 400 },
    ];
    setProducts(exampleProducts);
    // Fetch user points and set them
    // setUserPoints(fetchedPoints);
  }, []);

  return (
    <div className="container mx-auto p-4" style={{ fontFamily: 'bm hanna_tff' }}>
      <h1 className="text-3xl font-bold mb-6 text-center text-customGold">Exchange Your Points</h1>
      <p className="mb-6 text-center text-lg text-white">You can exchange your points for the products below. Simply click on the product to confirm the exchange.</p>
      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <div key={product.id} className="ticket-card flex">
            <div className="ticket-points bg-blue-500 text-white flex items-center justify-center p-4">
              {product.points} Points
            </div>
            <div className="ticket-image flex-grow relative">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded" />
              <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-lg">Free</p>
                <button
                  onClick={() => handleExchange(product.points)}
                  className="mt-4 bg-white text-blue-500 px-4 py-2 rounded"
                  disabled={userPoints < product.points}
                >
                  Exchange
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function handleExchange(points: number) {
    if (userPoints >= points) {
      setUserPoints(userPoints - points);
      alert('Exchange successful!');
    } else {
      alert('Not enough points!');
    }
  }
};

export default Points;
