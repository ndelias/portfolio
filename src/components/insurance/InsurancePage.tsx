import React from 'react';
import Navigation from '../home/Navigation';
import InsuranceHero from './InsuranceHero';
import InsurancePlans from './InsurancePlans';
import PaymentOptions from './PaymentOptions';
import InsuranceCTASection from './InsuranceCTASection';
import Footer from '../home/Footer';

const InsurancePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <InsuranceHero />
      <InsurancePlans />
      <PaymentOptions />
      <InsuranceCTASection />
      <Footer />
    </div>
  );
};

export default InsurancePage;
