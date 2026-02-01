"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PressLogo {
  name: string;
  url: string;
  year: string;
}

const pressLogos: PressLogo[] = [
  {
    name: "Voyage Austin",
    url: "https://voyageaustin.com/interview/conversations-with-j-kline-artist-stage-name-jacob-kline/",
    year: "2022",
  },
  {
    name: "ShoutoutHTX",
    url: "https://shoutouthtx.com/meet-j-kline-hip-hop-artist-motivational-speaker-and-recovery-advocate/",
    year: "2024",
  },
];

// Video ID for background - "Runaway" performance footage
const BACKGROUND_VIDEO_ID = "e4yKFWiICTI";

// Stylized text-based logo component
function PressLogo({ logo, index }: { logo: PressLogo; index: number }) {
  return (
    <motion.a
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex flex-col items-center justify-center px-6 py-4 sm:px-8 sm:py-5"
    >
      {/* Logo text styled to look like publication logo */}
      <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/70 group-hover:text-accent transition-all duration-300 whitespace-nowrap drop-shadow-lg">
        {logo.name === "Voyage Austin" ? (
          <span className="font-serif italic">
            <span className="text-accent/80 group-hover:text-accent">Voyage</span>
            <span className="font-bold not-italic ml-1">AUSTIN</span>
          </span>
        ) : (
          <span className="uppercase tracking-wider">
            <span className="font-black">Shoutout</span>
            <span className="text-accent/80 group-hover:text-accent font-light">HTX</span>
          </span>
        )}
      </div>
      
      {/* Hover indicator */}
      <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-white/70">Read Feature</span>
        <ExternalLink className="w-3 h-3 text-white/70" />
      </div>
    </motion.a>
  );
}

export function SocialProof() {
  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${BACKGROUND_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${BACKGROUND_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ minWidth: "100%", minHeight: "100%" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        />
      </div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      
      {/* Additional subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-2 drop-shadow-lg">
            Featured In
          </p>
          <div className="w-12 h-px bg-accent/50 mx-auto" />
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {pressLogos.map((logo, index) => (
            <PressLogo key={logo.name} logo={logo} index={index} />
          ))}
        </div>

        {/* Link to full press page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            href="/press"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-300 drop-shadow-lg"
          >
            View all press features
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
