import React from 'react';

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Convenient Location
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In person therapy in Marietta, GA & online therapy available across Georgia.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">In-Person Sessions</h4>
                  <p className="text-gray-600">Comfortable office space in Marietta, Georgia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Online Therapy</h4>
                  <p className="text-gray-600">Secure video sessions available throughout Georgia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Flexible Options</h4>
                  <p className="text-gray-600">Choose what works best for your schedule and comfort</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="relative">
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload="auto"
                playsInline
              >
                <source src="/images/home/Screen Recording Aug 22 2025.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
