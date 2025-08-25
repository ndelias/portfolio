"use client";

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors duration-200`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 text-sm rounded ${
          locale === 'es'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors duration-200`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
