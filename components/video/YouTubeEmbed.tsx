"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { getVideoThumbnail, getEmbedUrl } from "@/lib/content/videos";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title,
  autoplay = false,
  className = "",
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(autoplay);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full overflow-hidden rounded-lg bg-[#1A1A1A] ${className}`}
    >
      {isLoaded ? (
        <iframe
          src={getEmbedUrl(videoId, true)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      ) : isInView ? (
        <motion.button
          onClick={handleClick}
          className="group absolute inset-0 flex cursor-pointer items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          <Image
            src={getVideoThumbnail(videoId, "maxres")}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Play button */}
          <motion.div
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent/90 text-background shadow-lg md:h-20 md:w-20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Play className="h-7 w-7 fill-current pl-1 md:h-8 md:w-8" />
          </motion.div>
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm font-medium text-white drop-shadow-lg md:text-base">
              {title}
            </p>
          </div>
        </motion.button>
      ) : (
        // Placeholder while not in view
        <div className="absolute inset-0 animate-pulse bg-[#2A2A2A]" />
      )}
    </div>
  );
}
