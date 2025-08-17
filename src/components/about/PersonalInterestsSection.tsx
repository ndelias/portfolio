import React from 'react';

const PersonalInterestsSection = () => {
  const interests = [
    {
      title: "Nature & Wellness",
      description: "I find peace in hiking, gardening, and spending time outdoors. Nature has taught me about resilience and the beauty of growth.",
      icon: "🌿"
    },
    {
      title: "Family & Community",
      description: "I'm deeply connected to my family and community. These relationships remind me of the importance of connection and support.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Continuous Learning",
      description: "I'm passionate about ongoing education and staying current with the latest research in mental health and therapeutic approaches.",
      icon: "📚"
    },
    {
      title: "Mindfulness Practice",
      description: "I practice what I teach—mindfulness and self-care are essential parts of my daily routine and personal growth journey.",
      icon: "🧘"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            A Little About Me Outside of Therapy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I believe that being a good therapist means being a whole person. Here are some things that 
            bring me joy and help me stay grounded in my own life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-3xl">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {interest.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            These personal interests and experiences inform my therapeutic approach and help me connect 
            with clients on a human level. I believe that sharing our authentic selves—while maintaining 
            appropriate boundaries—creates a more meaningful therapeutic relationship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterestsSection;
