// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  contentHtml?: string;
  contentMarkdown?: string;
  ogImage?: string; // Toegevoegd voor specifieke OG image per post
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // ESLint regel hierboven toegevoegd
}

export function getSortedPostsData(): PostData[] {
  let fileNames: string[] = [];
  try {
    // Controleer of de map bestaat voordat je probeert te lezen
    if (!fs.existsSync(postsDirectory)) {
      console.warn("Blog content directory not found at:", postsDirectory);
      return [];
    }
    fileNames = fs.readdirSync(postsDirectory);
  } catch (e) {
    console.warn("Error reading posts directory:", postsDirectory, e);
    return [];
  }

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      let fileContents = '';
      try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
      } catch (e) {
        console.error(`Could not read file: ${fullPath}`, e);
        return null; // Sla dit bestand over als het niet gelezen kan worden
      }
      
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || 'Geen titel',
        date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || 'Michael Salmagne',
        contentMarkdown: matterResult.content,
        ogImage: matterResult.data.ogImage || undefined, // Zorg dat ogImage wordt meegenomen
        ...matterResult.data,
      };
    })
    .filter(post => post !== null) as PostData[]; // Verwijder null waarden en type cast

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const mdxFullPath = path.join(postsDirectory, `${id}.mdx`);
  const mdFullPath = path.join(postsDirectory, `${id}.md`);
  let fileContents = '';
  let foundPath = '';

  if (fs.existsSync(mdxFullPath)) {
    fileContents = fs.readFileSync(mdxFullPath, 'utf8');
    foundPath = mdxFullPath;
  } else if (fs.existsSync(mdFullPath)) {
    fileContents = fs.readFileSync(mdFullPath, 'utf8');
    foundPath = mdFullPath;
  } else {
    console.error(`Error: Post file not found for id [${id}]. Checked for .mdx and .md in ${postsDirectory}`);
    throw new Error(`Post met id ${id} niet gevonden.`);
  }
  
  if (!fileContents && foundPath) {
    console.warn(`Warning: File ${foundPath} for post id [${id}] is empty.`);
  }

  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title || 'Geen titel',
    date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : new Date().toISOString(),
    excerpt: matterResult.data.excerpt || '',
    author: matterResult.data.author || 'Michael Salmagne',
    contentMarkdown: matterResult.content,
    ogImage: matterResult.data.ogImage || undefined, // Zorg dat ogImage wordt meegenomen
    ...matterResult.data,
  };
}