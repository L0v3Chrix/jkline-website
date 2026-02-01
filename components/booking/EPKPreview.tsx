"use client";

import { motion } from "framer-motion";
import { FileText, Download, Image, Music, Video, FileCheck } from "lucide-react";
import Button from "@/components/ui/Button";

interface EPKItem {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const epkContents: EPKItem[] = [
  { name: "Professional Bio", description: "Short and extended versions", icon: FileText },
  { name: "Press Photos", description: "High-resolution promotional images", icon: Image },
  { name: "Music Samples", description: "Selected tracks and streaming links", icon: Music },
  { name: "Video Content", description: "Music videos and performance clips", icon: Video },
  { name: "Technical Rider", description: "Stage and sound requirements", icon: FileCheck },
];

interface EPKPreviewProps {
  className?: string;
}

export function EPKPreview({ className = "" }: EPKPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-6 border-b border-[#333]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
            <FileText className="w-6 h-6 text-background" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-foreground">Electronic Press Kit</h4>
            <p className="text-sm text-muted">Everything you need to promote the event</p>
          </div>
        </div>
      </div>

      {/* Contents Preview */}
      <div className="p-6">
        <h5 className="text-sm uppercase tracking-wider text-accent mb-4">What&apos;s Included</h5>
        <div className="space-y-3">
          {epkContents.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0D0D0D] border border-[#222]"
              >
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground">{item.name}</div>
                  <div className="text-xs text-muted">{item.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Download CTA */}
        <div className="mt-6 space-y-3">
          <Button
            href="/press"
            variant="primary"
            className="w-full"
          >
            <Download className="w-4 h-4 mr-2" />
            View Press Kit
          </Button>
          <p className="text-xs text-muted text-center">
            Need custom assets? <a href="/contact" className="text-accent hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
