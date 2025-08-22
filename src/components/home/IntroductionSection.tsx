import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              You Deserve to Feel Seen—and Supported
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm Angela. I understand that life's turning points can leave you feeling overwhelmed, 
              stuck, or uncertain about your next steps. Whether you're navigating a major life transition, 
              dealing with stress and anxiety, or simply feeling disconnected from yourself, I'm here to 
              provide a safe, supportive space where you can explore, heal, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
                Learn More
              </button>
              <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              {/* Circular frame with organic shapes overlay */}
              <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                <img 
                  src="/images/home/Angela's Photo.jpeg" 
                  alt="Angela - Amend Therapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Organic shapes overlay */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-100 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
