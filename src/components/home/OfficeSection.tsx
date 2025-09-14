"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { translations } from '../../lib/translations';

const OfficeSection = () => {
  const { t, locale } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full"></div>
        <div className="absolute top-20 left-32 w-12 h-12 bg-blue-300 rounded-full"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-blue-100 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Office Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl overflow-hidden">
              <img 
                src="/images/home/officespace.png" 
                alt="Office Space" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              {t('office.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('office.description')}
            </p>
            
            <div className="space-y-4">
              {translations[locale].office.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-100 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('office.location.title')}</h3>
              <p className="text-gray-600">{t('office.location.address')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
