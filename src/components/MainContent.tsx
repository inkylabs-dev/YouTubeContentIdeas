import React, { useState, useEffect, useMemo } from 'react';
import Hero from './Hero';
import NichesGrid from './NichesGrid';
import ContentIdeaCard from './ContentIdeaCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { contentIdeas } from '../data/niches';

interface ContentIdea {
  id: number;
  title: string;
  description: string;
  niche: string;
  tags: string[];
  difficulty?: "Easy" | "Medium" | "Hard";
  estimatedViews?: string;
}

interface Niche {
  id: string;
  name: string;
  description: string;
  slug: string;
  ideas: ContentIdea[];
}

interface MainContentProps {
  niches: Niche[];
}

export default function MainContent({ niches }: MainContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('');
  const [displayCount, setDisplayCount] = useState(60);
  
  const [filteredIdeas, setFilteredIdeas] = useState(contentIdeas);

  useEffect(() => {
    const filtered = contentIdeas.filter(idea => {
      const matchesSearch = !searchQuery || 
        idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesNiche = !selectedNiche || idea.niche === selectedNiche;
      
      return matchesSearch && matchesNiche;
    });
    
    setFilteredIdeas(filtered);
    setDisplayCount(60); // Reset display count when filters change
  }, [searchQuery, selectedNiche, contentIdeas]);

  const enhancedIdeas = filteredIdeas.map(idea => ({
    ...idea,
    difficulty: (idea.difficulty || ['Easy', 'Medium', 'Hard'][idea.id % 3]) as "Easy" | "Medium" | "Hard",
    estimatedViews: idea.estimatedViews || ['1K-10K', '10K-100K', '100K-1M', '1M+'][idea.id % 4]
  }));

  const displayedIdeas = enhancedIdeas.slice(0, displayCount);
  const hasMoreIdeas = displayCount < enhancedIdeas.length;

  const handleShowMore = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 60, enhancedIdeas.length));
  };

  // Infinite scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        if (hasMoreIdeas) {
          handleShowMore();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMoreIdeas, handleShowMore]);

  return (
    <main>
      <Hero 
        totalIdeas={contentIdeas.length}
      />
      
      
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search content ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge 
                variant={selectedNiche === '' ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedNiche('')}
              >
                All ({contentIdeas.length})
              </Badge>
              {niches.slice(0, 8).map((niche) => {
                const count = contentIdeas.filter(idea => idea.niche === niche.name).length;
                return (
                  <Badge 
                    key={niche.id}
                    variant={selectedNiche === niche.name ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedNiche(niche.name)}
                  >
                    {niche.name} ({count})
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedIdeas.map((idea) => (
                  <ContentIdeaCard
                    key={idea.uniqueKey}
                    title={idea.title}
                    description={idea.description}
                    niche={idea.niche}
                    difficulty={idea.difficulty}
                    estimatedViews={idea.estimatedViews}
                  />
                ))}
              </div>
              
              {hasMoreIdeas && (
                <div className="text-center mt-12">
                  <Button 
                    onClick={handleShowMore}
                    size="lg"
                    className="px-8 py-3"
                  >
                    Show More Ideas
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}