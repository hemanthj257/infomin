import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center text-xl font-bold text-midnightblue">
                InfoMin
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/courses" className="text-charcoal hover:text-midnightblue">
                Courses
              </Link>
              <Link href="/banner" className="text-charcoal hover:text-midnightblue">
                About
              </Link>
              <Link href="/testimonials" className="text-charcoal hover:text-midnightblue">
                Testimonials
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
