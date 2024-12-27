import React from 'react';
import testimonialsData from './testimonials.json';

interface Testimonial {
  product: string;
  color: string;
  image: string;
  phrase: string;
  name: string;
  instagram: string;
}

interface ProductsTestimonialsProps {
  product: string;
}

const ProductsTestimonials: React.FC<ProductsTestimonialsProps> = ({ product }) => {
  const filteredTestimonials = testimonialsData.filter((testimonial) => testimonial.product === product);

  return (
    <div className="productsTestimonialsContainer">
      {filteredTestimonials.map((testimonial, index) => (
        <div key={index} className="card">
          <div className="imageContainer">
            <img src={testimonial.image} alt={`${testimonial.product} client`} />
          </div>
          <p>{testimonial.phrase}</p>
          <p className="instagram">{testimonial.instagram}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsTestimonials;
