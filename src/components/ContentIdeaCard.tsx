import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentIdeaCardProps {
  title: string;
  description: string;
  niche: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedViews: string;
}

export default function ContentIdeaCard({ 
  title, 
  description, 
  niche, 
  difficulty, 
  estimatedViews 
}: ContentIdeaCardProps) {
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800 hover:bg-green-100",
    Medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100", 
    Hard: "bg-red-100 text-red-800 hover:bg-red-100"
  };

  return (
    <Card className="group transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {niche}
          </Badge>
          <Badge 
            variant="secondary" 
            className={`text-xs ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed mb-3">
          {description}
        </CardDescription>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Est. Views</span>
          <span className="font-medium">{estimatedViews}</span>
        </div>
      </CardContent>
    </Card>
  );
}