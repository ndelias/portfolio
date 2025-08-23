import React from 'react';

const ApproachSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg overflow-hidden">
              <img 
                src="/images/home/myths-vs-facts-article-1.png" 
                alt="Therapy Approach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              My Therapeutic Approach
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
            
            <div className="flex justify-start">
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
