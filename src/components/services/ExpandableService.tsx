"use client";

import React, { useState } from 'react';

interface ExpandableServiceProps {
  title: string;
  icon: string;
  description: string;
  details: {
    title: string;
    content: string;
  }[];
}

const ExpandableService: React.FC<ExpandableServiceProps> = ({ 
  title, 
  icon, 
  description, 
  details 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>
        
        {/* Chevron Icon */}
        <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Expandable Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-6 space-y-6">
            {details.map((detail, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800">{detail.title}</h4>
                <p className="text-gray-600 leading-relaxed">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableService;
