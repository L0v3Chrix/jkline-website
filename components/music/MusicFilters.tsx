"use client";

import { motion } from "framer-motion";

type FilterType = "all" | "album" | "single";

interface MusicFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "album", label: "Albums" },
  { value: "single", label: "Singles" },
];

export default function MusicFilters({
  activeFilter,
  onFilterChange,
}: MusicFiltersProps) {
  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className="relative px-4 py-2 text-sm uppercase tracking-widest transition-colors"
        >
          <span
            className={`${
              activeFilter === filter.value
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            } transition-colors`}
          >
            {filter.label}
          </span>
          {activeFilter === filter.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
