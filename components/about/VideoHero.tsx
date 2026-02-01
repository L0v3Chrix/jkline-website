"use client";

import { motion } from "framer-motion";
import { GraffitiText } from "@/components/effects/GraffitiText";

interface VideoHeroProps {
  videoId: string;
  headline: string;
  subheadline: string;
}

export function VideoHero({ videoId, headline, subheadline }: VideoHeroProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ minWidth: "100%", minHeight: "100%" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Graffiti-style spray texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <GraffitiText
            as="h1"
            variant="tag"
            color="gold"
            size="2xl"
            className="mb-6"
          >
            {headline}
          </GraffitiText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-white/90 max-w-2xl font-light tracking-wide"
        >
          {subheadline}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
