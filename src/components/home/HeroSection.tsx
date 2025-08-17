import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100">
      {/* Background Image with Geese */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-200 opacity-80"></div>
        {/* Placeholder for geese image - you can replace with actual image */}
        <div className="absolute top-20 left-1/4 w-32 h-16 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-16 left-1/3 w-24 h-12 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-24 left-1/2 w-28 h-14 bg-blue-300 rounded-full opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4">
          Amend Therapy
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
          Therapy for Women Navigating Life's Turning Points
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
