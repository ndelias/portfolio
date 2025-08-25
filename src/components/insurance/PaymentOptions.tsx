"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import { translations } from '../../lib/translations';

const PaymentOptions = () => {
  const { t, locale } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-12">
          {t('paymentOptions.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Self-Pay Option */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('paymentOptions.selfPay.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('paymentOptions.selfPay.description')}
            </p>
            <ul className="space-y-2 text-gray-600">
              {translations[locale].paymentOptions.selfPay.features.map((feature: string, index: number) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          
          {/* Sliding Scale */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('paymentOptions.slidingScale.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('paymentOptions.slidingScale.description')}
            </p>
            <ul className="space-y-2 text-gray-600">
              {translations[locale].paymentOptions.slidingScale.features.map((feature: string, index: number) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            {t('paymentOptions.accessibility')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
