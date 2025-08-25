import type { Category } from "../../types/category";

export const reviewCategory: Category = {
  id: "reviews",
  name: "Reviews",
  description: "General review content across various topics",
  long_description: "Provide honest opinions and evaluations across a wide range of products and services.",
  page_content: `# Review YouTube Content: Comprehensive Evaluation Across Categories

Review content on YouTube provides honest evaluations and opinions across diverse categories including products, services, experiences, and media. These videos help viewers make informed decisions in various aspects of their lives.

Review videos are valuable because they provide independent perspectives that help viewers navigate choices in complex markets. They serve as trusted guides for decision-making across multiple life areas.

**Multi-Category Expertise**: Develop expertise across various review categories while maintaining consistency in evaluation criteria and presentation style.

**Credible Assessment**: Base reviews on actual experience and testing rather than speculation. Establish clear criteria for evaluations that viewers can understand and trust.

**Value-Focused Analysis**: Emphasize value propositions and help viewers understand whether reviewed items meet their specific needs and budgets.

General review content offers opportunities to become a trusted advisor across multiple categories while helping viewers make better decisions in various aspects of their lives.`,
  slug: "reviews",
  ideas: [
    { id: 10, title: "Reviewing Weird Amazon Products", description: "Buy and test the strangest products you can find on Amazon", tags: ["amazon", "weird", "review"] },
    { id: 16, title: "Trying Every Starbucks Drink", description: "Taste test every drink on the Starbucks menu", tags: ["starbucks", "drinks", "review"] },
    { id: 22, title: "Trying Every Local Food Truck", description: "Visit and review all the food trucks in your area", tags: ["local", "foodtruck", "review"] },
    { id: 39, title: "Trying Every Coffee Shop", description: "Visit and review every coffee shop in your area", tags: ["coffee", "local", "review"] },
    { id: 52, title: "Trying Every Local Restaurant", description: "Visit and review every restaurant in your neighborhood", tags: ["local", "restaurant", "review"] },
    { id: 67, title: "Testing Budget vs Expensive", description: "Compare cheap and expensive versions of the same product", tags: ["budget", "expensive", "comparison"] }
  ]
};
