/**
 * Niches JSON API Endpoint
 * 
 * Provides access to all niches data as JSON via GET request to /data/niches/
 * 
 * Usage:
 * 
 * // Client-side fetch
 * const response = await fetch('/data/niches/');
 * const niches = await response.json();
 * 
 * // With error handling
 * try {
 *   const response = await fetch('/data/niches/');
 *   if (!response.ok) {
 *     throw new Error('Failed to fetch niches');
 *   }
 *   const niches: Niche[] = await response.json();
 *   console.log(niches);
 * } catch (error) {
 *   console.error('Error fetching niches:', error);
 * }
 * 
 * // In React component
 * const [niches, setNiches] = useState<Niche[]>([]);
 * 
 * useEffect(() => {
 *   fetch('/data/niches/')
 *     .then(res => res.json())
 *     .then(setNiches)
 *     .catch(console.error);
 * }, []);
 * 
 * Response format: Array of Niche objects with structure:
 * {
 *   id: string,
 *   name: string,
 *   description: string,
 *   long_description: string,
 *   page_content: string,
 *   slug: string,
 *   parent?: string,
 *   ideas: ContentIdea[]
 * }
 */

import type { APIRoute } from 'astro';
import { niches } from '../../data/niches';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(niches), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};