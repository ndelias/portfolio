import React from 'react';

const ApproachSection = () => {
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute top-20 right-32 w-12 h-12 bg-amber-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-100 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          My Therapeutic Approach
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How Sessions Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Collaborative Partnership</h4>
              <p className="text-gray-600 leading-relaxed">
                Therapy is a collaborative process. You're the expert on your own experience, and I'm here 
                to provide guidance, support, and evidence-based tools to help you achieve your goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Personalized Approach</h4>
              <p className="text-gray-600 leading-relaxed">
                Every session is tailored to your unique needs and goals. I integrate different therapeutic 
                approaches based on what works best for you and your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Practical Tools</h4>
              <p className="text-gray-600 leading-relaxed">
                You'll learn practical skills and strategies that you can use in your daily life. These 
                tools will help you manage challenges and create lasting positive changes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Safe & Supportive Environment</h4>
              <p className="text-gray-600 leading-relaxed">
                I create a warm, non-judgmental space where you can be yourself, explore difficult emotions, 
                and work through challenges at your own pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
