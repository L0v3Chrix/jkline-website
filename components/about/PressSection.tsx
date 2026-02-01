"use client";

import { motion } from "framer-motion";
import { ExternalLink, Video, Newspaper, Mic, FileText } from "lucide-react";
import type { PressFeature } from "@/lib/content/press";

interface PressSectionProps {
  features: PressFeature[];
}

const typeIcons = {
  interview: Mic,
  article: FileText,
  podcast: Mic,
  video: Video,
};

const typeLabels = {
  interview: "Interview",
  article: "Article",
  podcast: "Podcast",
  video: "Video",
};

export function PressSection({ features }: PressSectionProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = typeIcons[feature.type] || Newspaper;
        
        return (
          <motion.a
            key={feature.url}
            href={feature.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 30px rgba(212, 175, 55, 0.15)",
            }}
            className="group block bg-[#1A1A1A] border border-[#333] rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-xs uppercase tracking-wider text-accent">
                  {typeLabels[feature.type]}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>

            {/* Source */}
            <p className="text-sm text-muted mb-2">{feature.source}</p>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
              {feature.title}
            </h3>

            {/* Excerpt */}
            {feature.excerpt && (
              <p className="text-sm text-muted/80 mb-4 line-clamp-3">
                {feature.excerpt}
              </p>
            )}

            {/* Date */}
            <p className="text-xs text-muted/60">{feature.date}</p>
          </motion.a>
        );
      })}
    </div>
  );
}
