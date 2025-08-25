"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-start justify-center bg-transparent pt-50">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-200 opacity-100"></div>
        <img 
          src="/images/home/IMG_4243 2.jpeg" 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-left-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl md:text-7xl font-serif text-black max-w-1.5xl mx-auto mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 font-light max-w-1.5xl mx-auto mb-8">
          {t('hero.subtitle')}
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          {t('hero.cta')}
        </button>
      </div>
      
      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
