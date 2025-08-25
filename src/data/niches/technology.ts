import type { Niche } from "../../types/niche";

export const technologyNiche: Niche = {
  id: "technology",
  name: "Technology",
  description: "Technology content beyond basic tech reviews",
  long_description: "Explore advanced technology topics and create innovative tech content.",
  page_content: `# Advanced Technology Content Creation

Technology content encompasses more than just product reviews - it includes programming, innovation, digital creativity, and exploring how technology shapes our world.

## Beyond Basic Tech Reviews

**Development and Programming**: Document coding projects, app development, and technology creation processes that show viewers how technology is made.

**Innovation Exploration**: Investigate emerging technologies, futuristic concepts, and experimental tech that might shape our future.

**Digital Creativity**: Use technology as a creative medium for art, music, design, and other forms of expression.

Technology content offers opportunities to push boundaries while educating others about the creative and innovative possibilities of modern technology.`,
  slug: "technology",
  ideas: [
    { id: 44, title: "Testing Productivity Apps", description: "Try different productivity apps and rate their effectiveness", tags: ["productivity", "apps", "tech"] },
    { id: 63, title: "Making My Own Video Game", description: "Create a simple video game from scratch", tags: ["gaming", "programming", "creative"] },
    { id: 82, title: "Creating Wearable Technology", description: "Build simple wearable tech devices or accessories", tags: ["wearable", "technology", "diy"] },
    { id: 88, title: "Building a Robot", description: "Construct a simple robot using basic electronics", tags: ["robotics", "electronics", "stem"] },
    { id: 98, title: "Creating a Virtual Reality Experience", description: "Design a simple VR experience or 360-degree video", tags: ["vr", "immersive", "technology"] }
  ]
};
