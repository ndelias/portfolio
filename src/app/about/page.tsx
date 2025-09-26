import type { Metadata } from "next";
import AboutPage from '../../components/about/AboutPage';

export const metadata: Metadata = {
  title: "About Angela Mendez, LPC - Bilingual Therapist in Marietta, GA",
  description: "Learn about Angela Mendez, Licensed Professional Counselor specializing in women's mental health, bilingual therapy, and providing calm therapeutic support for overwhelmed adults.",
};

export default function About() {
  return <AboutPage />;
}
