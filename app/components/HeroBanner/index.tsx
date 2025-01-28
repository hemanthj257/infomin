import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="bg-Blueviolet text-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Welcome to InfoMin Learning Platform
          </h1>
          <p className="text-xl mb-8 text-white">
            Discover our comprehensive courses and start your learning journey today
          </p>
          <Link 
            href="/courses" 
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-black transition-colors hover:text-white"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
