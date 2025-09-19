import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute top-20 right-32 w-12 h-12 bg-amber-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-100 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl overflow-hidden">
              {/* Placeholder for philosophy image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span className="text-amber-700 text-lg">Therapeutic Philosophy</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              My Therapeutic Philosophy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe that therapy is a collaborative journey of discovery and growth. My approach is rooted 
              in the understanding that you are the expert of your own experience, and my role is to create a 
              safe, non-judgmental space where you can explore, heal, and transform.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I integrate evidence-based practices with a holistic understanding of the whole person—mind, body, 
              and spirit. This means we&apos;ll work together to understand not just your thoughts and feelings, 
              but also how your physical health, relationships, cultural background, and spiritual beliefs 
              all influence your well-being.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My goal is to help you develop practical tools and insights that you can use long after our 
              sessions end, empowering you to navigate life&apos;s challenges with greater confidence and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
