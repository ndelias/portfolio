import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          Let's Start This Journey Together
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Reaching out for therapy is the beginning of something deeply healing. It's a step toward creating 
          a safe, steady, and focused space where you can explore your thoughts, feelings, and experiences 
          without judgment. I'm here to walk alongside you on this path of self-discovery and growth.
        </p>
        
        <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
