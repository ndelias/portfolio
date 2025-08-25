"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { translations } from '../../lib/translations';

const InsuranceSection = () => {
  const { t, locale } = useTranslation();
  
  const insuranceProviders = translations[locale].insurance.providers;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
          {t('insurance.title')}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 items-center max-w-4xl mx-auto">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm min-w-[200px] flex items-center justify-center">
              <div className="w-full h-16 flex items-center justify-center">
                {/* Placeholder for insurance logo - replace src with actual logo path */}
                <div className="w-full h-12 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm text-center">{provider}</span>
                </div>
                {/* Uncomment and update the img tag below when you have the logos */}
                {/* <img 
                  src={`/images/insurance/${provider.toLowerCase().replace(/\s+/g, '-')}.png`}
                  alt={`${provider} logo`}
                  className="h-12 w-auto object-contain"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
