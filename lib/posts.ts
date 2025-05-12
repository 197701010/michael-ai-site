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
  contentHtml?: string; // Voor server-side rendering naar HTML (optioneel als je react-markdown gebruikt)
  contentMarkdown?: string; // De Markdown content zelf
  [key: string]: any; // To allow other frontmatter properties
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" or ".mdx" from file name to get id
    const id = fileName.replace(/\.(md|mdx)$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id and content
    return {
      id,
      title: matterResult.data.title || 'Geen titel',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || 'Michael Salmagne',
      contentMarkdown: matterResult.content,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`); // Gaat nu uit van .md, pas aan als je ook .mdx gebruikt
  let fileContents = '';
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    // Probeer .mdx als .md niet gevonden is
    const mdxFullPath = path.join(postsDirectory, `${id}.mdx`);
    try {
      fileContents = fs.readFileSync(mdxFullPath, 'utf8');
    } catch (mdxErr) {
      console.error(`Error reading file for post ${id}:`, mdxErr);
      // Gooi een fout of retourneer een fallback
      throw new Error(`Post met id ${id} niet gevonden.`);
    }
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // De content is matterResult.content (Markdown)
  // We voegen dit direct toe aan de geretourneerde data

  return {
    id,
    title: matterResult.data.title || 'Geen titel',
    date: matterResult.data.date || new Date().toISOString().split('T')[0],
    excerpt: matterResult.data.excerpt || '',
    author: matterResult.data.author || 'Michael Salmagne',
    contentMarkdown: matterResult.content,
    ...matterResult.data,
  };
}