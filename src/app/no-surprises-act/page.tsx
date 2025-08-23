import React from 'react';

const NoSurprisesAct = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
          No Surprises Act
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights and Protections Against Surprise Medical Bills</h2>
            <p className="text-gray-600 leading-relaxed">
              The No Surprises Act protects you from surprise medical bills when you receive emergency care or are treated 
              by an out-of-network provider at an in-network hospital or ambulatory surgical center.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What This Means for You</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When you receive care from our practice, you are protected from surprise billing for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Emergency services</li>
              <li>Non-emergency services from out-of-network providers at in-network facilities</li>
              <li>Air ambulance services from out-of-network providers</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">You're Only Responsible for Your In-Network Cost-Sharing</h3>
                <p className="text-blue-700">
                  You can't be charged more than your in-network deductible, copayments, and coinsurance for surprise bills.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">You Don't Need to Give Up Your Protections</h3>
                <p className="text-green-700">
                  You don't have to give up your protections from balance billing. You also aren't required to get care 
                  out-of-network. You can choose a provider or facility in your plan's network.
                </p>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">You Have the Right to Receive a Notice</h3>
                <p className="text-amber-700">
                  You have the right to receive a notice explaining the billing protections that apply to you.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do If You Receive a Surprise Bill</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you receive a surprise medical bill, you have several options:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Contact your health plan to understand your benefits</li>
              <li>Contact the provider or facility that sent the bill</li>
              <li>File a complaint with your state's insurance department</li>
              <li>Contact the federal government at 1-800-985-3059</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Independent Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed">
              If you receive a surprise bill, you may be able to dispute the charges through an independent dispute 
              resolution process. This process allows an independent third party to review the bill and determine 
              the appropriate amount to be paid.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about the No Surprises Act or believe you have received a surprise bill, 
              please contact us:
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
              For more information about the No Surprises Act, visit: 
              <a href="https://www.cms.gov/nosurprises" className="text-blue-600 hover:text-blue-800 ml-1">
                www.cms.gov/nosurprises
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSurprisesAct;
