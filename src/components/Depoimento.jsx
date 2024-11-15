import React from 'react';

const Depoimentos = () => {
  const reviews = [
    {
      id: 1,
      image: '/assets/Cliente1.png',
    },
    {
      id: 2,
      image: '/assets/Cliente2.png',
    },
    {
      id: 3,
      image: '/assets/Cliente3.png',
    }
  ];

  return (
    <section className="py-16 bg-[#8B4513]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          O que dizem nossos clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={review.image} 
                alt="Review" 
                className="w-full  rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;