"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Album } from "@/lib/content/discography";

interface MusicGridProps {
  items: Album[];
}

export default function MusicGrid({ items }: MusicGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link href={`/music/${item.slug}`}>
            <motion.div
              className="bg-[#1A1A1A] border border-[#333] rounded-lg overflow-hidden cursor-pointer"
              whileHover={{
                y: -4,
                boxShadow: "0 8px 30px rgba(212, 175, 55, 0.15)",
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Album artwork placeholder */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#0D0D0D] flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-accent text-4xl font-bold">
                    {item.title.charAt(0)}
                  </span>
                  <p className="text-muted text-xs mt-2 uppercase tracking-widest">
                    {item.type}
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-accent/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">
                  {item.year} • {item.type === "album" ? "Album" : "Single"}
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
