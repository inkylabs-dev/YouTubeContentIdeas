import React, { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import ContentIdeaCard from './ContentIdeaCard';
import { contentIdeas } from '../data/niches';

interface HeroProps {
  totalIdeas: number;
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

export default function Hero({ totalIdeas }: HeroProps) {
  const [hasStarted, setHasStarted] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const getRandomIdeas = () => {
    const shuffled = [...contentIdeas].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
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
    
    setTimeout(() => {
      setCurrentIdeas(newIdeas);
      setIsAnimating(false);
      setRefreshKey(prev => prev + 1);
    }, 300);
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="secondary">Open Source</Badge>
            <Badge variant="secondary">#1 YouTube Content Ideas Hub</Badge>
            <Badge variant="secondary">Free to Use</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Never run out of<br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              YouTube content ideas
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Brainstorm unlimited, SEO-ready content ideas in seconds.
          </p>
          <div className="mt-10 flex flex-col gap-4 max-w-md mx-auto">
            <button 
              onClick={handleStartBrainstorming}
              className="w-full h-12 text-base bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300"
            >
              <span className={`inline-block transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                → {hasClicked ? buttonText : 'Start Brainstorming'}
              </span>
            </button>
            <p className="text-sm text-muted-foreground">free, no signup required</p>
          </div>
        </div>

        {hasStarted && (
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedCurrentIdeas.map((idea, index) => (
                <ContentIdeaCard
                  key={`${idea.id}-${refreshKey}`}
                  title={idea.title}
                  description={idea.description}
                  niche={idea.niche}
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