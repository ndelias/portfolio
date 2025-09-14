"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../../contexts/TranslationContext';
import LanguageSwitcher from '../LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-blue-100 rounded-b-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/images/home/AMEND LOGO 2.png" 
                alt="Amend Therapy Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {t('navigation.aboutMe')}
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {t('navigation.services')}
              </Link>
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {t('navigation.insurance')}
              </Link>
            </div>
          </div>
          
          {/* Language Switcher and Book Appointment Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <a 
              href="https://calendar.app.google/Bq26sXedqVTPLCkY9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              {t('navigation.scheduleAppointment')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
