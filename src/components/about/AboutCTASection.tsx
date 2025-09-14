import React from 'react';

const AboutCTASection = () => {
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          Ready to Start Your Journey?
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          I hope this gives you a sense of who I am and how I work. If you feel like we might be a good fit, 
          I'd love to hear from you. The first step is often the hardest, but it's also the most important.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://calendar.app.google/Bq26sXedqVTPLCkY9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Schedule a Free Consultation
          </a>
          <a 
            href="/services"
            className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 inline-block"
          >
            Learn About My Services
          </a>
        </div>
        
        <p className="text-gray-600 mt-8">
          Questions? Feel free to reach out at <a href="mailto:angela@amendlpc.com" className="text-blue-600 hover:text-blue-800">angela@amendlpc.com</a>
        </p>
      </div>
    </section>
  );
};

export default AboutCTASection;
