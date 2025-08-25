"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const InsurancePlans = () => {
  const { t } = useTranslation();
  
  const insuranceProviders = [
    {
      name: "Blue Cross Blue Shield",
      logo: "/images/insurance/bluecross.png"
    },
    {
      name: "Aetna",
      logo: "/images/insurance/Aetna Logo.png"
    },
    {
      name: "Cigna",
      logo: "/images/insurance/Cigna-Logo-PNG-Transparent.png"
    },
    {
      name: "Anthem",
      logo: "/images/insurance/Anthem_Inc_logo.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-12">
          {t('insurancePlans.title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-2xl text-center">
              <div className="w-36 h-12 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={provider.logo} 
                  alt={`${provider.name} logo`}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-gray-700 font-medium text-sm">{provider.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {t('insurancePlans.notListed')}
          </p>
          <p className="text-gray-600">
            {t('insurancePlans.verifyBenefits')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePlans;
