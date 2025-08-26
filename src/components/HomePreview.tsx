import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import ContentIdeaCard from './ContentIdeaCard';
import { contentIdeas } from '../data/niches';

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

export default function HomePreview() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Function to get random 6 ideas
  const getRandomIdeas = () => {
    const shuffled = [...contentIdeas].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  // Get random 6 ideas, refreshed when refreshKey changes
  const previewIdeas = useMemo(() => {
    return getRandomIdeas().map(idea => ({
      ...idea,
      difficulty: (idea.difficulty || ['Easy', 'Medium', 'Hard'][idea.id % 3]) as "Easy" | "Medium" | "Hard",
      estimatedViews: idea.estimatedViews || ['1K-10K', '10K-100K', '100K-1M', '1M+'][idea.id % 4]
    }));
  }, [refreshKey]);

  // Random button text
  const buttonText = useMemo(() => {
    return buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
  }, [refreshKey]);

  const handleRefresh = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setRefreshKey(prev => prev + 1);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Content Ideas</h2>
          <p className="text-lg text-muted-foreground mb-6">Get started with these trending video concepts</p>
          <button 
            onClick={handleRefresh}
            className="w-full max-w-md h-12 text-base bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300"
          >
            <span className={`inline-block transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              → {buttonText}
            </span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewIdeas.map((idea) => (
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
      </div>
    </section>
  );
}