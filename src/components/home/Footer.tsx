import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Contact Information */}
        <div className="text-lg">
          Marietta, GA | 678.923.6922| angela@amendlpc.com
        </div>
        
        {/* Copyright */}
        {/* <div className="text-sm">
          © 2025 by Rosebud Psychotherapy
        </div> */}
        
        {/* Legal Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/privacy-policy" className="text-gray-300 hover:text-amber-200 transition-colors duration-200 underline">
            Privacy Policy
          </Link>
          <Link href="/no-surprises-act" className="text-gray-300 hover:text-amber-200 transition-colors duration-200 underline">
            No Surprises Act
          </Link>
        </div>
        
        {/* In-Person Therapy Locations */}
        <div className="text-sm">
          In-Person Therapy: Marietta, GA; Kennesaw, GA; Acworth, GA; Atlanta, GA; Smyrna, GA; Powder Springs, GA; Woodstock, GA
        </div>
        
        {/* Address */}
        <div className="text-sm">
          at 840 Kennesaw Ave NW Suite 8, Marietta, GA, 30060
        </div>
      </div>
    </footer>
  );
};

export default Footer;
