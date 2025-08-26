
import type { Niche, ContentIdea } from "../types/niche";
import nichesData from "./niches.json";

// Get all idea files from JSON
const jsonIdeaFiles = import.meta.glob('./ideas/*.json', { eager: true, import: 'default' });

// Load all ideas from JSON files
const allJsonIdeas: (ContentIdea & { slug: string, nicheNames: string[] })[] = [];
for (const [path, ideas] of Object.entries(jsonIdeaFiles)) {
  const slug = path.split('/').pop()?.replace('.json', '') || '';
  if (Array.isArray(ideas)) {
    for (const idea of ideas) {
      allJsonIdeas.push({
        id: allJsonIdeas.length + 1,
        title: idea.title,
        description: idea.description,
        tags: idea.tags || [],
        slug,
        nicheNames: idea.niches || []
      });
    }
  }
}

// Existing MDX logic (if you want to keep it, otherwise remove)
// const ideaFiles = import.meta.glob('../ideas/*.mdx', { eager: true });
// const allMdxIdeas: (ContentIdea & { slug: string, nicheNames: string[] })[] = [];
// for (const [path, ideaModule] of Object.entries(ideaFiles)) {
//   const slug = path.split('/').pop()?.replace('.mdx', '') || '';
//   const frontmatter = (ideaModule as any).frontmatter;
//   if (frontmatter) {
//     const nicheNames = frontmatter.niche ? frontmatter.niche.split(',').map((n: string) => n.trim()) : [];
//     allMdxIdeas.push({
//       id: allMdxIdeas.length + 1,
//       title: frontmatter.title,
//       description: frontmatter.description,
//       tags: frontmatter.tags || [],
//       slug,
//       nicheNames
//     });
//   }
// }

// Merge all ideas (JSON + MDX if needed)
const allIdeas: (ContentIdea & { slug: string, nicheNames: string[] })[] = [
  ...allJsonIdeas
  // , ...allMdxIdeas // Uncomment if you want to include MDX ideas
];

// Load all niches from JSON
export const niches: Niche[] = nichesData.map(nicheData => {
  // Get ideas that belong to this niche (by matching niche slug or name)
  const nicheIdeas: ContentIdea[] = allIdeas
    .filter(idea => 
      idea.nicheNames.includes(nicheData.slug) || 
      idea.nicheNames.includes(nicheData.name.toLowerCase())
    )
    .map(idea => ({
      id: idea.id,
      title: idea.title,
      description: idea.description,
      tags: idea.tags
    }));

  return {
    id: nicheData.id,
    name: nicheData.name,
    description: nicheData.description,
    long_description: nicheData.long_description,
    page_content: nicheData.long_description, // Use long_description as page_content
    slug: nicheData.slug,
    parent: nicheData.parent,
    ideas: nicheIdeas
  };
});

// Export all ideas for use in components
export const contentIdeas = allIdeas.map(idea => ({
  id: idea.id,
  title: idea.title,
  description: idea.description,
  tags: idea.tags,
  niche: idea.nicheNames[0] || '', // Use first niche as primary
  uniqueKey: idea.slug
}));

export const getNicheBySlug = (slug: string): Niche | undefined => {
  return niches.find(niche => niche.slug === slug);
};

export const getNichesForContentIdeas = (): string[] => {
  return niches.map(niche => niche.name);
};

// Hierarchy utility functions
export const getTopLevelNiches = (): Niche[] => {
  return niches.filter(niche => !niche.parent);
};

export const getChildNiches = (parentId: string): Niche[] => {
  return niches.filter(niche => niche.parent === parentId);
};

export const getParentNiche = (childId: string): Niche | undefined => {
  const child = niches.find(niche => niche.id === childId);
  if (!child?.parent) return undefined;
  return niches.find(niche => niche.id === child.parent);
};

export const getNicheHierarchy = (): Map<string, Niche[]> => {
  const hierarchy = new Map<string, Niche[]>();
  
  // Group by parent
  niches.forEach(niche => {
    const parentId = niche.parent || 'root';
    if (!hierarchy.has(parentId)) {
      hierarchy.set(parentId, []);
    }
    hierarchy.get(parentId)!.push(niche);
  });
  
  return hierarchy;
};

// Legacy exports for backward compatibility
export const categories = niches;
export const getCategoryBySlug = getNicheBySlug;
export const getCategoriesForContentIdeas = getNichesForContentIdeas;

export default niches;