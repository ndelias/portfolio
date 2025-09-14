import React from 'react';

const ServicesCTASection = () => {
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 left-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-40 left-40 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          Ready to Get Started?
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          The first step is often the hardest, but it's also the most important. I offer a free 15-minute 
          consultation call so we can discuss your needs and see if we're a good fit to work together.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Next Steps</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Schedule Consultation</h4>
              <p className="text-gray-600 text-sm">Book your free 15-minute consultation call</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Discuss Your Needs</h4>
              <p className="text-gray-600 text-sm">Share your concerns and goals for therapy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Begin Your Journey</h4>
              <p className="text-gray-600 text-sm">Start your first therapy session together</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://calendar.app.google/Bq26sXedqVTPLCkY9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 inline-block"
          >
            Book Free Consultation
          </a>
          <a 
            href="/about"
            className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Learn More About Me
          </a>
        </div>
        
        <p className="text-gray-600 mt-8">
          Questions? Contact me at <a href="mailto:angela@amendlpc.com" className="text-blue-600 hover:text-blue-800">angela@amendlpc.com</a>
        </p>
      </div>
    </section>
  );
};

export default ServicesCTASection;
