/**
 * Ideas JSON API Endpoint
 *
 * Provides access to ideas data for a given slug as JSON via GET request to /data/ideas/[slug].json
 *
 * Usage:
 *
 * // Client-side fetch
 * const response = await fetch(`/data/ideas/ai.json`);
 * const ideas = await response.json();
 *
 * // With error handling
 * try {
 *   const response = await fetch(`/data/ideas/ai.json`);
 *   if (!response.ok) {
 *     throw new Error('Failed to fetch ideas');
 *   }
 *   const ideas = await response.json();
 *   console.log(ideas);
 * } catch (error) {
 *   console.error('Error fetching ideas:', error);
 * }
 *
 * // In React component
 * const [ideas, setIdeas] = useState([]);
 *
 * useEffect(() => {
 *   fetch(`/data/ideas/ai.json`)
 *     .then(res => res.json())
 *     .then(setIdeas)
 *     .catch(console.error);
 * }, []);
 *
 * Response format: Array of ContentIdea objects
 */


import type { APIRoute, GetStaticPaths } from 'astro';
import fs from 'fs/promises';
import path from 'path';
// Export getStaticPaths for dynamic route generation
export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.resolve('src/data/ideas');
  const files = await fs.readdir(dir);
  // Only .json files
  const slugs = files.filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, ''));
  return slugs.map(slug => ({ params: { slug } }));
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Missing slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  try {
    const filePath = path.resolve('src/data/ideas', `${slug}.json`);
    const file = await fs.readFile(filePath, 'utf-8');
    return new Response(file, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Idea not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
