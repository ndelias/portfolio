import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Life Transitions & Identity",
      description: "Navigating major life changes, career shifts, relationship changes, and finding your authentic self.",
      icon: "🔄"
    },
    {
      title: "Depression & Self-Worth",
      description: "Building self-compassion, challenging negative thought patterns, and rediscovering your inner strength.",
      icon: "💙"
    },
    {
      title: "Anxiety, Stress & Burnout",
      description: "Managing overwhelming feelings, developing coping strategies, and creating sustainable self-care practices.",
      icon: "🧘"
    },
    {
      title: "Cultural & Family Pressures",
      description: "Addressing cultural expectations, family dynamics, and finding balance between tradition and personal needs.",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          What I Can Help With
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Circular image placeholder */}
              <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
            Learn More
          </button>
          <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
