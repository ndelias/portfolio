import type { Metadata } from "next";
import ServicesPage from '../../components/services/ServicesPage';

export const metadata: Metadata = {
  title: "Therapy Services - Individual Counseling & Mental Health Support",
  description: "Professional therapy services including individual counseling, stress management, anxiety treatment, and bilingual mental health support for adults in Marietta, Georgia.",
};

export default function Services() {
  return <ServicesPage />;
}
