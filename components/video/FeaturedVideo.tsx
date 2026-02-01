"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Eye } from "lucide-react";
import VideoModal from "./VideoModal";
import { getVideoThumbnail } from "@/lib/content/videos";
import type { Video } from "@/lib/content/videos";

interface FeaturedVideoProps {
  video: Video;
  showTitle?: boolean;
  showDescription?: boolean;
  className?: string;
}

export default function FeaturedVideo({
  video,
  showTitle = true,
  showDescription = true,
  className = "",
}: FeaturedVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`relative overflow-hidden rounded-xl bg-[#1A1A1A] ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Video thumbnail button */}
        <motion.button
          onClick={() => setModalOpen(true)}
          className="group relative aspect-video w-full overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Play ${video.title}`}
        >
          <Image
            src={getVideoThumbnail(video.videoId, "maxres")}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-background shadow-2xl md:h-24 md:w-24"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Play className="h-9 w-9 fill-current pl-1 md:h-10 md:w-10" />
            </motion.div>
          </div>

          {/* Featured badge */}
          <div className="absolute left-4 top-4 rounded bg-accent px-3 py-1 text-sm font-semibold text-background">
            Featured Video
          </div>

          {/* Views badge */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
            <Eye className="h-4 w-4" />
            {video.views} views
          </div>
        </motion.button>

        {/* Info section */}
        {(showTitle || showDescription) && (
          <div className="p-6 md:p-8">
            {showTitle && (
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                {video.title}
                {video.featuring && (
                  <span className="font-normal text-muted">
                    {" "}ft. {video.featuring}
                  </span>
                )}
              </h3>
            )}
            {showDescription && video.description && (
              <p className="mt-2 text-muted md:text-lg">
                {video.description}
              </p>
            )}
          </div>
        )}
      </motion.div>

      <VideoModal
        video={video}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
