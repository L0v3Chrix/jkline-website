"use client";

import { motion } from "framer-motion";

interface BioSectionProps {
  bio: string;
}

export function BioSection({ bio }: BioSectionProps) {
  const paragraphs = bio.split('\n\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg prose-invert max-w-none"
    >
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-muted text-lg leading-relaxed mb-6 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </motion.div>
  );
}
