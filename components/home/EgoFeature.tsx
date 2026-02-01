"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { GraffitiText, DrippingDivider, SprayOverlay } from "@/components/effects";
import Button from "@/components/ui/Button";
import { stats } from "@/lib/content/timeline";
import { pullQuotes } from "@/lib/content/quotes";

// E.G.O. specific data
const egoData = {
  title: "E.G.O.",
  subtitle: "Edging God Out",
  year: 2023,
  albumId: "1Zr5BFNjcWrVmlOFtHUpj2",
  spotifyEmbed: "https://open.spotify.com/embed/album/1Zr5BFNjcWrVmlOFtHUpj2?utm_source=generator&theme=0",
  spotifyUrl: "https://open.spotify.com/album/1Zr5BFNjcWrVmlOFtHUpj2",
  coverImage: "/images/albums/ego.jpg",
  description: "When we put ourselves before the Source, we edge God out. This track is a raw confession—a mirror held up to the ego that nearly destroyed everything.",
  tagline: "The ego tried to kill me. This song is the funeral.",
};

// Streaming platforms for E.G.O.
const streamingPlatforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/album/1Zr5BFNjcWrVmlOFtHUpj2",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    color: "#1DB954",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/album/e-g-o-edging-god-out-single/1853303282",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.99c-.042.003-.083.01-.124.013-.492.022-.978.07-1.455.151a4.971 4.971 0 00-1.985.795C1.297 1.882.56 2.87.24 4.16a9.2 9.2 0 00-.24 2.189c-.003.041-.01.082-.013.124v11.054c.003.042.01.083.013.124.023.492.07.98.15 1.455.318 1.31 1.063 2.31 2.182 3.043a5.022 5.022 0 001.876.726c.498.08.996.12 1.565.15.04.003.083.01.124.013h12.02c.042-.003.083-.01.124-.013.492-.023.98-.07 1.455-.151a4.971 4.971 0 001.984-.795c1.13-.793 1.867-1.78 2.188-3.071a9.2 9.2 0 00.24-2.189c.003-.041.01-.082.013-.124V6.248a1.152 1.152 0 00-.013-.124zm-7.677 8.895a2.89 2.89 0 01-1.723 1.058c-.48.116-.924.166-1.375.125-.6-.055-1.047-.323-1.233-.873-.116-.343-.09-.697.041-1.036.21-.535.608-.89 1.14-1.08.452-.16.924-.24 1.392-.344.356-.08.658-.219.844-.534.041-.069.074-.149.11-.22v-.215c-.006-.47-.216-.856-.602-1.14-.376-.278-.806-.374-1.255-.374-.456 0-.877.1-1.258.326-.394.234-.668.571-.807.995-.078.242-.12.494-.126.753h-1.477c.015-.646.18-1.24.5-1.785.365-.62.88-1.087 1.534-1.387.53-.243 1.096-.378 1.679-.408a5.54 5.54 0 011.586.116c.59.136 1.123.398 1.568.792.555.49.853 1.11.915 1.86.006.067.008.135.008.203v4.076c0 .276.06.52.18.732.105.186.346.348.65.37.128.01.26-.009.39-.044v1.156a2.5 2.5 0 01-.66.096c-.497 0-.896-.143-1.197-.426a1.706 1.706 0 01-.404-.523zm-.135-3.69a.937.937 0 01-.385.152c-.397.088-.793.173-1.186.27-.363.09-.71.222-.992.465-.216.184-.354.413-.37.698-.02.324.07.612.303.842.287.28.643.39 1.034.387.389-.005.752-.095 1.092-.267.535-.269.864-.69.976-1.262.03-.157.038-.319.038-.48V11.33z"/>
      </svg>
    ),
    color: "#FA243C",
  },
  {
    name: "YouTube Music",
    url: "https://www.youtube.com/@officialjkline",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: "#FF0000",
  },
  {
    name: "Amazon",
    url: "https://music.amazon.com/artists/B07R76F4PZ/j-kline",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.13a.42.42 0 01.046.35c-.067.184-.27.396-.612.636-.9.63-1.91 1.17-3.034 1.62a18.71 18.71 0 01-3.52 1.03 19.04 19.04 0 01-3.615.36c-1.723 0-3.418-.2-5.082-.6-1.665-.4-3.227-.98-4.69-1.746-.36-.19-.54-.39-.54-.6 0-.11.038-.21.113-.29l.168-.17zm6.68-14.08c0-.85.272-1.61.814-2.27a5.324 5.324 0 012.057-1.567c.378-.19.654-.33.83-.42a3.308 3.308 0 01.604-.234l.357-.09a.288.288 0 01.157.023c.034.014.062.04.087.08l.092.17c.028.058.04.11.04.16 0 .05-.014.1-.046.16a9.453 9.453 0 01-.753.968c-.29.325-.515.625-.68.9-.163.274-.246.53-.246.77 0 .243.12.47.36.68.24.21.565.39.976.54.41.15.73.25.96.3.23.05.396.075.5.075h.21c.15 0 .265-.015.35-.045.086-.03.16-.07.22-.12a.44.44 0 01.16-.12c.06-.03.14-.05.23-.05.22 0 .33.12.33.36 0 .24-.14.5-.42.78-.28.28-.66.5-1.13.68-.47.18-.98.27-1.53.27a4.41 4.41 0 01-1.41-.21 3.656 3.656 0 01-1.11-.57 3.02 3.02 0 01-.758-.84 2.095 2.095 0 01-.284-1.05v-.05zm8.52 7.59c.61-.26 1.32-.49 2.14-.69a.78.78 0 01.53-.01c.144.05.244.16.3.33l.073.22c.033.1.05.19.05.27 0 .08-.024.15-.07.21a.38.38 0 01-.16.13l-.19.09c-.5.21-.906.42-1.22.62-.312.2-.53.415-.66.64-.13.225-.21.44-.243.645a1.94 1.94 0 00-.02.55v3.85c0 .35.07.635.21.855.14.22.34.385.6.495.26.11.555.18.885.21.33.03.67.045 1.02.045h1.02c.09 0 .15.035.18.105.03.07.045.155.045.255v.16c0 .21-.07.33-.21.36l-.27.03-.52.01h-1.19c-.72 0-1.35-.055-1.89-.165-.54-.11-1-.305-1.38-.585-.38-.28-.67-.66-.87-1.14-.2-.48-.3-1.08-.3-1.8V9.94c0-.12.048-.21.144-.27a.561.561 0 01.287-.09h.53c.12 0 .214.03.284.09.07.06.105.15.105.27v1.59z"/>
      </svg>
    ),
    color: "#00A8E1",
  },
];

