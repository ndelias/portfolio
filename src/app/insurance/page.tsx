import type { Metadata } from "next";
import InsurancePage from '../../components/insurance/InsurancePage';

export const metadata: Metadata = {
  title: "Insurance & Payment Options - Amend Therapy",
  description: "Learn about accepted insurance plans and flexible payment options for therapy services with Angela Mendez, LPC in Marietta, Georgia.",
};

export default function Insurance() {
  return <InsurancePage />;
}
