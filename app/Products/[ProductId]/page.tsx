// /app/Products/[ProductId]/page.tsx

"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import productData from '@/app/Products/products.json';
import ProductsTestimonials from '@/app/Testimonials/ProductsTestimonials';
import Image from 'next/image';

const ProductPage: React.FC = () => {
  const pathname = usePathname();
  const ProductId = pathname.split('/').pop();
  const product = productData.find((p) => p.id === ProductId);

  if (!product) {
    return <div className="text-center text-red-700 text-2xl">Product not found</div>;
  }

  return (
    <main className="bg-customGold min-h-screen p-8">
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-customBlue" style={{ fontFamily: 'Colonna MT' }}>{product.name}</h1>
        <p className="text-2xl mb-4 text-customBlue">{product.price}</p>
        <p className="mb-4 text-xl text-customBlue">Category: {product.category}</p>
        <p className="mb-8 text-xl text-customBlue">{product.description}</p>
        <a href={product.link} className="text-blue-300 underline text-xl mb-8">Buy Now</a>
      </div>

      <div className="mt-8 bg-customBlue p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: 'Coda' }}>Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 border rounded bg-white shadow-sm">
            <p className="font-bold text-lg text-customDarkGold">{review.user}</p>
            <p className="text-base mb-2 text-customBlue">{review.comment}</p>
            <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ProductsTestimonials product={product.name} />
      </div>
    </main>
  );
};

export default ProductPage;
