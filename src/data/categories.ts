export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "diy", name: "DIY", description: "Do-it-yourself projects and creative building ideas", slug: "diy" },
  { id: "news", name: "News", description: "Current events and news commentary content", slug: "news" },
  { id: "home", name: "Home", description: "Home improvement and interior design ideas", slug: "home" },
  { id: "health", name: "Health", description: "Health, wellness and medical information content", slug: "health" },
  { id: "automotive", name: "Automotive", description: "Car reviews, maintenance and automotive content", slug: "automotive" },
  { id: "science", name: "Science", description: "Scientific experiments and educational content", slug: "science" },
  { id: "animal", name: "Animal", description: "Pet care, wildlife and animal-related content", slug: "animal" },
  { id: "family", name: "Family", description: "Family-friendly activities and parenting content", slug: "family" },
  { id: "travel", name: "Travel", description: "Travel guides, vlogs and destination content", slug: "travel" },
  { id: "business", name: "Business", description: "Entrepreneurship and business strategy content", slug: "business" },
  { id: "gaming", name: "Gaming", description: "Video game reviews, gameplay and gaming culture", slug: "gaming" },
  { id: "fitness", name: "Fitness", description: "Workout routines and fitness motivation content", slug: "fitness" },
  { id: "food", name: "Food", description: "Cooking tutorials, recipes and food reviews", slug: "food" },
  { id: "music", name: "Music", description: "Music covers, tutorials and industry content", slug: "music" },
  { id: "tech", name: "Tech", description: "Technology reviews and tutorials", slug: "tech" },
  { id: "beauty", name: "Beauty", description: "Makeup tutorials and beauty product reviews", slug: "beauty" },
  { id: "education", name: "Education", description: "Educational tutorials and learning content", slug: "education" },
  { id: "lifestyle", name: "Lifestyle", description: "Daily life, personal development content", slug: "lifestyle" },
  { id: "entertainment", name: "Entertainment", description: "Comedy, reactions and general entertainment", slug: "entertainment" },
  { id: "sports", name: "Sports", description: "Sports analysis, highlights and athletic content", slug: "sports" },
  { id: "unboxing", name: "Unboxing", description: "Product unboxing and first impressions content", slug: "unboxing" },
  { id: "behind-the-scenes", name: "Behind the Scenes", description: "Behind-the-scenes content and production insights", slug: "behind-the-scenes" },
  { id: "day-in-the-life", name: "Day in the Life", description: "Daily routine and lifestyle documentation", slug: "day-in-the-life" },
  { id: "tutorial", name: "Tutorial", description: "Step-by-step instructional and how-to content", slug: "tutorial" },
  { id: "reaction", name: "Reaction", description: "Reaction videos to trending content and media", slug: "reaction" },
  { id: "video-game", name: "Video Game", description: "Gaming content, walkthroughs and gameplay", slug: "video-game" },
  { id: "product-reviews", name: "Product Reviews", description: "In-depth product testing and review content", slug: "product-reviews" },
  { id: "reviews", name: "Reviews", description: "General review content across various topics", slug: "reviews" },
  { id: "vlog", name: "Vlog", description: "Video blog content and personal storytelling", slug: "vlog" },
  { id: "book-review", name: "Book Review", description: "Book reviews and literary discussion content", slug: "book-review" },
  { id: "explainer", name: "Explainer", description: "Educational content explaining complex topics", slug: "explainer" },
  { id: "cooking", name: "Cooking", description: "Cooking tutorials, recipes and culinary content", slug: "cooking" },
  { id: "highlight-reel", name: "Highlight Reel", description: "Best moments and compilation content", slug: "highlight-reel" },
  { id: "interviews", name: "Interviews", description: "Interview content with interesting personalities", slug: "interviews" },
  { id: "parody", name: "Parody", description: "Parody and satirical content", slug: "parody" },
  { id: "pranks", name: "Pranks", description: "Prank videos and comedic surprises", slug: "pranks" },
  { id: "webinar", name: "Webinar", description: "Educational webinar and seminar content", slug: "webinar" },
  { id: "bloopers", name: "Bloopers", description: "Funny mistakes and behind-the-scenes bloopers", slug: "bloopers" },
  { id: "comedy-skits", name: "Comedy Skits", description: "Original comedy sketches and skits", slug: "comedy-skits" },
  { id: "company-culture", name: "Company Culture", description: "Workplace culture and team content", slug: "company-culture" },
  { id: "debunking-myths", name: "Debunking Myths", description: "Fact-checking and myth-busting content", slug: "debunking-myths" },
  { id: "challenge", name: "Challenge", description: "Challenge videos and competitive content", slug: "challenge" },
  { id: "singing", name: "Singing", description: "Vocal performances and singing content", slug: "singing" },
  { id: "faq", name: "FAQ", description: "Frequently asked questions and Q&A content", slug: "faq" },
  { id: "kids", name: "Kids", description: "Child-friendly content and educational videos for children", slug: "kids" },
  { id: "pets", name: "Pets", description: "Pet care, training and animal companion content", slug: "pets" },
  { id: "art", name: "Art", description: "Creative arts, drawing, painting and artistic content", slug: "art" },
  { id: "photography", name: "Photography", description: "Photography tutorials, tips and visual storytelling", slug: "photography" },
  { id: "finance", name: "Finance", description: "Personal finance, investing and money management content", slug: "finance" },
  { id: "history", name: "History", description: "Historical events, documentaries and educational history content", slug: "history" },
  { id: "nature", name: "Nature", description: "Wildlife, outdoors and environmental content", slug: "nature" },
  { id: "crafts", name: "Crafts", description: "Handmade crafts, creative projects and artistic tutorials", slug: "crafts" },
  { id: "motivation", name: "Motivation", description: "Inspirational content and personal development", slug: "motivation" },
  { id: "comedy", name: "Comedy", description: "Stand-up comedy, funny skits and humorous content", slug: "comedy" },
  { id: "spiritual", name: "Spiritual", description: "Spiritual growth, meditation and mindfulness content", slug: "spiritual" },
  { id: "adventure", name: "Adventure", description: "Outdoor adventures, exploration and extreme activities", slug: "adventure" },
  { id: "fashion", name: "Fashion", description: "Style, clothing and fashion trend content", slug: "fashion" },
  { id: "relationships", name: "Relationships", description: "Dating advice, relationship tips and social content", slug: "relationships" },
  { id: "productivity", name: "Productivity", description: "Work efficiency, time management and productivity tips", slug: "productivity" },
  { id: "debate", name: "Debate", description: "Discussion topics, opinions and debate content", slug: "debate" },
  { id: "mystery", name: "Mystery", description: "Unsolved mysteries, true crime and investigative content", slug: "mystery" },
  { id: "culture", name: "Culture", description: "Cultural exploration, traditions and social topics", slug: "culture" },
  { id: "language", name: "Language", description: "Language learning, linguistics and communication content", slug: "language" },
  { id: "psychology", name: "Psychology", description: "Mental health, psychology and behavioral content", slug: "psychology" }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getCategoriesForContentIdeas = (): string[] => {
  return [...new Set(categories.map(cat => cat.name))];
};