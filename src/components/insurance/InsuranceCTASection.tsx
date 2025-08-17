import React from 'react';

const InsuranceCTASection = () => {
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">
          Questions About Insurance or Payment?
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          I'm here to help you understand your coverage and find the best payment option for your situation. 
          Let's discuss your insurance benefits and make sure therapy is accessible for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
            Schedule Consultation
          </button>
          <button className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
            Contact Me
          </button>
        </div>
        
        <p className="text-gray-600 mt-8">
          Email: <span className="text-blue-600">angela@amendtherapy.com</span> | 
          Phone: <span className="text-blue-600">(555) 123-4567</span>
        </p>
      </div>
    </section>
  );
};

export default InsuranceCTASection;
