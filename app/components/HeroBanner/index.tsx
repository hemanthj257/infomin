'use client';  // Add this at the top since we're using client-side features

import React from 'react';
import Link from 'next/link';
import { AnimatedWrapper } from '../AnimatedWrapper';

const HeroBanner: React.FC = () => {
  return (
    <div className="bg-Blueviolet text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedWrapper>
            <h1 className="text-5xl font-bold mb-6">
              Welcome to InfoMin Learning Platform
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.2}>
            <p className="text-xl mb-8">
              Discover our comprehensive courses and start your learning journey today
            </p>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.4}>
            <Link 
              href="/courses" 
              className="bg-white text-midnightblue px-8 py-3 rounded-full font-semibold hover:bg-black transition-colors hover:text-white"
            >
              Explore Courses
            </Link>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
