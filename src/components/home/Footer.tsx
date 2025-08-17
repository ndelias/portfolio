import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/shared/Footer.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and location */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h14V7l-7-5zM10 4.5L15 8v8H5V8l5-3.5z"/>
              </svg>
            </div>
            <span className="text-gray-700">area, MS</span>
          </div>
          
          {/* Right side - Copyright */}
          <div className="text-gray-700">
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
