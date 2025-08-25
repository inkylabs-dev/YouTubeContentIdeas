import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  totalIdeas: number;
}

export default function Hero({ onSearch, searchQuery, totalIdeas }: HeroProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            YouTube Content Ideas
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Never run out of<br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              YouTube content ideas
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Brainstorm unlimited, SEO-ready content ideas in seconds.
          </p>
          <div className="mt-10 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="→ Start Brainstorming (free, no signup required)"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}