// src/app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/posts'; // Controleer dit pad!
import { CalendarDays, Edit3, ArrowRight } from 'lucide-react'; // ArrowRight HIER TOEGEVOEGD

export const metadata = {
  title: 'Blog - Michael Salmagne | AI Inzichten & Visie',
  description: 'Lees de laatste artikelen en inzichten over AI, technologie, en de menselijke impact door Michael Salmagne.',
};

export default function BlogIndexPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className="bg-slate-100 py-12 md:py-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-blue-800">
            Mijn Blog
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Inzichten, analyses en visie op kunstmatige intelligentie, technologie en de menselijke toekomst.
          </p>
        </header>

        {allPostsData.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500 mb-4">Er zijn nog geen blogposts beschikbaar.</p>
            <p className="text-gray-500">Kom binnenkort terug voor nieuwe inzichten!</p>
          </div>
        )}

        <div className="space-y-10">
          {allPostsData.map(({ id, date, title, excerpt, author }) => (
            <article key={id} className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <header className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 hover:text-blue-900 transition-colors">
                  <Link href={`/blog/${id}`}>
                    {title}
                  </Link>
                </h2>
                <div className="mt-2 flex flex-wrap items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CalendarDays className="mr-1.5 h-4 w-4 text-gray-400" />
                    <time dateTime={date}>{new Date(date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                  {author && (
                    <div className="flex items-center">
                      <Edit3 className="mr-1.5 h-4 w-4 text-gray-400" />
                      <span>Door: {author}</span>
                    </div>
                  )}
                </div>
              </header>
              {excerpt && (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {excerpt}
                </p>
              )}
              <Link href={`/blog/${id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group">
                Lees volledig artikel
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> {/* Nu correct gedefinieerd */}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}