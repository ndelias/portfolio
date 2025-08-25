"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const BookingSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
          {t('booking.title')}
        </h2>
        
        {/* Tablet placeholder */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="w-full h-64 bg-gray-200 rounded-lg border-4 border-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-gray-600 text-lg">{t('booking.placeholder')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
          {t('booking.cta')}
        </button>
      </div>
    </section>
  );
};

export default BookingSection;
