"use client";
import React, { useState, useEffect } from 'react';
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

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(false);
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

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
        setShowLogo(true);
      } else {
        setShowNavbar(false);
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = (): void => {
    setShowLogo(false);
    setTimeout(() => window.scrollTo(0, 0), 0); // Scroll to top to reset the view
    setTimeout(() => setShowLogo(true), 500); // Re-show the logo after a short delay
  };

  return (
    <>
      <nav className={`bg-customGold p-4 fixed top-0 left-0 right-0 z-50 ${showNavbar ? 'visible' : 'invisible'}`}>
        <div className="container mx-auto flex justify-between items-center relative">
          <Link href="/points" className="text-customBlue">
            My Points: xxx
          </Link>

          {showLogo && (
            <div className="navbar-logo-container">
              <Image
                src="/images/MainBrand2 Navy.png"
                alt="Brand Logo"
                width={100}
                height={50}
                objectFit="contain"
                className="navbar-logo"
                onClick={handleLogoClick}
              />
            </div>
          )}

          <div className="flex items-center space-x-4">
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
          <div className="bg-customBlue mt-2 p-4 rounded">
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

export default Navbar;