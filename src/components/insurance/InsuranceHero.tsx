import React from 'react';

const InsuranceHero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          Insurance & Payment
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          I accept most major insurance plans to make therapy accessible and affordable. 
          I also offer flexible payment options for those without insurance coverage.
        </p>
      </div>
    </section>
  );
};

export default InsuranceHero;
