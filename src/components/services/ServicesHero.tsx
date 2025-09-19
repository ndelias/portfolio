import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Therapeutic Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              I offer personalized therapy services designed to support women through life&apos;s most challenging 
              moments. Each session is tailored to your unique needs and goals, creating a collaborative 
              space for healing and growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach combines evidence-based therapeutic techniques with a warm, compassionate 
              understanding of the unique challenges women face in today&apos;s world.
            </p>
          </div>
          
          {/* Right Column - Large Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder for large hero image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-blue-700 text-lg font-medium">Therapy Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
