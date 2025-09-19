import React from 'react';

const WomenFocusSection = () => {
  const focusAreas = [
    {
      title: "Life Transitions",
      description: "Career changes, relationship shifts, motherhood, empty nesting, and identity evolution"
    },
    {
      title: "Cultural Pressures",
      description: "Balancing tradition with personal needs, family expectations, and cultural identity"
    },
    {
      title: "Self-Worth & Confidence",
      description: "Building self-compassion, challenging perfectionism, and embracing authenticity"
    },
    {
      title: "Emotional Wellness",
      description: "Managing stress, anxiety, depression, and creating sustainable self-care practices"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Why I Work with Women
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I&apos;ve dedicated my practice to supporting women because I understand the unique challenges and 
            pressures we face in today&apos;s world. Women often carry the weight of multiple roles and 
            expectations, and I believe you deserve a space where you can be fully seen and supported.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            In our sessions, you&apos;ll find a space where your experiences are validated, your voice is heard, 
            and your growth is celebrated. I&apos;m committed to creating an environment where you can explore 
            your authentic self without fear of judgment or pressure to conform to others&apos; expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WomenFocusSection;
