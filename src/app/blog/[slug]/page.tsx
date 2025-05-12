// src/app/blog/[slug]/page.tsx
import { getPostData, getSortedPostsData, PostData } from '@/lib/posts'; // Pas pad aan indien nodig
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Edit3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // Voor het renderen van de content
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

// Functie om metadata te genereren voor elke post
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${postData.title} - Michael Salmagne Blog`,
    description: postData.excerpt || 'Een blogpost door Michael Salmagne.',
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      // Je kunt hier een specifieke afbeelding per blogpost toevoegen als je die hebt in de frontmatter
      // images: postData.ogImage ? [postData.ogImage, ...previousImages] : previousImages,
    },
  };
}

// Functie om alle mogelijke slugs te genereren voor statische generatie
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  if (!postData) {
    return <div>Blogpost niet gevonden.</div>;
  }

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl"> {/* Smaller max-width voor leesbaarheid blogpost */}
        <article className="prose prose-slate lg:prose-lg max-w-none"> {/* Tailwind Typography 'prose' klassen */}
          <header className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Terug naar alle blogposts
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-800 mb-3">
              {postData.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarDays className="mr-1.5 h-4 w-4" />
                <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
              {postData.author && (
                <div className="flex items-center">
                  <Edit3 className="mr-1.5 h-4 w-4" />
                  <span>{postData.author}</span>
                </div>
              )}
            </div>
          </header>

          {/* Render de Markdown content */}
          {postData.contentMarkdown && (
            <ReactMarkdown>{postData.contentMarkdown}</ReactMarkdown>
          )}

        </article>
        <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Bekijk meer blogposts
            </Link>
        </div>
      </div>
    </div>
  );
}