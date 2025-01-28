import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseProps {
  course: {
    title: string;
    description: string;
    image: string;
    slug: string;
  }
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <Link
          href={`/courses/${course.slug}`}
          className="text-midnightblue font-semibold hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
