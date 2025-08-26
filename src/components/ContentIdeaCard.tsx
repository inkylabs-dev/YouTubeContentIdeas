import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeAnimation } from 'react-type-animation';

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
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800 hover:bg-green-100",
    Medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100", 
    Hard: "bg-red-100 text-red-800 hover:bg-red-100"
  };

  const ideaSlug = slug || generateSlug(title);
  const cardContent = (
    <Card className={`group transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${clickable ? 'cursor-pointer' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div variant="outline" className="text-xs">
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
            variant="secondary" 
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
  );

  if (!clickable) {
    return cardContent;
  }

  return (
    <a href={`/ideas/${ideaSlug}/`} className="block">
      {cardContent}
    </a>
  );
}