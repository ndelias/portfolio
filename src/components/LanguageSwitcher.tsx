"use client";

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(locale === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm border-2 border-blue-500 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
    >
      {locale === 'en' ? 'En Español' : 'In English'}
    </button>
  );
};

export default LanguageSwitcher;
