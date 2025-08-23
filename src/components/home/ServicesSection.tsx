import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Life Transitions & Identity",
      description: "Navigating major life changes, career shifts, relationship changes, and finding your authentic self.",
      image: "/images/home/rs=w_400,cg_true.webp"
    },
    {
      title: "Depression & Self-Worth",
      description: "Building self-compassion, challenging negative thought patterns, and rediscovering your inner strength.",
      image: "/images/home/mental-health-therapy.webp"
    },
    {
      title: "Anxiety, Stress & Burnout",
      description: "Managing overwhelming feelings, developing coping strategies, and creating sustainable self-care practices.",
      image: "/images/home/therapy-therapist-mental-health-featured.jpg.optimal.jpg"
    },
    {
      title: "Cultural & Family Pressures",
      description: "Addressing cultural expectations, family dynamics, and finding balance between tradition and personal needs.",
      image: "/images/home/sided-view-young-girl-talking-therapist_23-2150136592.avif"
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
              {/* Service image */}
              <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
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
        
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