export function EgoFeature() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Spray paint texture background */}
      <SprayOverlay intensity="light" color="gold" className="absolute inset-0 pointer-events-none" animated={false}>
        <div className="absolute inset-0" />
      </SprayOverlay>
      
      {/* Top dripping divider */}
      <DrippingDivider color="gold" flip className="absolute top-0 left-0 right-0 z-10" animated={false} />
      
      <div className="relative z-20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Latest Release
            </p>
            <GraffitiText 
              variant="tag" 
              color="gold" 
              size="2xl" 
              as="h2"
              className="mb-3"
            >
              {egoData.title}
            </GraffitiText>
            <p className="text-xl md:text-2xl text-muted italic">
              {egoData.subtitle}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Album Art Side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-2xl blur-2xl" />
              
              {/* Album Cover */}
              <div className="relative group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl shadow-accent/30 border-2 border-accent/30">
                  <Image
                    src={egoData.coverImage}
                    alt={`${egoData.title} Album Cover`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Hover play overlay - scrolls to player */}
                  <button
                    onClick={() => {
                      const player = document.getElementById('ego-player');
                      if (player) {
                        player.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                    aria-label="Scroll to player"
                  >
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-accent/50">
                      <Play className="w-10 h-10 text-background ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-accent rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-accent rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg" />
              </div>
              
              {/* Stats under album */}
              <motion.div 
                className="mt-8 flex justify-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{stats.yearsClean}</div>
                  <div className="text-sm text-muted uppercase tracking-wider">Years Clean</div>
                </div>
                <div className="w-px bg-accent/30" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{stats.yearsWritingMusic}+</div>
                  <div className="text-sm text-muted uppercase tracking-wider">Years Writing</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Tagline */}
              <div className="relative text-center lg:text-left">
                <GraffitiText 
                  variant="stencil" 
                  color="white" 
                  size="md"
                  className="block"
                >
                  &ldquo;{egoData.tagline}&rdquo;
                </GraffitiText>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {egoData.description}
              </p>
              
              {/* Quote callout */}
              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-foreground text-lg italic">
                  &ldquo;{pullQuotes[0].quote}&rdquo;
                </p>
                <p className="text-accent text-sm mt-2">{pullQuotes[0].subtext}</p>
              </div>
              
              {/* Spotify Embed */}
              <div id="ego-player" className="rounded-xl overflow-hidden shadow-lg scroll-mt-24">
                <iframe
                  src={egoData.spotifyEmbed}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                  title="E.G.O. on Spotify"
                />
              </div>

              {/* Stream Now Buttons */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-muted uppercase tracking-wider mb-4">Stream Now</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {streamingPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-200 hover:scale-105 text-sm font-medium"
                      style={{
                        borderColor: "#D4AF37",
                        color: "#D4AF37",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = platform.color;
                        target.style.borderColor = platform.color;
                        target.style.color = "#0A0A0A";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "transparent";
                        target.style.borderColor = "#D4AF37";
                        target.style.color = "#D4AF37";
                      }}
                    >
                      {platform.icon}
                      <span>{platform.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <Button href="/music" variant="secondary" size="lg">
                  Explore All Music
                </Button>
                <Button href="/about" variant="ghost" size="lg">
                  Read My Story →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom dripping divider */}
      <DrippingDivider color="gold" className="absolute bottom-0 left-0 right-0 z-10" animated={false} />
    </div>
  );
}
