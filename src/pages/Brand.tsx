// src/pages/Brand.tsx

import React from 'react';

const brands = [
  {
    id: 1,
    name: 'Kansai Nerolac Paints',
    description: 'High-quality, durable powder coatings for industrial and decorative applications',
    imageUrl: 'data:image/png;base64,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'
  },
  {
    id: 2,
    name: 'Perfect Coats',
    description: 'Superior, durable, and eco-friendly finishes for various surfaces.',
    imageUrl: 'data:image/png;base64,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', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Sharp Coating',
    description: 'High-quality, long-lasting, and efficient surface finishing solutions',
    imageUrl: 'https://sharpcoating.com/assets/front/images/sharp-logo.png', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Atharva Aerosol',
    description: 'High-quality liquid paints and aerosol solutions for versatile applications',
    imageUrl: 'https://files.oaiusercontent.com/file-Mo6Qz5vuA7FtkFQtvtaiHK?se=2025-03-25T05%3A07%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df3d464bc-a509-41e9-ad65-44383e07a805.webp&sig=4KtaglmrGl/c3fEF63JS2rCqZ9Q3TYKNxJMPgb4vQ9k%3D', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Tulip Paints',
    description: 'Premium-quality paints and coatings for vibrant and durable finishes',
    imageUrl: 'https://www.tulippaints.in/wp-content/uploads/2018/03/tulip-logo.png', // Replace with actual image URL
  },
];

const Brand = () => {
  return (
    <div className="container mx-auto p-4 pt-8">
      <h1 className="text-3xl font-bold mb-6">Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={brand.imageUrl} alt={brand.name} className="w-full h-32 object-contain rounded-md mb-4" /> {/* Changed to object-contain */}
            <h2 className="text-xl font-semibold">{brand.name}</h2>
            <p className="text-gray-600">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;