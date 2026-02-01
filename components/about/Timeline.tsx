"use client";

import { motion } from "framer-motion";

interface Milestone {
  year: number;
  event: string;
  detail?: string;
}

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20" />

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Year marker */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
            </div>

            {/* Content card */}
            <div
              className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
              }`}
            >
              <span className="text-accent font-bold text-lg">{milestone.year}</span>
              <h3 className="text-white font-semibold mt-1">{milestone.event}</h3>
              {milestone.detail && (
                <p className="text-muted text-sm mt-1">{milestone.detail}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
