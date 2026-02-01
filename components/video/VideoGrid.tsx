"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Eye, Music } from "lucide-react";
import VideoModal from "./VideoModal";
import { getVideoThumbnail } from "@/lib/content/videos";
import type { Video } from "@/lib/content/videos";

interface VideoGridProps {
  videos: Video[];
  columns?: 2 | 3 | 4;
  showViews?: boolean;
}

export default function VideoGrid({
  videos,
  columns = 3,
  showViews = true,
}: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Delay clearing video to allow exit animation
    setTimeout(() => setSelectedVideo(null), 200);
  };

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <motion.div
        className={`grid ${gridCols[columns]} gap-6`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {videos.map((video) => (
          <motion.button
            key={video.id}
            variants={itemVariants}
            onClick={() => handleVideoClick(video)}
            className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] text-left transition-all hover:ring-2 hover:ring-accent/50"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={getVideoThumbnail(video.videoId, "hq")}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="h-6 w-6 fill-current pl-0.5" />
                </motion.div>
              </div>

              {/* Audio badge */}
              {video.category === "audio" && (
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  <Music className="h-3 w-3" />
                  Audio
                </div>
              )}

              {/* Duration gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {video.title}
                {video.featuring && (
                  <span className="font-normal text-muted">
                    {" "}ft. {video.featuring}
                  </span>
                )}
              </h3>
              
              {showViews && (
                <div className="mt-1 flex items-center gap-1 text-sm text-muted">
                  <Eye className="h-4 w-4" />
                  <span>{video.views} views</span>
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </motion.div>

      <VideoModal
        video={selectedVideo}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
