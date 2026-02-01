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
      <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-muted/50 group-hover:text-accent transition-all duration-300 whitespace-nowrap">
        {logo.name === "Voyage Austin" ? (
          <span className="font-serif italic">
            <span className="text-accent/60 group-hover:text-accent">Voyage</span>
            <span className="font-bold not-italic ml-1">AUSTIN</span>
          </span>
        ) : (
          <span className="uppercase tracking-wider">
            <span className="font-black">Shoutout</span>
            <span className="text-accent/60 group-hover:text-accent font-light">HTX</span>
          </span>
        )}
      </div>
      
      {/* Hover indicator */}
      <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-muted/60">Read Feature</span>
        <ExternalLink className="w-3 h-3 text-muted/60" />
      </div>
    </motion.a>
  );
}

export function SocialProof() {
  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-transparent via-[#0D0D0D]/50 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted/60 mb-2">
            Featured In
          </p>
          <div className="w-12 h-px bg-accent/30 mx-auto" />
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
            className="inline-flex items-center gap-2 text-sm text-muted/60 hover:text-accent transition-colors duration-300"
          >
            View all press features
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
