// app/LandingPage/SetOfCards.tsx

"use client";
import React, { useState, useEffect } from 'react';
import Card from '@/app/Components/Card';
import ShoppingCart from '@/app/Stack/ShoppingCart';
import Filter from '@/app/Components/Filter';
import productData from '@/app/Products/products.json';
import { Product, CartItem } from '@/app/types';
import { useCart } from '@/app/Stack/CartContext';

const SetOfCards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [products, setProducts] = useState<Product[]>(productData);
  const { isCartOpen, openCart, closeCart } = useCart();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setProducts(productData);
    } else {
      setProducts(productData.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    openCart();
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

  return (
    <div className="container mx-auto p-8 bg-customBlue">
      <Filter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            hoverImage={product.hoverImage || product.image}
            name={product.name}
            price={product.price.toString()}
            link={`/Products/${product.id}`}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onAddQuantity={handleAddQuantity}
        onRemoveQuantity={handleRemoveQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default SetOfCards;
