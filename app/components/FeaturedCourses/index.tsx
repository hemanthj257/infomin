import React from 'react';
import CourseCard from '../Courses/CourseCard';

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming with this comprehensive course",
      image: "/images/courses/programming.jpg",
      slug: "intro-to-programming"
    },
    {
      title: "Web Development Fundamentals",
      description: "Master the core concepts of web development",
      image: "/images/courses/web-dev.jpg",
      slug: "web-development"
    },
    {
      title: "Data Science Essentials",
      description: "Get started with data science and analytics",
      image: "/images/courses/data-science.jpg",
      slug: "data-science"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
