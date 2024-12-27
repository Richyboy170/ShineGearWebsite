// app/Stack/ShoppingCart

import React from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  shoppingCartImage: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onAddQuantity: (id: string) => void;
  onRemoveQuantity: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onAddQuantity, onRemoveQuantity, onRemoveItem }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-full md:w-2/5 bg-customLightGold shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50`}>
        <div className="p-4 border-b flex justify-between items-center bg-customGold">
          <h2 className="text-xl font-bold text-customBlue">Shopping Cart ({totalItems})</h2>
          <button onClick={onClose} className="text-xl font-bold text-customBlue">&times;</button>
        </div>
        <div className="p-4 bg-customLightBlue h-[calc(90%-128px)] overflow-y-auto">
          <div className="p-4 grid gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-customGold p-4 shadow rounded-lg">
                <div className="relative w-16 h-16">
                  <Image src={item.shoppingCartImage} alt={item.name} layout="fill" objectFit="cover" className="" />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-bold text-customBlue">{item.name}</h3>
                  <p className="text-sm text-green-500">{item.price} Baht</p>
                </div>
                <div className="flex items-center">
                  <button onClick={() => onRemoveQuantity(item.id)} className="px-2 py-1 bg-customLightBlue text-customGold">-</button>
                  <span className="mx-2 text-customBlue">{item.quantity}</span>
                  <button onClick={() => onAddQuantity(item.id)} className="px-2 py-1 bg-customLightBlue text-customGold">+</button>
                </div>
                <p className="ml-4 text-customBlue">{item.price * item.quantity} Baht</p>
                <button onClick={() => onRemoveItem(item.id)} className="ml-4 px-2 py-1 bg-red-600 text-white rounded">Remove</button>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t bg-customGold">
          <h3 className="text-lg font-bold text-customBlue">Total: {totalPrice} Baht</h3>
          <button className="w-full mt-4 px-4 py-2 bg-customBlue text-white font-bold rounded">Checkout</button>
        </div>
      </div>
      {isOpen && <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-40" onClick={onClose}></div>}
    </>
  );
};

export default ShoppingCart;
