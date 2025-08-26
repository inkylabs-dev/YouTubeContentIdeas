import React, { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import ContentIdeaCard from './ContentIdeaCard';

interface NicheHeroProps {
  nicheData: {
    id: number;
    name: string;
    slug: string;
    description: string;
    long_description: string;
    tags: string[];
    ideas: Array<{
      id: number;
      title: string;
      description: string;
      niche: string;
      tags: string[];
    }>;
  };
  parentNiche?: {
    id: number;
    name: string;
    slug: string;
  };
}

const buttonTexts = [
  'Dazzle me!',
  'I need more inspirations!',
  'Show me more ideas!',
  'Surprise me!',
  'Give me something fresh!',
  'What else you got?',
  'Hit me with new ideas!',
  'Inspire me again!',
  'Show me different ones!',
  'Mix it up!',
  'Something new please!',
  'Refresh my creativity!',
  'Give me variety!',
  'Show me alternatives!',
  'Switch it up!',
  'More magic please!',
  'Keep the ideas coming!',
  'Show me the good stuff!',
  'Blow my mind!',
  'Feed my creativity!',
  'Spark my imagination!',
  'Unleash the ideas!',
  'Fuel my content fire!',
  'Give me that wow factor!',
  'Light up my brain!',
  'Show me viral potential!',
  'Ignite my creativity!',
  'Drop some knowledge!',
  'Shake things up!',
  'Make me think differently!',
  'Give me the next big thing!',
  'Show me trending topics!',
  'Bring on the brilliance!',
  'Hit me with genius!',
  'Show me viral gold!',
  'Give me content magic!',
  'Unlock my potential!',
  'Show me something amazing!',
  'Give me fresh perspective!',
  'Inspire my next video!',
  'Tickle my brain cells!',
  'Feed the content monster!',
  'Scramble my neurons!',
  'Activate chaos mode!',
  'Squeeze my creative juice!',
  'Poke my artistic soul!',
  'Stir the idea soup!',
  'Shuffle my mental deck!',
  'Crack open my skull!',
  'Massage my gray matter!',
  'Jazz up my synapses!',
  'Toss my creative salad!',
  'Marinate my thoughts!',
  'Microwave my mindset!',
  'Blend my brain smoothie!',
  'Season my imagination!',
  'Whisk my wild thoughts!',
  'Bake me some brilliance!',
  'Sprinkle creative dust!',
  'Brew me some genius!'
];

export default function NicheHero({ nicheData, parentNiche }: NicheHeroProps) {
  const [hasStarted, setHasStarted] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const getRandomIdeas = () => {
    if (nicheData.ideas.length === 0) return [];
    const shuffled = [...nicheData.ideas].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(6, nicheData.ideas.length));
  };

  const [currentIdeas, setCurrentIdeas] = useState(getRandomIdeas);
  
  // Enhanced ideas with difficulty and estimated views
  const enhancedCurrentIdeas = currentIdeas.map(idea => ({
    ...idea,
    difficulty: (idea.difficulty || ['Easy', 'Medium', 'Hard'][idea.id % 3]) as "Easy" | "Medium" | "Hard",
    estimatedViews: idea.estimatedViews || ['1K-10K', '10K-100K', '100K-1M', '1M+'][idea.id % 4]
  }));

  // Random button text
  const buttonText = useMemo(() => {
    return buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
  }, [refreshKey]);

  const handleStartBrainstorming = () => {
    if (!hasClicked) {
      setHasClicked(true);
    }
    
    setIsAnimating(true);
    const newIdeas = getRandomIdeas();
    
    // Scroll to the button smoothly, accounting for sticky navbar
    const element = document.getElementById('start-brainstorming-niche');
    if (element) {
      const navbarHeight = 64; // h-16 = 4rem = 64px
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setCurrentIdeas(newIdeas);
      setIsAnimating(false);
      setRefreshKey(prev => prev + 1);
    }, 300);
  };

  // Don't render if no ideas available
  if (nicheData.ideas.length === 0) {
    return (
      <section className="relative py-8 md:py-12">
        <div className="container">
          <div className="text-center">
            {parentNiche && (
              <div className="mb-4">
                <a href={`/niche/${parentNiche.slug}/`}>
                  <Badge variant="outline" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                    ← {parentNiche.name}
                  </Badge>
                </a>
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r text-red-500 bg-clip-text">
                {nicheData.name}
              </span>
              <span className="bg-gradient-to-r text-black-600 bg-clip-text">
                {' '}YouTube Content Ideas
              </span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">
              {nicheData.long_description}
            </p>
            <div className="text-center py-12">
              <h3 className="text-xl text-muted-foreground mb-4">No content ideas available yet</h3>
              <p className="text-muted-foreground mb-6">We're working on adding more {nicheData.name.toLowerCase()} content ideas!</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>💡 Try exploring other categories</p>
                <p>🔍 Use the search to find ideas across all topics</p>
                <p>📺 Check back soon for new {nicheData.name.toLowerCase()} ideas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-8 md:py-12">
      <div className="container">
        <div className="text-center">
          {parentNiche && (
            <div className="mb-4">
              <a href={`/niche/${parentNiche.slug}/`}>
                <Badge variant="outline" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  ← {parentNiche.name}
                </Badge>
              </a>
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r text-red-500 bg-clip-text">
              {nicheData.name}
            </span>
            <span className="bg-gradient-to-r text-black-600 bg-clip-text">
              {' '}YouTube Content Ideas
            </span>
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">
            {nicheData.long_description}
          </p>
          
          <div className="max-w-md mx-auto">
            <button 
              id="start-brainstorming-niche"
              onClick={handleStartBrainstorming}
              className="w-full h-12 text-base bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300"
            >
              <span className={`inline-block transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                → {hasClicked ? buttonText : `Start Brainstorming ${nicheData.name}`}
              </span>
            </button>
            <p className="text-sm text-muted-foreground mt-2">free, no signup required</p>
          </div>
        </div>

        {hasStarted && currentIdeas.length > 0 && (
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedCurrentIdeas.map((idea, index) => (
                <ContentIdeaCard
                  key={`${idea.id}-${refreshKey}`}
                  title={idea.title}
                  description={idea.description}
                  niche={nicheData.name}
                  difficulty={idea.difficulty}
                  estimatedViews={idea.estimatedViews}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}