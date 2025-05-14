// src/app/blog/page.tsx
import { getSortedPostsData, PostData } from '@/lib/posts'; // Gebruik de juiste import
import Link from 'next/link';
import type { Metadata } from 'next';

// Metadata voor de blog overzichtspagina
export const metadata: Metadata = {
  title: 'Blog - Michael Salmagne',
  description: 'Bekijk de laatste blogposts van Michael Salmagne.',
};

// Dit is de component voor de /blog pagina
export default function BlogIndexPage() {
  // --- WIJZIGING HIER ---
  const allPostsData: PostData[] = getSortedPostsData(); // Expliciet type PostData[] toegevoegd
  // --- EINDE WIJZIGING ---

  return (
    <div className="bg-gray-100 py-12 md:py-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-800 mb-8 sm:mb-12 text-center">
          Mijn Blog
        </h1>

        {allPostsData && allPostsData.length > 0 ? (
          <div className="space-y-8">
            {allPostsData.map(({ id, date, title, excerpt }) => ( // Velden worden hier gedestructureerd
              <article key={id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">
                  <Link href={`/blog/${id}`} className="hover:underline">
                    {title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-500 mb-3">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                {excerpt && (
                   <p className="text-gray-700 mb-4">{excerpt}</p>
                )}
                <Link href={`/blog/${id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                  Lees meer &rarr;
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Geen blogposts gevonden.</p>
        )}
      </div>
    </div>
  );
}