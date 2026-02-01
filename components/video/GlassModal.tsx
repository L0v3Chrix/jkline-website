"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getEmbedUrl } from "@/lib/content/videos";
import type { Video } from "@/lib/content/videos";

interface GlassModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function GlassModal({ video, isOpen, onClose }: GlassModalProps) {
  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Glass Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass morphic card */}
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Close button - glass style */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white/80 transition-all hover:bg-black/60 hover:text-white hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Video container */}
              <div className="relative aspect-video w-full bg-black/60">
                <iframe
                  src={getEmbedUrl(video.videoId, true)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* Video info - glass panel */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-black/20 border-t border-white/10"
              >
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {video.title}
                  {video.featuring && (
                    <span className="font-normal text-white/60">
                      {" "}ft. {video.featuring}
                    </span>
                  )}
                </h3>
                {video.description && (
                  <p className="mt-2 text-sm text-white/50 md:text-base">
                    {video.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-4 text-sm text-white/40">
                  {video.views && <span>{video.views} views</span>}
                  {video.year && <span>• {video.year}</span>}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
