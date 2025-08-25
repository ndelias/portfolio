"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../../contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="relative bg-transparent text-black py-12 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'url(/images/shared/Footer.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
        {/* Contact Information */}
        <div className="text-lg">
          {t('footer.contact')}
        </div>
        
        {/* Copyright */}
        {/* <div className="text-sm">
          {t('footer.copyright')}
        </div> */}
        
        {/* Legal Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/privacy-policy" className="text-black hover:text-blue-500 transition-colors duration-200 underline">
            {t('footer.privacyPolicy')}
          </Link>
          <Link href="/no-surprises-act" className="text-black hover:text-blue-500 transition-colors duration-200 underline">
            {t('footer.noSurprisesAct')}
          </Link>
        </div>
        
        {/* In-Person Therapy Locations */}
        <div className="text-sm">
          {t('footer.locations')}
        </div>
        
        {/* Address */}
        <div className="text-sm">
          {t('footer.address')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
