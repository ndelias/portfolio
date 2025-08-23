import React from 'react';

const OfficeSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full"></div>
        <div className="absolute top-20 left-32 w-12 h-12 bg-blue-300 rounded-full"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-blue-100 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Office Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl overflow-hidden">
              {/* Placeholder for office image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <span className="text-amber-700 text-lg">Office Space</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              A Welcoming Space for Healing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              My office is designed to be a sanctuary—a place where you can feel safe, comfortable, and 
              free to be yourself. Located in a quiet, professional building, the space is thoughtfully 
              arranged to promote relaxation and reflection.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Comfortable seating in a private, confidential setting</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Easy parking and accessible location</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Peaceful atmosphere with natural light</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Conveniently located in the heart of the community</span>
              </div>
            </div>
            
            <div className="bg-blue-100 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">840 Kennesaw Ave NW Suite 8<br />
              Marietta, GA 30060</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
