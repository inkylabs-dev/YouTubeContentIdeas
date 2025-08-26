
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';

interface ContentIdeaCardProps {
  title: string;
  description: string;
  niche: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedViews: string;
  slug?: string;
  clickable?: boolean;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function ContentIdeaCard({ 
  title, 
  description, 
  niche, 
  difficulty, 
  estimatedViews,
  slug,
  clickable = true
}: ContentIdeaCardProps) {
  const [copied, setCopied] = useState(false);
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800 hover:bg-green-100",
    Medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100", 
    Hard: "bg-red-100 text-red-800 hover:bg-red-100"
  };

  const ideaSlug = slug || generateSlug(title);
  const handleCopy = async () => {
    const text = `Title: ${title}\nDescription: ${description}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // fallback: do nothing
    }
  };

  const cardContent = (
    <div className="relative">
      {copied && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded bg-black text-white text-xs shadow transition-opacity duration-200 opacity-100 pointer-events-none select-none">
          Copied!
        </div>
      )}
      <Card
        className={`group transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${clickable ? 'cursor-pointer' : ''}`}
        onClick={clickable ? handleCopy : undefined}
        title={copied ? 'Copied!' : 'Click to copy idea'}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="text-xs">
              <TypeAnimation
                sequence={[1200, niche]}
                wrapper="span"
                speed={90}
                style={{ display: 'inline-block' }}
                repeat={0}
                cursor={false}
              />
            </div>
            <div
              className={`text-xs ${difficultyColors[difficulty]}`}
            >
              <TypeAnimation
                sequence={[1400, difficulty]}
                wrapper="span"
                speed={90}
                style={{ display: 'inline-block' }}
                repeat={0}
                cursor={false}
              />
            </div>
          </div>
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
            <TypeAnimation
              sequence={[title]}
              wrapper="span"
              speed={75}
              style={{ display: 'inline-block' }}
              repeat={0}
              cursor={false}
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-sm leading-relaxed mb-3">
            <TypeAnimation
              sequence={[500, description]}
              wrapper="span"
              speed={85}
              style={{ display: 'inline-block' }}
              repeat={0}
              cursor={false}
            />
          </CardDescription>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              <TypeAnimation
                sequence={[1600, "Est. Views"]}
                wrapper="span"
                speed={95}
                style={{ display: 'inline-block' }}
                repeat={0}
                cursor={false}
              />
            </span>
            <span className="font-medium">
              <TypeAnimation
                sequence={[1800, estimatedViews]}
                wrapper="span"
                speed={95}
                style={{ display: 'inline-block' }}
                repeat={0}
                cursor={false}
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return cardContent;
}