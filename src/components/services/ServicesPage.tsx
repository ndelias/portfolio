import React from 'react';
import Navigation from '../home/Navigation';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ApproachSection from './ApproachSection';
import SessionInfoSection from './SessionInfoSection';
import ServicesCTASection from './ServicesCTASection';
import Footer from '../home/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ApproachSection />
      <SessionInfoSection />
      <ServicesCTASection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
