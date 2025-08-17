import React from 'react';

const InsurancePlans = () => {
  const insuranceProviders = [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "UnitedHealthcare",
    "Humana",
    "Anthem",
    "Kaiser Permanente",
    "Medicare"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-12">
          Accepted Insurance Plans
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium text-sm">{provider}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Don't see your insurance provider listed? Contact me to check if I can work with your plan.
          </p>
          <p className="text-gray-600">
            I'm happy to help you verify your benefits and understand your coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePlans;
