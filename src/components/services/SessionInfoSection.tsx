import React from 'react';

const SessionInfoSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          Session Information
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Session Details */}
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Session Details</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• 50-minute individual therapy sessions</li>
              <li>• Weekly or bi-weekly appointments</li>
              <li>• Flexible scheduling available</li>
              <li>• In-person sessions in my office</li>
            </ul>
          </div>
          
          {/* First Session */}
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your First Session</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Free 15-minute consultation call</li>
              <li>• Paperwork and intake forms</li>
              <li>• Discussion of your goals and concerns</li>
              <li>• Questions about my approach</li>
              <li>• Plan for moving forward together</li>
            </ul>
          </div>
          
          {/* Pricing */}
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing & Insurance</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• $150 per 50-minute session</li>
              <li>• Accept most major insurance plans</li>
              <li>• Sliding scale available for those in need</li>
              <li>• Payment accepted via credit card or check</li>
            </ul>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Before Your Session</h4>
              <p className="text-gray-600 leading-relaxed">
                You&apos;ll receive intake forms to complete before your first session. This helps me understand 
                your background and current concerns, so we can make the most of our time together.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">During Your Session</h4>
              <p className="text-gray-600 leading-relaxed">
                Sessions are conversational and collaborative. We&apos;ll discuss your concerns, work on specific 
                goals, and develop practical strategies you can use in your daily life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionInfoSection;
