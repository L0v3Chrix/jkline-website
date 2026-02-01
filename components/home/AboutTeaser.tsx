"use client";

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { shortBio } from "@/lib/content/bio";
import { quotes } from "@/lib/content/quotes";

export function AboutTeaser() {
  // Pick a featured quote
  const featuredQuote = quotes[0];

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Quote Section */}
      <div className="flex-1 order-2 lg:order-1">
        <blockquote className="relative">
          {/* Decorative quote mark */}
          <span className="absolute -top-6 -left-4 text-8xl text-accent/20 font-serif leading-none">
            "
          </span>
          <p className="text-2xl md:text-3xl font-light text-foreground/90 italic leading-relaxed relative z-10">
            {featuredQuote.text}
          </p>
          {featuredQuote.source && (
            <cite className="block mt-4 text-muted not-italic">
              — {featuredQuote.source}
              {featuredQuote.date && `, ${featuredQuote.date}`}
            </cite>
          )}
        </blockquote>
      </div>

      {/* Bio Section */}
      <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
        <p className="text-accent uppercase tracking-widest text-sm mb-4">
          The Story
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          From Rock Bottom to Redemption
        </h3>
        <p className="text-muted text-lg leading-relaxed mb-8">
          {shortBio}
        </p>
        <Button href="/about" variant="secondary" size="lg" className="group">
          <span className="flex items-center gap-2">
            Read My Story
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  );
}
