import type { Niche, ContentIdea } from "../types/niche";

// Get all niche and idea files
const nicheFiles = import.meta.glob('../niches/*.mdx', { eager: true });
const ideaFiles = import.meta.glob('../ideas/*.mdx', { eager: true });

// Create a map of idea slugs to idea data
const ideasMap = new Map<string, ContentIdea>();

// Load all ideas
for (const [path, ideaModule] of Object.entries(ideaFiles)) {
  const slug = path.split('/').pop()?.replace('.mdx', '') || '';
  const frontmatter = (ideaModule as any).frontmatter;
  
  if (frontmatter) {
    ideasMap.set(slug, {
      id: ideasMap.size + 1, // Generate sequential IDs
      title: frontmatter.title,
      description: frontmatter.description,
      tags: frontmatter.tags || []
    });
  }
}

// Load all niches
export const niches: Niche[] = [];

for (const [path, nicheModule] of Object.entries(nicheFiles)) {
  const frontmatter = (nicheModule as any).frontmatter;
  const content = (nicheModule as any).Content;
  
  if (frontmatter) {
    const nicheIdeas: ContentIdea[] = [];
    
    // Get ideas by slug references
    if (Array.isArray(frontmatter.ideas)) {
      for (const ideaSlug of frontmatter.ideas) {
        const idea = ideasMap.get(ideaSlug);
        if (idea) {
          nicheIdeas.push(idea);
        }
      }
    }
    
    // Get content as string - we'll need to handle this differently
    let pageContent = '';
    if (content) {
      // For now, we'll use the long_description as page_content
      // In a real implementation, you'd render the MDX content to string
      pageContent = frontmatter.long_description || '';
    }
    
    niches.push({
      id: frontmatter.id,
      name: frontmatter.name,
      description: frontmatter.description,
      long_description: frontmatter.long_description,
      page_content: pageContent,
      slug: frontmatter.slug,
      ideas: nicheIdeas
    });
  }
}

export const getNicheBySlug = (slug: string): Niche | undefined => {
  return niches.find(niche => niche.slug === slug);
};

export const getNichesForContentIdeas = (): string[] => {
  return niches.map(niche => niche.name);
};

// Legacy exports for backward compatibility
export const categories = niches;
export const getCategoryBySlug = getNicheBySlug;
export const getCategoriesForContentIdeas = getNichesForContentIdeas;

export default niches;