  // app/Components/Card.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string;
  hoverImage: string;
  name: string;
  price: string;
  link: string;
  onAddToCart: () => void;
}

const Card: React.FC<CardProps> = ({ image, hoverImage, name, price, link, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="items-center justify-center">
      <Link href={link} passHref>
        <div
          className="bg-customGold shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-96">
            <Image src={isHovered ? hoverImage : image} alt={name} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'bm hanna_tff' }}>{name}</h3>
            <p className="text-lg text-customDarkGreen mt-2" style={{ fontFamily: 'bm hanna_tff' }}>{price} Baht</p>
          </div>
        </div>
      </Link> 
      <button 
        className="mt-4 px-4 py-2 bg-customGold text-customBlue font-bold" 
        onClick={onAddToCart}
      >
        Add this to Cart!
      </button>
    </div>
  );
};

export default Card;
