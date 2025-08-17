import React from 'react';
import ExpandableService from './ExpandableService';

const ServicesList = () => {
  const services = [
    {
      title: "Life Transitions & Identity",
      icon: "🔄",
      description: "Navigating major life changes and discovering your authentic self",
      details: [
        {
          title: "Career Changes & Professional Identity",
          content: "Whether you're starting a new career, returning to work after a break, or questioning your professional path, I help you navigate the complex emotions and identity shifts that come with career transitions."
        },
        {
          title: "Relationship Transitions",
          content: "Support through marriage, divorce, dating challenges, and relationship changes. We'll explore how these transitions affect your sense of self and help you maintain your identity through relationship changes."
        },
        {
          title: "Motherhood & Parenting Challenges",
          content: "The transition to motherhood can be both beautiful and overwhelming. I help you navigate the identity shift, manage expectations, and find balance between your roles as a parent and an individual."
        },
        {
          title: "Empty Nesting & Midlife Transitions",
          content: "As children leave home or you reach midlife, you may question who you are beyond your roles. Together, we'll explore your evolving identity and create meaning in this new chapter."
        },
        {
          title: "Personal Identity Exploration",
          content: "Discovering and embracing your authentic self, including exploring values, beliefs, and what truly matters to you. We'll work on living in alignment with your core identity."
        }
      ]
    },
    {
      title: "Depression & Self-Worth",
      icon: "💙",
      description: "Building self-compassion and rediscovering your inner strength",
      details: [
        {
          title: "Understanding Depression",
          content: "We'll explore the symptoms, patterns, and underlying causes of depression. I help you understand how depression affects your thoughts, feelings, and daily life."
        },
        {
          title: "Building Self-Compassion",
          content: "Learn to treat yourself with the same kindness and understanding you would offer a friend. We'll work on developing self-compassion practices that can transform your relationship with yourself."
        },
        {
          title: "Challenging Negative Thoughts",
          content: "Identify and reframe negative thought patterns that contribute to low self-worth. I'll teach you practical techniques to recognize and change unhelpful thinking."
        },
        {
          title: "Rediscovering Strengths",
          content: "Reconnect with your personal strengths, values, and accomplishments. We'll work on building a more balanced and realistic view of yourself and your capabilities."
        },
        {
          title: "Sustainable Mood Management",
          content: "Develop practical strategies for managing depression symptoms and maintaining emotional well-being. These tools will help you create lasting positive changes in your mood and outlook."
        }
      ]
    },
    {
      title: "Anxiety, Stress & Burnout",
      icon: "🧘",
      description: "Managing overwhelming feelings and creating sustainable self-care",
      details: [
        {
          title: "Understanding Anxiety Patterns",
          content: "Identify your anxiety triggers, symptoms, and patterns. We'll explore how anxiety manifests in your life and develop personalized strategies for managing it."
        },
        {
          title: "Stress Management Techniques",
          content: "Learn practical stress management tools including breathing exercises, mindfulness practices, and cognitive techniques to reduce stress and increase resilience."
        },
        {
          title: "Work-Life Balance",
          content: "Create healthy boundaries between work and personal life. We'll work on setting realistic expectations and developing strategies to maintain balance in all areas of your life."
        },
        {
          title: "Burnout Recovery & Prevention",
          content: "If you're experiencing burnout, I'll help you recover and develop strategies to prevent it in the future. We'll focus on rest, boundaries, and sustainable work practices."
        },
        {
          title: "Mindfulness & Relaxation",
          content: "Develop a mindfulness practice that fits your lifestyle. Learn relaxation techniques that you can use anywhere to reduce anxiety and increase your sense of calm and presence."
        }
      ]
    },
    {
      title: "Cultural & Family Pressures",
      icon: "👨‍👩‍👧‍👦",
      description: "Balancing tradition with personal needs and cultural identity",
      details: [
        {
          title: "Cultural Identity & Belonging",
          content: "Explore your cultural identity and how it shapes your sense of self. We'll work on honoring your cultural background while creating space for your individual identity."
        },
        {
          title: "Family Dynamics & Expectations",
          content: "Navigate complex family relationships and manage family expectations. Learn to set healthy boundaries while maintaining important family connections."
        },
        {
          title: "Generational Differences",
          content: "Bridge the gap between different generations in your family. Understand how cultural and generational differences affect relationships and communication."
        },
        {
          title: "Balancing Tradition & Personal Needs",
          content: "Find ways to honor cultural traditions while staying true to your personal values and needs. We'll work on creating a life that respects both your heritage and your individuality."
        },
        {
          title: "Creating Healthy Boundaries",
          content: "Develop skills to set and maintain healthy boundaries within cultural contexts. Learn to communicate your needs respectfully while honoring cultural values."
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-16">
          How I Can Help You
        </h2>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <ExpandableService
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
