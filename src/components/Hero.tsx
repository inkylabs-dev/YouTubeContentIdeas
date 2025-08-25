import React from "react";
import { Badge } from "@/components/ui/badge.jsx";

interface HeroProps {
  totalIdeas: number;
}

export default function Hero({ totalIdeas }: HeroProps) {
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
            <a href="/niches">
              <button className="w-full h-12 text-base bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors">
                → Start Brainstorming
              </button>
            </a>
            <p className="text-sm text-muted-foreground">free, no signup required</p>
          </div>
        </div>
      </div>
    </section>
  );
}