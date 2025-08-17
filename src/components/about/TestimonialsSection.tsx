import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Angela helped me find my voice again. She created a safe space where I could explore my identity and navigate the challenges of being a working mother.",
      author: "Sarah M.",
      context: "Life Transitions & Identity"
    },
    {
      quote: "Angela's approach is so genuine and caring. She helped me develop practical tools to manage my anxiety while honoring my cultural background and family values.",
      author: "Maria L.",
      context: "Anxiety & Cultural Pressures"
    },
    {
      quote: "I was struggling with burnout and feeling lost. Angela helped me reconnect with what truly matters and create boundaries that protect my well-being.",
      author: "Jennifer K.",
      context: "Stress & Burnout"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          What Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-blue-600">{testimonial.context}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            *Names have been changed to protect client confidentiality
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
