import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';
import ApproachSection from './ApproachSection';
import PhilosophySection from './PhilosophySection';
import ServicesSection from './ServicesSection';
import ConsultationSection from './ConsultationSection';
import BookingSection from './BookingSection';
import InsuranceSection from './InsuranceSection';
import CTASection from './CTASection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <ApproachSection />
      <PhilosophySection />
      <ServicesSection />
      <ConsultationSection />
      <BookingSection />
      <InsuranceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
