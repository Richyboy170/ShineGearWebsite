"use client";
import React, { useState } from 'react';
import testimonialsData from './testimonials.json';

interface Testimonial {
  product: string;
  color: string;
  image: string;
  phrase: string;
  name: string;
  instagram: string;
}

const Testimonials: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCircleClick = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const selectedTestimonial = selectedIndex !== null ? testimonialsData[selectedIndex] : null;

  return (
    <div className="testimonialsContainer">
      <p className="text-customGold text-5xl" style={{ fontFamily: 'Colonna MT' }}>Testimonials</p>
      <div className="circlesWrapper">
        <div className="circlesContainer">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`circle ${selectedIndex === index ? 'active' : ''}`}
              style={{ backgroundColor: testimonial.color }}
              onClick={() => handleCircleClick(index)}
            >
              <div className="circleContent">
                <p className="text-customBlue" style={{ fontFamily: 'bm hanna_tff' }}>{testimonial.product}</p>
                <p className="text-customGold" style={{ fontFamily: 'bm hanna_tff' }}>{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cardContainer">
        {selectedTestimonial && (
          <div className="card" style={{ backgroundColor: selectedTestimonial.color }}>
            <div className="imageContainer">
              <img src={selectedTestimonial.image} alt={`${selectedTestimonial.product} client`} />
            </div>
            <p style={{ fontFamily: 'bm hanna_tff' }}>{selectedTestimonial.phrase}</p>
            <p className="instagram" style={{ fontFamily: 'bm hanna_tff' }}>{selectedTestimonial.instagram}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
