export interface ContentIdea {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface Niche {
  id: string;
  name: string;
  description: string;
  long_description: string;
  page_content: string;
  slug: string;
  ideas: ContentIdea[];
}
