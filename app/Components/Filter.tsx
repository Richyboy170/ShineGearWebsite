// Filter.tsx
import React from 'react';
import { Coda } from 'next/font/google';

const coda = Coda({
  weight: '800',
  subsets: ['latin'],
});

interface FilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['All', 'Pastel', 'Recommended'];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${
            selectedCategory === category ? 'text-2xl text-customGold' : 'text-xl text-white'
          } ${coda.className}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
