import type { Metadata } from "next";
import HomePage from '../components/home/HomePage';

export const metadata: Metadata = {
  title: "Amend Therapy - Professional Mental Health Services in Marietta, GA",
  description: "Angela Mendez, LPC provides bilingual therapy services specializing in calm and grounding support for overwhelmed adults managing chronic stress and responsibility in Marietta, Georgia.",
};

export default function Home() {
  return <HomePage />;
}
