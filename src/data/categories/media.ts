import type { Category } from "../../types/category";

export const mediaCategory: Category = {
  id: "media",
  name: "Media",
  description: "Media production and content creation",
  long_description: "Explore media production techniques and content creation processes.",
  page_content: `# Media Production Content Creation

Media content focuses on the technical and creative aspects of content production, including video editing, audio production, and multimedia storytelling.

## Media Production Skills

**Content Creation Techniques**: Teaching viewers how to create professional-quality content using accessible tools and techniques.

**Production Workflows**: Sharing efficient workflows for content planning, production, and post-production processes.

**Creative Storytelling**: Exploring narrative techniques and creative approaches to multimedia content creation.

Media content offers opportunities to educate aspiring creators while sharing technical expertise in content production.`,
  slug: "media",
  ideas: [
    { id: 74, title: "Creating a Documentary", description: "Make a short documentary about your community or hobby", tags: ["documentary", "filmmaking", "storytelling"] },
    { id: 86, title: "Creating a Podcast Episode", description: "Record and produce a podcast episode on a topic you love", tags: ["podcast", "audio", "content"] }
  ]
};
