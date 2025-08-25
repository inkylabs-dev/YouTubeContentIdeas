import type { Niche } from "../../types/niche";

export const educationNiche: Niche = {
  id: "education",
  name: "Education",
  description: "Educational tutorials and learning content",
  long_description: "Make learning engaging with educational tutorials and knowledge-sharing content.",
  page_content: `# Educational YouTube Content: Making Learning Accessible

Educational content on YouTube democratizes learning by making knowledge accessible to anyone with an internet connection. From academic subjects to practical skills, educational videos serve learners of all ages and backgrounds.

Educational videos succeed because they provide structured learning opportunities outside traditional classroom settings. They serve students, professionals seeking skill development, and lifelong learners pursuing knowledge for personal enrichment.

**Tutorial-Based Learning**
Create step-by-step instructional content that teaches specific skills or concepts. Break complex topics into digestible lessons that build upon each other progressively.

**Explainer Videos**
Simplify complex subjects using visual aids, analogies, and real-world examples. Focus on making abstract concepts concrete and understandable for general audiences.

**Interactive Learning**
Engage viewers through questions, exercises, and practical applications. Interactive elements help maintain attention and improve knowledge retention.

Educational content offers opportunities to make lasting impacts on viewers' knowledge and skills while building communities around shared learning goals.`,
  slug: "education",
  ideas: [
    { id: 8, title: "Learning a New Skill in 30 Days", description: "Document your journey learning something completely new", tags: ["learning", "skill", "challenge"] },
    { id: 48, title: "Speed Learning Languages", description: "See how much of a new language you can learn in 24 hours", tags: ["language", "learning", "challenge"] },
    { id: 54, title: "Testing Study Methods", description: "Compare different study techniques for effectiveness", tags: ["studying", "education", "methods"] },
    { id: 71, title: "Testing Memory Techniques", description: "Try different methods to improve memory and recall", tags: ["memory", "brain", "learning"] },
    { id: 95, title: "Testing Brain Training Games", description: "Try different apps and games that claim to improve brain function", tags: ["brain", "games", "cognitive"] }
  ]
};
