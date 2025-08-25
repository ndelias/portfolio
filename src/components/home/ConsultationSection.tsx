"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const ConsultationSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-blue-100 relative overflow-hidden">
      {/* Starburst/splash illustration */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-60 right-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-80 right-10 w-12 h-12 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
          {t('consultation.title')}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {t('consultation.subtitle')}
        </p>
        <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
          {t('consultation.cta')}
        </button>
      </div>
    </section>
  );
};

export default ConsultationSection;
