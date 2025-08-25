import type { Category } from "../../types/category";

export const filmMakingCategory: Category = {
  id: "filmmaking",
  name: "Filmmaking",
  description: "Video production and filmmaking content",
  long_description: "Share filmmaking techniques and video production knowledge for aspiring creators.",
  page_content: `# Filmmaking and Video Production Content

Filmmaking content teaches video production techniques, storytelling methods, and creative approaches to visual media creation.

## Filmmaking Education

**Production Techniques**: Teaching camera work, lighting, sound recording, and other technical aspects of video production.

**Storytelling Methods**: Exploring narrative structure, character development, and visual storytelling techniques.

**Post-Production Skills**: Sharing editing techniques, color grading, and finishing processes for professional-quality videos.

Filmmaking content offers opportunities to educate aspiring filmmakers while sharing technical and creative expertise in video production.`,
  slug: "filmmaking",
  ideas: [
    { id: 66, title: "Creating Stop Motion Animation", description: "Make a short stop motion video using everyday objects", tags: ["animation", "art", "filmmaking"] },
    { id: 74, title: "Creating a Documentary", description: "Make a short documentary about your community or hobby", tags: ["documentary", "filmmaking", "storytelling"] }
  ]
};
