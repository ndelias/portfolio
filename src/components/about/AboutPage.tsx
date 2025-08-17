import React from 'react';
import Navigation from '../home/Navigation';
import AboutHero from './AboutHero';
import CredentialsSection from './CredentialsSection';
import PhilosophySection from './PhilosophySection';
import WomenFocusSection from './WomenFocusSection';
import PersonalTouchSection from './PersonalTouchSection';
import OfficeSection from './OfficeSection';
import TestimonialsSection from './TestimonialsSection';
import PersonalInterestsSection from './PersonalInterestsSection';
import AboutCTASection from './AboutCTASection';
import Footer from '../home/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CredentialsSection />
      <PhilosophySection />
      <WomenFocusSection />
      <PersonalTouchSection />
      <OfficeSection />
      <TestimonialsSection />
      <PersonalInterestsSection />
      <AboutCTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;
