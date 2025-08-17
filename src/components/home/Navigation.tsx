import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-blue-100 rounded-b-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h14V7l-7-5zM10 4.5L15 8v8H5V8l5-3.5z"/>
                </svg>
              </div>
              <span className="text-xl font-serif text-gray-800">Amend Therapy</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About Me
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Services
              </Link>
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Insurance
              </Link>
            </div>
          </div>
          
          {/* Book Appointment Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
