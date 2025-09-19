"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { translations } from '../../lib/translations';

const ServicesCTASection = () => {
  const { t, locale } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Background decoration - Left side */}
      <div className="absolute left-0 top-0 w-96 h-96 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute top-20 left-32 w-12 h-12 bg-amber-300 rounded-full"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-amber-100 rounded-full"></div>
        <div className="absolute top-60 left-40 w-10 h-10 bg-amber-200 rounded-full"></div>
        <div className="absolute top-80 left-10 w-14 h-14 bg-amber-300 rounded-full"></div>
      </div>
      
      {/* Background decoration - Right side */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
        <div className="absolute top-10 right-10 w-20 h-20 bg-amber-200 rounded-full"></div>
        <div className="absolute top-20 right-32 w-12 h-12 bg-amber-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-100 rounded-full"></div>
        <div className="absolute top-60 right-40 w-10 h-10 bg-amber-200 rounded-full"></div>
        <div className="absolute top-80 right-10 w-14 h-14 bg-amber-300 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          {t('servicesCTA.title')}
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          {t('servicesCTA.description')}
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Next Steps</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {translations[locale].servicesCTA.steps.map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://calendar.app.google/Bq26sXedqVTPLCkY9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 inline-block"
          >
            {t('servicesCTA.cta')}
          </a>
        </div>
        
        <p className="text-gray-600 mt-8" dangerouslySetInnerHTML={{ __html: t('servicesCTA.contact') }}>
        </p>
      </div>
    </section>
  );
};

export default ServicesCTASection;
