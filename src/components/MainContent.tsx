import { useState, useEffect } from 'react';
import Hero from './Hero';
import CategoriesGrid from './CategoriesGrid';
import ContentIdeaCard from './ContentIdeaCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface ContentIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  difficulty?: "Easy" | "Medium" | "Hard";
  estimatedViews?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

interface MainContentProps {
  contentIdeas: ContentIdea[];
  categories: Category[];
}

export default function MainContent({ contentIdeas, categories }: MainContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredIdeas, setFilteredIdeas] = useState(contentIdeas);

  useEffect(() => {
    const filtered = contentIdeas.filter(idea => {
      const matchesSearch = !searchQuery || 
        idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || idea.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredIdeas(filtered);
  }, [searchQuery, selectedCategory, contentIdeas]);

  const enhancedIdeas = filteredIdeas.map(idea => ({
    ...idea,
    difficulty: (idea.difficulty || ['Easy', 'Medium', 'Hard'][idea.id % 3]) as "Easy" | "Medium" | "Hard",
    estimatedViews: idea.estimatedViews || ['1K-10K', '10K-100K', '100K-1M', '1M+'][idea.id % 4]
  }));

  return (
    <main>
      <Hero 
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        totalIdeas={contentIdeas.length}
      />
      
      
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge 
                variant={selectedCategory === '' ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory('')}
              >
                All ({contentIdeas.length})
              </Badge>
              {categories.slice(0, 8).map((category) => {
                const count = contentIdeas.filter(idea => idea.category === category.name).length;
                return (
                  <Badge 
                    key={category.id}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name} ({count})
                  </Badge>
                );
              })}
            </div>
          </div>
          
          {enhancedIdeas.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-muted-foreground mb-4">No content ideas found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedIdeas.map((idea) => (
                <ContentIdeaCard
                  key={idea.id}
                  title={idea.title}
                  description={idea.description}
                  category={idea.category}
                  difficulty={idea.difficulty}
                  estimatedViews={idea.estimatedViews}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}