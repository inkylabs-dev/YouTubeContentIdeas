// Import individual Niche modules
import { diyNiche } from "./niches/diy";
import { gamingNiche } from "./niches/gaming";
import { foodNiche } from "./niches/food";
import { lifestyleNiche } from "./niches/lifestyle";
import { techNiche } from "./niches/tech";
import { challengeNiche } from "./niches/challenge";
import { entertainmentNiche } from "./niches/entertainment";
import { healthNiche } from "./niches/health";
import { fitnessNiche } from "./niches/fitness";
import { educationNiche } from "./niches/education";
import { reviewNiche } from "./niches/review";
import { artNiche } from "./niches/art";
import { musicNiche } from "./niches/music";
import { scienceNiche } from "./niches/science";
import { mediaNiche } from "./niches/media";
import { filmMakingNiche } from "./niches/filmmaking";
import { adventureNiche } from "./niches/adventure";
import { beautyNiche } from "./niches/beauty";
import { craftsNiche } from "./niches/crafts";
import { familyNiche } from "./niches/family";
import { fashionNiche } from "./niches/fashion";
import { petsNiche } from "./niches/pets";
import { photographyNiche } from "./niches/photography";
import { reactionNiche } from "./niches/reaction";
import { technologyNiche } from "./niches/technology";
import { wellnessNiche } from "./niches/wellness";
// New Niche imports
import { animalNiche } from "./niches/animal";
import { automotiveNiche } from "./niches/automotive";
import { behindTheScenesNiche } from "./niches/behind-the-scenes";
import { bloopersNiche } from "./niches/bloopers";
import { bookReviewNiche } from "./niches/book-review";
import { businessNiche } from "./niches/business";
import { comedyNiche } from "./niches/comedy";
import { cookingNiche } from "./niches/cooking";
import { dayInTheLifeNiche } from "./niches/day-in-the-life";
import { explainerNiche } from "./niches/explainer";
import { financeNiche } from "./niches/finance";
import { historyNiche } from "./niches/history";
import { homeNiche } from "./niches/home";
import { newsNiche } from "./niches/news";
import { productReviewsNiche } from "./niches/product-reviews";
import { psychologyNiche } from "./niches/psychology";
import { sportsNiche } from "./niches/sports";
import { travelNiche } from "./niches/travel";
import { tutorialNiche } from "./niches/tutorial";
import { unboxingNiche } from "./niches/unboxing";
import { videoGameNiche } from "./niches/video-game";
import { vlogNiche } from "./niches/vlog";

import type { Niche } from "../types/niche";

// Combine all niches from individual files
export const niches: Niche[] = [
  diyNiche,
  gamingNiche,
  foodNiche,
  lifestyleNiche,
  techNiche,
  challengeNiche,
  entertainmentNiche,
  healthNiche,
  fitnessNiche,
  educationNiche,
  reviewNiche,
  artNiche,
  musicNiche,
  scienceNiche,
  mediaNiche,
  filmMakingNiche,
  adventureNiche,
  beautyNiche,
  craftsNiche,
  familyNiche,
  fashionNiche,
  petsNiche,
  photographyNiche,
  reactionNiche,
  technologyNiche,
  wellnessNiche,
  animalNiche,
  automotiveNiche,
  behindTheScenesNiche,
  bloopersNiche,
  bookReviewNiche,
  businessNiche,
  comedyNiche,
  cookingNiche,
  dayInTheLifeNiche,
  explainerNiche,
  financeNiche,
  historyNiche,
  homeNiche,
  newsNiche,
  productReviewsNiche,
  psychologyNiche,
  sportsNiche,
  travelNiche,
  tutorialNiche,
  unboxingNiche,
  videoGameNiche,
  vlogNiche
];

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
