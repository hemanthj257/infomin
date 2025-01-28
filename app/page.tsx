import React from 'react';
import HeroBanner from './components/HeroBanner';
import FeaturedCourses from './components/FeaturedCourses';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center text-midnightblue mb-8">
          Featured Courses
        </h2>
        <FeaturedCourses />
      </div>
    </div>
  );
}
