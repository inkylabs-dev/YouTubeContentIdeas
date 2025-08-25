import type { Category } from "../../types/category";

export const artCategory: Category = {
  id: "art",
  name: "Art",
  description: "Creative arts, drawing, painting and artistic content",
  long_description: "Inspire creativity with artistic tutorials, techniques, and creative expression content that teaches skills while showcasing artistic talent.",
  page_content: `# Creating Inspiring Art Content

Art content on YouTube promotes creative expression and artistic skill development by sharing techniques, inspiration, and creative processes that educate and motivate aspiring artists.

## Why Art Content Inspires

**Skill Development**: Tutorials and technique demonstrations help viewers improve their artistic abilities and learn new creative skills.

**Creative Inspiration**: Sharing artistic processes and finished works inspires others to explore their own creativity and artistic expression.

**Community Building**: Art content creates communities of creators who share techniques, support each other, and celebrate creative achievement.

## Content Formats That Teach

**Tutorial Series**: Step-by-step instruction in specific techniques, mediums, or artistic styles that help viewers develop technical skills.

**Process Documentation**: Time-lapse or real-time creation videos that show how artworks develop from concept to completion.

**Art Challenges**: Creative exercises and prompts that encourage viewers to practice and experiment with new artistic approaches.

Art content offers opportunities to share creative passion while building supportive communities that celebrate artistic expression and help others develop their creative potential.`,
  slug: "art",
  ideas: [
    { id: 24, title: "Recreating Famous Art", description: "Attempt to recreate famous paintings or artworks", tags: ["art", "recreation", "creative"] },
    { id: 40, title: "Making Art From Trash", description: "Create beautiful art pieces using only recycled materials", tags: ["art", "recycling", "creative"] },
    { id: 53, title: "Making Art With Food", description: "Create artistic masterpieces using edible materials", tags: ["food", "art", "creative"] },
    { id: 66, title: "Creating Stop Motion Animation", description: "Make a short stop motion video using everyday objects", tags: ["animation", "art", "filmmaking"] },
    { id: 76, title: "Making Art With Technology", description: "Create digital art using apps, VR, or coding", tags: ["digital", "art", "technology"] },
    { id: 92, title: "Making My Own Comic Book", description: "Write and illustrate an original comic book story", tags: ["comics", "illustration", "storytelling"] },
    { id: 96, title: "Making Art From Shadows", description: "Create artistic compositions using shadows and light", tags: ["shadows", "light", "photography"] }
  ]
};
