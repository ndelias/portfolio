"use client";

import React from 'react';
import type { Metadata } from "next";
import Navigation from '../../components/home/Navigation';
import Footer from '../../components/home/Footer';
import { useTranslation } from '../../contexts/TranslationContext';

const NoSurprisesAct = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-16 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          {t('noSurprisesAct.title')}
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('noSurprisesAct.rightsTitle')}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t('noSurprisesAct.ombNumber')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('noSurprisesAct.intro')}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('noSurprisesAct.balanceBillingTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('noSurprisesAct.balanceBillingExplanation')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('noSurprisesAct.outOfNetworkExplanation')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('noSurprisesAct.surpriseBillingExplanation')}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('noSurprisesAct.protectedFromTitle')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {t('noSurprisesAct.emergencyServicesTitle')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('noSurprisesAct.emergencyServicesDescription')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {t('noSurprisesAct.certainServicesTitle')}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('noSurprisesAct.certainServicesDescription')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('noSurprisesAct.certainServicesNote')}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('noSurprisesAct.protectionsTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('noSurprisesAct.protectionsIntro')}
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {t('noSurprisesAct.responsibleTitle')}
                </h3>
                <p className="text-blue-700">
                  {t('noSurprisesAct.responsibleDescription')}
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  {t('noSurprisesAct.healthPlanTitle')}
                </h3>
                <ul className="text-green-700 space-y-2">
                  <li>• {t('noSurprisesAct.healthPlanPoint1')}</li>
                  <li>• {t('noSurprisesAct.healthPlanPoint2')}</li>
                  <li>• {t('noSurprisesAct.healthPlanPoint3')}</li>
                  <li>• {t('noSurprisesAct.healthPlanPoint4')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('noSurprisesAct.wronglyBilledTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('noSurprisesAct.wronglyBilledDescription')}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                {t('noSurprisesAct.georgiaContact')}
              </p>
            </div>
          </div>
          
          <div className="border-t pt-6 space-y-4">
            <p className="text-sm text-gray-500">
              {t('noSurprisesAct.federalInfo')}
              <a href="https://www.cms.gov/files/document/model-disclosure-notice-patient-protections-against-surprisebilling-providers-facilities-health.pdf" 
                 className="text-blue-600 hover:text-blue-800 ml-1" target="_blank" rel="noopener noreferrer">
                {t('noSurprisesAct.federalLink')}
              </a>
            </p>
            <p className="text-sm text-gray-500">
              {t('noSurprisesAct.georgiaInfo')}
              <a href="https://gov.georgia.gov/" 
                 className="text-blue-600 hover:text-blue-800 ml-1" target="_blank" rel="noopener noreferrer">
                {t('noSurprisesAct.georgiaLink')}
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoSurprisesAct;
