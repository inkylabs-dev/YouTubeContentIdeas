// Import individual category modules
import { diyCategory } from "./categories/diy";
import { gamingCategory } from "./categories/gaming";
import { foodCategory } from "./categories/food";
import { lifestyleCategory } from "./categories/lifestyle";
import { techCategory } from "./categories/tech";
import { challengeCategory } from "./categories/challenge";
import { entertainmentCategory } from "./categories/entertainment";
import { healthCategory } from "./categories/health";
import { fitnessCategory } from "./categories/fitness";
import { educationCategory } from "./categories/education";
import { reviewCategory } from "./categories/review";
import { artCategory } from "./categories/art";
import { musicCategory } from "./categories/music";
import { scienceCategory } from "./categories/science";
import { mediaCategory } from "./categories/media";
import { filmMakingCategory } from "./categories/filmmaking";
import { adventureCategory } from "./categories/adventure";
import { beautyCategory } from "./categories/beauty";
import { craftsCategory } from "./categories/crafts";
import { familyCategory } from "./categories/family";
import { fashionCategory } from "./categories/fashion";
import { petsCategory } from "./categories/pets";
import { photographyCategory } from "./categories/photography";
import { reactionCategory } from "./categories/reaction";
import { technologyCategory } from "./categories/technology";
import { wellnessCategory } from "./categories/wellness";
// New category imports
import { animalCategory } from "./categories/animal";
import { automotiveCategory } from "./categories/automotive";
import { behindTheScenesCategory } from "./categories/behind-the-scenes";
import { bloopersCategory } from "./categories/bloopers";
import { bookReviewCategory } from "./categories/book-review";
import { businessCategory } from "./categories/business";
import { comedyCategory } from "./categories/comedy";
import { cookingCategory } from "./categories/cooking";
import { dayInTheLifeCategory } from "./categories/day-in-the-life";
import { explainerCategory } from "./categories/explainer";
import { financeCategory } from "./categories/finance";
import { historyCategory } from "./categories/history";
import { homeCategory } from "./categories/home";
import { newsCategory } from "./categories/news";
import { productReviewsCategory } from "./categories/product-reviews";
import { psychologyCategory } from "./categories/psychology";
import { sportsCategory } from "./categories/sports";
import { travelCategory } from "./categories/travel";
import { tutorialCategory } from "./categories/tutorial";
import { unboxingCategory } from "./categories/unboxing";
import { videoGameCategory } from "./categories/video-game";
import { vlogCategory } from "./categories/vlog";

import type { Category } from "../types/category";

// Combine all categories from individual files
export const categories: Category[] = [
  diyCategory,
  gamingCategory,
  foodCategory,
  lifestyleCategory,
  techCategory,
  challengeCategory,
  entertainmentCategory,
  healthCategory,
  fitnessCategory,
  educationCategory,
  reviewCategory,
  artCategory,
  musicCategory,
  scienceCategory,
  mediaCategory,
  filmMakingCategory,
  adventureCategory,
  beautyCategory,
  craftsCategory,
  familyCategory,
  fashionCategory,
  petsCategory,
  photographyCategory,
  reactionCategory,
  technologyCategory,
  wellnessCategory,
  // New categories
  animalCategory,
  automotiveCategory,
  behindTheScenesCategory,
  bloopersCategory,
  bookReviewCategory,
  businessCategory,
  comedyCategory,
  cookingCategory,
  dayInTheLifeCategory,
  explainerCategory,
  financeCategory,
  historyCategory,
  homeCategory,
  newsCategory,
  productReviewsCategory,
  psychologyCategory,
  sportsCategory,
  travelCategory,
  tutorialCategory,
  unboxingCategory,
  videoGameCategory,
  vlogCategory
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getCategoriesForContentIdeas = (): string[] => {
  return categories.map(category => category.name);
};

export default categories;
