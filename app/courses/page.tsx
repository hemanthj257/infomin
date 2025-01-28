import CoursesList from '../components/Courses/list'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center text-midnightblue mb-12">Our Courses</h1>
        <CoursesList />
      </div>
    </div>
  )
}
