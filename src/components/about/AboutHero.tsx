import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Meet Angela
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              I&apos;m a licensed therapist who believes that every woman deserves to feel seen, heard, and supported 
              during life&apos;s most challenging moments. My journey to becoming a therapist began with my own 
              experiences of navigating difficult transitions and searching for authentic connection.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              After working with hundreds of women facing similar challenges, I&apos;ve learned that healing isn&apos;t 
              about &quot;fixing&quot; what&apos;s broken—it&apos;s about honoring your story, reconnecting with your inner wisdom, 
              and creating a life that truly reflects who you are.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Placeholder for Angela's photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-700 text-lg font-medium">Angela&apos;s Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
