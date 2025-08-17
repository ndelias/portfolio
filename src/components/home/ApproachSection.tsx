import React from 'react';

const ApproachSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg overflow-hidden">
              {/* Placeholder for therapy session image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-amber-700 text-lg">Therapy Session</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              My Approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Therapy is a conversation—one where there's space for honesty, curiosity, and even moments of calm. 
              I believe in creating a collaborative environment where you feel heard, understood, and empowered to 
              make meaningful changes in your life.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Compassionate & person-centered</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Mindfulness-informed & trauma-sensitive</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Culturally aware & spiritually respectful</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Rooted in practical tools that meet you where you are</span>
              </li>
            </ul>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              This isn't about applying generic solutions—it's about understanding your unique story and 
              working together to create a personalized path forward.
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
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
