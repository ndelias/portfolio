"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { translations } from '../../lib/translations';

const ApproachSection = () => {
  const { t, locale } = useTranslation();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg overflow-hidden">
              <img 
                src="/images/home/myths-vs-facts-article-1.png" 
                alt="Therapy Approach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              {t('approach.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('approach.description')}
            </p>
            
            <ul className="space-y-3">
              {translations[locale].approach.points.map((point: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('approach.conclusion')}
            </p>
            
            <div className="flex justify-start">
              <a 
                href="https://calendar.app.google/Bq26sXedqVTPLCkY9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 inline-block"
              >
                {t('approach.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
