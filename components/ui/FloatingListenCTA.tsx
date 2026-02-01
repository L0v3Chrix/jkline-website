"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SPOTIFY_EGO_URL = "https://open.spotify.com/album/1Zr5BFNjcWrVmlOFtHUpj2";

// Spotify icon SVG
function SpotifyIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export function FloatingListenCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Hide on homepage since E.G.O. is featured there
  const isHomepage = pathname === "/";

  // Delay appearance slightly for smoother experience
  useEffect(() => {
    if (!isHomepage) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isHomepage]);

  return (
    <AnimatePresence>
      {isVisible && !isHomepage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={SPOTIFY_EGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex items-center gap-3"
          >
            {/* Expandable label */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 10, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-accent text-background px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap shadow-lg shadow-accent/30 overflow-hidden"
                >
                  Listen Now
                </motion.span>
              )}
            </AnimatePresence>

            {/* Main button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Button */}
              <div className="relative w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/50">
                <SpotifyIcon className="w-7 h-7 text-background" />
              </div>

              {/* Pulse ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-20" />
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
