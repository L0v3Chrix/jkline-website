"use client";

import { motion } from "framer-motion";

interface DrippingDividerProps {
  color?: "gold" | "blue" | "red" | "grey" | "white";
  className?: string;
  animated?: boolean;
  flip?: boolean;
}

const colorMap = {
  gold: "text-accent",
  blue: "text-graffiti-blue",
  red: "text-graffiti-red",
  grey: "text-graffiti-grey",
  white: "text-white",
};

export function DrippingDivider({
  color = "gold",
  className = "",
  animated = true,
  flip = false,
}: DrippingDividerProps) {
  const colorClass = colorMap[color];

  const drips = [
    { x: "4%", height: 45, delay: 0, width: 4 },
    { x: "15%", height: 18, delay: 0.3, width: 3 },
    { x: "27%", height: 52, delay: 0.1, width: 5 },
    { x: "38%", height: 14, delay: 0.5, width: 2 },
    { x: "48%", height: 58, delay: 0.2, width: 4 },
    { x: "60%", height: 22, delay: 0.4, width: 3 },
    { x: "71%", height: 48, delay: 0.15, width: 4 },
    { x: "82%", height: 15, delay: 0.45, width: 2 },
    { x: "93%", height: 55, delay: 0.25, width: 5 },
  ];

  return (
    <div
      className={`relative w-full h-16 ${colorClass} ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      {/* Base line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-current" />

      {/* CSS drips */}
      <svg
        className="absolute top-0 left-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {drips.map((drip, i) => (
          <g key={i}>
            {animated ? (
              <motion.path
                d={`M0,0 Q2,${drip.height * 0.4} 0,${drip.height * 0.7} Q-2,${drip.height * 0.9} 0,${drip.height}`}
                stroke="currentColor"
                strokeWidth={drip.width}
                fill="none"
                strokeLinecap="round"
                style={{ x: drip.x, y: 4 }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: drip.delay,
                  ease: "easeOut",
                }}
              />
            ) : (
              <path
                d={`M0,0 Q2,${drip.height * 0.4} 0,${drip.height * 0.7} Q-2,${drip.height * 0.9} 0,${drip.height}`}
                stroke="currentColor"
                strokeWidth={drip.width}
                fill="none"
                strokeLinecap="round"
                style={{ transform: `translate(${drip.x}, 4px)` }}
              />
            )}
            {/* Drip bulb */}
            {animated ? (
              <motion.ellipse
                cx={0}
                cy={drip.height + 6}
                rx={drip.width * 0.8}
                ry={drip.width * 0.6}
                fill="currentColor"
                style={{ x: drip.x, y: 4 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: drip.delay + 1.2,
                  ease: "easeOut",
                }}
              />
            ) : (
              <ellipse
                cx={0}
                cy={drip.height + 6}
                rx={drip.width * 0.8}
                ry={drip.width * 0.6}
                fill="currentColor"
                style={{ transform: `translate(${drip.x}, 4px)` }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
