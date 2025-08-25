"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { translations } from '../../lib/translations';

const LocationSection = () => {
  const { t, locale } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              {t('location.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('location.subtitle')}
            </p>
            <div className="space-y-4">
              {translations[locale].location.features.map((feature: any, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="relative">
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload="auto"
                playsInline
              >
                <source src="/images/home/Screen Recording Aug 22 2025.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
