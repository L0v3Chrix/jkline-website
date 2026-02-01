"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Eye, Music } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import GlassModal from "@/components/video/GlassModal";
import { videos, getVideoThumbnail, featuredVideo } from "@/lib/content/videos";
import type { Video } from "@/lib/content/videos";

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 200);
  };

  // Sort videos by view count (most viewed first)
  const sortedVideos = [...videos].sort((a, b) => b.viewCount - a.viewCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Videos
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              Watch official music videos and audio visualizers from J-Kline. 
              Experience the stories behind the music.
            </p>
          </motion.div>

          {/* Featured Video Hero */}
          {featuredVideo && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <button
                onClick={() => handleVideoClick(featuredVideo!)}
                className="group relative w-full overflow-hidden rounded-2xl bg-[#1A1A1A] text-left transition-all hover:ring-2 hover:ring-accent/50"
              >
                {/* Large thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={getVideoThumbnail(featuredVideo.videoId, "maxres")}
                    alt={featuredVideo.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-accent/90 text-background shadow-lg shadow-accent/30 backdrop-blur-sm transition-transform group-hover:scale-110"
                      whileHover={{ scale: 1.15 }}
                    >
                      <Play className="h-8 w-8 md:h-10 md:w-10 fill-current pl-1" />
                    </motion.div>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-background text-sm font-semibold">
                    Featured
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                      {featuredVideo.title}
                      {featuredVideo.featuring && (
                        <span className="font-normal text-white/70">
                          {" "}ft. {featuredVideo.featuring}
                        </span>
                      )}
                    </h2>
                    {featuredVideo.description && (
                      <p className="text-white/60 max-w-2xl hidden md:block">
                        {featuredVideo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-3 text-white/50 text-sm">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredVideo.views} views
                      </span>
                      {featuredVideo.year && <span>• {featuredVideo.year}</span>}
                    </div>
                  </div>
                </div>
              </button>
            </motion.section>
          )}

          {/* All Videos Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              All Videos
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sortedVideos.map((video) => (
                <motion.button
                  key={video.id}
                  variants={itemVariants}
                  onClick={() => handleVideoClick(video)}
                  className="group relative overflow-hidden rounded-xl bg-[#1A1A1A] text-left transition-all hover:ring-2 hover:ring-accent/50"
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                      {video.title}
                      {video.featuring && (
                        <span className="font-normal text-muted">
                          {" "}ft. {video.featuring}
                        </span>
                      )}
                    </h3>
                    
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {video.views}
                      </span>
                      {video.year && (
                        <span className="text-muted/60">• {video.year}</span>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />

      {/* Glass Morphic Modal */}
      <GlassModal
        video={selectedVideo}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
