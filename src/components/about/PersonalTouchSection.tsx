import React from 'react';

const PersonalTouchSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              What Makes This Practice Special
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Amend Therapy is intentionally designed as a boutique practice, which means I work with a 
              limited number of clients to ensure each person receives the personalized attention and 
              care they deserve.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When you work with me, you're not just another appointment on a schedule—you're a unique 
              individual with your own story, challenges, and goals. I take the time to truly understand 
              your situation and tailor our work together to meet your specific needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach is warm, authentic, and down-to-earth. I believe in being real with my clients 
              while maintaining the professional boundaries that keep our work effective and safe.
            </p>
          </div>
          
          {/* Right Column - Features */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Care</h3>
              <p className="text-gray-600">Every session is tailored to your unique needs and goals</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">Available during business hours and some evenings</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfortable Environment</h3>
              <p className="text-gray-600">A warm, welcoming space designed for healing and growth</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Resources and tools to support your journey between sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTouchSection;
