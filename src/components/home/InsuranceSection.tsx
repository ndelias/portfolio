import React from 'react';

const InsuranceSection = () => {
  const insuranceProviders = [
    "Logoipsum",
    "Logoispsum", 
    "1234 IPSUM",
    "Insurance Co",
    "Health Plus"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
          Insurances Covered
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-12 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">{provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
