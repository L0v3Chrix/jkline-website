"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import MusicFilters from "@/components/music/MusicFilters";
import MusicGrid from "@/components/music/MusicGrid";
import { VideoGrid } from "@/components/video";
import { discography } from "@/lib/content/discography";
import { videos, featuredVideo } from "@/lib/content/videos";

type FilterType = "all" | "album" | "single";

export default function MusicPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredItems =
    activeFilter === "all"
      ? discography
      : discography.filter((item) => item.type === activeFilter);

  // Get all videos except the featured one for the grid
  const gridVideos = videos.filter((v) => v.id !== featuredVideo?.id);

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
              Music
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              From the debut album &quot;Lost In Austin&quot; to the latest singles — 
              explore J-Kline&apos;s discography of hope and redemption.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-10"
          >
            <MusicFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </motion.div>

          {/* Music Grid */}
          <MusicGrid items={filteredItems} />

          {/* Videos Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Music Videos
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-center mb-10">
              Watch official music videos and audio tracks from J-Kline.
            </p>
            
            <VideoGrid videos={gridVideos} columns={3} showViews />
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
