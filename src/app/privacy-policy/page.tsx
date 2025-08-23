import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Rosebud Psychotherapy is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, and safeguard your personal information when you visit our website or use our services.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Appointment scheduling information</li>
              <li>Website usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Schedule and manage therapy appointments</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as required by law or as necessary to provide our services.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of certain communications</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Email: mmalone@rosebudpsychotherapy.com<br />
                Phone: 404.919.9723<br />
                Address: 316 Alexander Street SE. Ste 8, Marietta, GA 30060
              </p>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
