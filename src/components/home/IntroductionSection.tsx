"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const IntroductionSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              {t('introduction.title')}
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('introduction.paragraph1')}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('introduction.paragraph2')}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('introduction.paragraph3')}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t('introduction.paragraph4')}
              </p>
            </div>
            <div className="flex justify-start">
              <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
                {t('introduction.cta')}
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              {/* Circular frame with organic shapes overlay */}
              <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                <img 
                  src="/images/home/Angela's Photo.jpeg" 
                  alt="Angela - Amend Therapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Organic shapes overlay */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-100 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
