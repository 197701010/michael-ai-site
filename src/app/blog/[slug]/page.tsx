// src/app/blog/[slug]/page.tsx
import { getPostData, getSortedPostsData, PostData } from '@/lib/posts'; // Pas pad aan indien nodig
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Edit3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // Voor het renderen van de content
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation'; // Zorg dat notFound geïmporteerd is als je het gebruikt in de component

type Props = {
  params: { slug: string };
  // Als je searchParams niet gebruikt in deze pagina component of generateMetadata, kun je het hier weglaten.
  // searchParams?: { [key: string]: string | string[] | undefined };
};

// Functie om metadata te genereren voor elke post
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Aanname: getPostData retourneert null of gooit een error als post niet gevonden is,
  // of je handelt het af voordat je bij de metadata komt.
  // Voor robuustheid, check of postData bestaat.
  const postData = await getPostData(params.slug);

  if (!postData) {
    // Als de post niet bestaat, retourneer generieke metadata of een notFound titel
    return {
      title: "Blogpost Niet Gevonden",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const previousImages = (await parent).openGraph?.images || [];
  const ogImages = [];

  // Controleer of postData.ogImage bestaat en een string is
  if (postData.ogImage && typeof postData.ogImage === 'string') {
    ogImages.push({
      url: postData.ogImage.startsWith('http') ? postData.ogImage : `${siteUrl}${postData.ogImage.startsWith('/') ? '' : '/'}${postData.ogImage}`,
      width: 1200, // Standaard breedte voor OG afbeeldingen
      height: 630, // Standaard hoogte voor OG afbeeldingen
      alt: postData.title,
    });
  }

  return {
    title: `${postData.title} - Michael Salmagne Blog`,
    description: postData.excerpt || 'Een blogpost door Michael Salmagne.',
    authors: [{ name: postData.author || 'Michael Salmagne' }], // Voeg auteur toe
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      url: `${siteUrl}/blog/${params.slug}`, // URL van de specifieke blogpost
      type: 'article', // Type content
      publishedTime: postData.date ? new Date(postData.date).toISOString() : undefined, // Publicatiedatum
      authors: [postData.author || 'Michael Salmagne'], // Auteur(s) voor Open Graph
      images: ogImages.length > 0 ? ogImages : previousImages, // GEACTIVEERDE REGEL
    },
    twitter: { // Voeg Twitter card metadata toe voor betere weergave op X
        card: "summary_large_image",
        title: postData.title,
        description: postData.excerpt,
        images: ogImages.length > 0 ? ogImages.map(img => img.url) : previousImages.map(img => typeof img === 'string' ? img : (img as { url: string })?.url).filter(imgUrl => !!imgUrl),
    }
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
    // In plaats van een div, gebruik notFound() voor een correcte 404-pagina
    notFound();
  }

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl"> {/* Smaller max-width voor leesbaarheid blogpost */}
        <article className="prose prose-slate lg:prose-lg max-w-none"> {/* Tailwind Typography 'prose' klassen */}
          <header className="mb-8">
            <div className="mb-6"> {/* Div toegevoegd voor de Link voor betere structuur/styling */}
                <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Terug naar alle blogposts
                </Link>
            </div>
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