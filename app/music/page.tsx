"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import MusicFilters from "@/components/music/MusicFilters";
import MusicGrid from "@/components/music/MusicGrid";
import { discography } from "@/lib/content/discography";

type FilterType = "all" | "album" | "single";

export default function MusicPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredItems =
    activeFilter === "all"
      ? discography
      : discography.filter((item) => item.type === activeFilter);

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
        </div>
      </main>
      <Footer />
    </>
  );
}
