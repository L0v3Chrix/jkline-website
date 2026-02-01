"use client";

import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import { featuredAlbum } from "@/lib/content/discography";

export function FeaturedRelease() {
  if (!featuredAlbum) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Album Cover */}
      <div className="relative group w-full max-w-sm lg:max-w-md">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-accent/20 border border-accent/20">
          {featuredAlbum.coverImage ? (
            <Image
              src={featuredAlbum.coverImage}
              alt={featuredAlbum.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
              <span className="text-4xl font-bold text-accent/50">
                {featuredAlbum.title}
              </span>
            </div>
          )}
          
          {/* Play overlay on hover */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Gold accent glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 rounded-lg blur-xl opacity-50 -z-10" />
      </div>

      {/* Album Info */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">
          Featured Release
        </p>
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {featuredAlbum.title}
        </h3>
        <p className="text-muted text-lg mb-2">
          {featuredAlbum.year} • {featuredAlbum.type === "album" ? "Full Album" : "Single"}
        </p>
        
        {featuredAlbum.description && (
          <p className="text-muted/80 mb-6 max-w-lg">
            {featuredAlbum.description}
          </p>
        )}

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          {featuredAlbum.spotifyUrl && (
            <Button
              href={featuredAlbum.spotifyUrl}
              variant="primary"
              size="lg"
              className="group"
            >
              <span className="flex items-center gap-2">
                Listen Now
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          )}
          <Button href="/music" variant="secondary" size="lg">
            View All Music
          </Button>
        </div>
      </div>
    </div>
  );
}
