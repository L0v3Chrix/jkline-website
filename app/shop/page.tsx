"use client";

import Section from "@/components/ui/Section";
import { ExternalLink, ShoppingBag, Music } from "lucide-react";
import Button from "@/components/ui/Button";

const shopLinks = [
  {
    title: "Music",
    description: "Stream and download J-Kline's albums and singles",
    icon: Music,
    links: [
      { name: "Spotify", url: "https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA" },
      { name: "Apple Music", url: "https://music.apple.com/us/artist/j-kline/1461270336" },
      { name: "Amazon Music", url: "https://music.amazon.com/artists/B07R76F4PZ" },
    ]
  },
  {
    title: "Merch",
    description: "Official J-Kline merchandise coming soon",
    icon: ShoppingBag,
    links: []
  }
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background pt-24 overflow-x-hidden">
      <Section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop
          </h1>
          <p className="text-muted text-lg mb-12">
            Support J-Kline by streaming music and grabbing official merch
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {shopLinks.map((category) => (
              <div 
                key={category.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <p className="text-muted mb-6">{category.description}</p>
                
                {category.links.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {category.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-accent/20 border border-white/10 rounded-lg transition-colors group"
                      >
                        <span className="text-foreground">{link.name}</span>
                        <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-8 bg-white/5 border border-white/10 rounded-lg text-center">
                    <p className="text-muted">Coming Soon</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
