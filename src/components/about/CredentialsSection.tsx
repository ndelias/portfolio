import React from 'react';

const CredentialsSection = () => {
  const credentials = [
    {
      title: "Education",
      items: [
        "Master's in Clinical Mental Health Counseling",
        "Bachelor's in Psychology",
        "Additional training in trauma-informed care"
      ]
    },
    {
      title: "Licenses & Certifications",
      items: [
        "Licensed Professional Counselor (LPC)",
        "Certified in Mindfulness-Based Interventions",
        "Trauma-Informed Care Specialist"
      ]
    },
    {
      title: "Experience",
      items: [
        "8+ years working with women in therapy",
        "Specialized in life transitions and identity work",
        "Experience in private practice and community settings"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          Professional Background
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((section, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
