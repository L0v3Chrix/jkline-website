"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import MusicFilters from "@/components/music/MusicFilters";
import MusicGrid from "@/components/music/MusicGrid";
import { VideoGrid } from "@/components/video";
import { GraffitiText, DrippingDivider } from "@/components/effects";
import { discography } from "@/lib/content/discography";
import { videos, featuredVideo } from "@/lib/content/videos";

type FilterType = "all" | "album" | "single";

export default function MusicPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("single");

  const filteredItems =
    activeFilter === "all"
      ? discography
      : discography.filter((item) => item.type === activeFilter);

  // Get all videos except the featured one for the grid
  const gridVideos = videos.filter((v) => v.id !== featuredVideo?.id);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-full">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <GraffitiText 
              variant="tag" 
              color="gold" 
              size="xl" 
              as="h1"
              className="mb-4"
            >
              Music
            </GraffitiText>
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

          {/* Divider */}
          <DrippingDivider color="gold" className="my-16" animated={false} />

          {/* Videos Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <div className="text-center mb-10">
              <GraffitiText 
                variant="stencil" 
                color="gold" 
                size="lg" 
                as="h2"
                className="mb-4"
              >
                Music Videos
              </GraffitiText>
              <p className="text-muted max-w-2xl mx-auto">
                Watch official music videos and audio tracks from J-Kline.
              </p>
            </div>
            
            <VideoGrid videos={gridVideos} columns={3} showViews />
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
