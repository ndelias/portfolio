import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Floral illustrations */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
        <div className="absolute top-10 right-10 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute top-20 right-32 w-12 h-12 bg-amber-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-100 rounded-full"></div>
        <div className="absolute top-60 right-40 w-10 h-10 bg-amber-200 rounded-full"></div>
        <div className="absolute top-80 right-10 w-14 h-14 bg-amber-300 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-relaxed italic">
          "This isn't about 'fixing' you—it's about honoring where you are and helping you reconnect with what matters most."
        </blockquote>
      </div>
    </section>
  );
};

export default PhilosophySection;
