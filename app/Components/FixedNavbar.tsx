"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShoppingCart from '../Stack/ShoppingCart';

interface CartItem {
  id: string;
  shoppingCartImage: string;
  name: string;
  price: number;
  quantity: number;
}

interface FixedNavbarProps {
  userPoints: number;
}

const FixedNavbar: React.FC<FixedNavbarProps> = ({ userPoints }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleSetIsCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleAddQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-customGold p-4 fixed top-0 left-0 right-0 z-50 shadow-md border-b-4 border-customDarkBlue">
        <div className="container mx-auto flex justify-between items-center relative">
          <Link href="/MyAccount/Points" className="text-customBlue z-20">
            My Points: {userPoints}
          </Link>

          <div className="absolute inset-0 flex justify-center items-center z-10">
            <Link href="/">
              <Image
                src="/images/MainBrand2 Navy.png"
                alt="Brand Logo"
                width={100}
                height={50}
                objectFit="contain"
                className="navbar-logo"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4 z-20">
            <Link href="/MyAccount/AccountDetails" className="text-customBlue">
              User Profile
            </Link>
            <button
              onClick={handleSetIsCartOpen}
              className="text-customBlue focus:outline-none"
            >
              Shopping Cart
            </button>
            <button
              onClick={toggleMenu}
              className="text-customBlue focus:outline-none"
            >
              Menu
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="bg-customBlue mt-2 p-4 rounded shadow-md z-20">
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-customGold">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/points" className="text-customGold">
                  My Points
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onAddQuantity={handleAddQuantity}
        onRemoveQuantity={handleRemoveQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
};

export default FixedNavbar;
