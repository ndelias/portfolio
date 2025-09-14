"use client";

import React, { useState } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const ServicesSection = () => {
  const { t } = useTranslation();
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());
  
  // Helper function to get the first sentence
  const getFirstSentence = (text: string): string => {
    const sentences = text.split(/[.!?]+/);
    return sentences[0]?.trim() + (sentences.length > 1 ? '.' : '');
  };

  // Helper function to toggle expanded state
  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedServices(newExpanded);
  };
  
  const services = [
    {
      title: t('services.lifeTransitions.title'),
      description: t('services.lifeTransitions.description'),
      image: "/images/home/rs=w_400,cg_true.webp"
    },
    {
      title: t('services.depression.title'),
      description: t('services.depression.description'),
      image: "/images/home/mental-health-therapy.webp"
    },
    {
      title: t('services.anxiety.title'),
      description: t('services.anxiety.description'),
      image: "/images/home/therapy-therapist-mental-health-featured.jpg.optimal.jpg"
    },
    {
      title: t('services.cultural.title'),
      description: t('services.cultural.description'),
      image: "/images/home/sided-view-young-girl-talking-therapist_23-2150136592.avif"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          {t('services.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const isExpanded = expandedServices.has(index);
            const displayText = isExpanded ? service.description : getFirstSentence(service.description);
            const hasMoreText = service.description !== getFirstSentence(service.description);
            
            return (
              <div key={index} className="text-center space-y-4">
                {/* Service image */}
                <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 leading-relaxed text-sm font-light px-4">
                    {displayText}
                  </p>
                  {hasMoreText && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                    >
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://calendar.app.google/Bq26sXedqVTPLCkY9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 inline-block"
          >
            {t('services.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
