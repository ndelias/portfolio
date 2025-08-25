"use client";

import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const InsuranceHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          {t('insuranceHero.title')}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t('insuranceHero.description')}
        </p>
      </div>
    </section>
  );
};

export default InsuranceHero;
