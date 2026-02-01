"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface DrippingDividerProps {
  color?: "gold" | "blue" | "red" | "grey" | "white";
  className?: string;
  animated?: boolean;
  flip?: boolean;
  /** Seed for consistent randomization (default: 42) */
  seed?: number;
}

const colorMap = {
  gold: "text-accent",
  blue: "text-graffiti-blue",
  red: "text-graffiti-red",
  grey: "text-graffiti-grey",
  white: "text-white",
};

// Seeded random number generator for consistent results
function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 2147483648;
    return state / 2147483648;
  };
}

// Generate organic drip pattern
function generateDrips(seed: number) {
  const random = seededRandom(seed);
  const drips: Array<{
    x: number;
    height: number;
    delay: number;
    width: number;
    curveDirection: number; // -1 = left, 0 = straight, 1 = right
    curveIntensity: number;
    wobble: number;
  }> = [];

  // Create clusters with gaps - more organic distribution
  // Define 3-4 cluster zones with varying density
  const clusterZones = [
    { start: 2, end: 18, density: 0.6 },   // Left cluster
    { start: 22, end: 38, density: 0.4 },  // Left-center (sparser)
    { start: 45, end: 62, density: 0.7 },  // Center cluster (dense)
    { start: 68, end: 78, density: 0.3 },  // Right-center (very sparse)
    { start: 82, end: 98, density: 0.55 }, // Right cluster
  ];

  clusterZones.forEach((zone) => {
    const zoneWidth = zone.end - zone.start;
    // More drips in denser zones
    const numDrips = Math.floor(zoneWidth * zone.density * 0.15) + 1;
    
    for (let i = 0; i < numDrips; i++) {
      // Position with some randomness within zone
      const basePos = zone.start + (zoneWidth * (i + 0.5)) / numDrips;
      const jitter = (random() - 0.5) * (zoneWidth / numDrips) * 0.8;
      const x = Math.max(zone.start, Math.min(zone.end, basePos + jitter));

      // Highly varied heights - some very short, some very long
      const heightRoll = random();
      let height: number;
      if (heightRoll < 0.2) {
        // 20% very short drips (8-18px)
        height = 8 + random() * 10;
      } else if (heightRoll < 0.5) {
        // 30% medium drips (20-40px)
        height = 20 + random() * 20;
      } else if (heightRoll < 0.8) {
        // 30% long drips (42-65px)
        height = 42 + random() * 23;
      } else {
        // 20% extra long drips (68-90px)
        height = 68 + random() * 22;
      }

      // Varied widths - some thin, some thick
      const widthRoll = random();
      let width: number;
      if (widthRoll < 0.25) {
        width = 2; // thin
      } else if (widthRoll < 0.6) {
        width = 3; // medium-thin
      } else if (widthRoll < 0.85) {
        width = 4; // medium
      } else {
        width = 5 + random() * 1.5; // thick
      }

      // Curve direction and intensity
      const curveRoll = random();
      const curveDirection = curveRoll < 0.35 ? -1 : curveRoll < 0.65 ? 0 : 1;
      const curveIntensity = 1 + random() * 3; // How pronounced the curve is

      // Subtle wobble for imperfection
      const wobble = (random() - 0.5) * 2;

      drips.push({
        x,
        height,
        delay: random() * 0.6,
        width,
        curveDirection,
        curveIntensity,
        wobble,
      });
    }
  });

  // Sort by x position for rendering order
  return drips.sort((a, b) => a.x - b.x);
}

// Generate SVG path for a drip with organic curves
function generateDripPath(drip: {
  height: number;
  curveDirection: number;
  curveIntensity: number;
  wobble: number;
}): string {
  const { height, curveDirection, curveIntensity, wobble } = drip;
  
  if (curveDirection === 0) {
    // Mostly straight with subtle wobble
    const w = wobble * 0.5;
    return `M0,0 
            Q${w},${height * 0.3} ${w * 0.5},${height * 0.5}
            Q${-w * 0.3},${height * 0.75} 0,${height}`;
  }
  
  // Curved drip
  const dir = curveDirection;
  const intensity = curveIntensity;
  
  return `M0,0 
          Q${dir * intensity * 0.5 + wobble},${height * 0.25} ${dir * intensity},${height * 0.45}
          Q${dir * intensity * 1.2},${height * 0.65} ${dir * intensity * 0.8},${height * 0.8}
          Q${dir * intensity * 0.4},${height * 0.92} ${dir * intensity * 0.2},${height}`;
}

export function DrippingDivider({
  color = "gold",
  className = "",
  animated = true,
  flip = false,
  seed = 42,
}: DrippingDividerProps) {
  const colorClass = colorMap[color];

  // Memoize drips so they're consistent across re-renders
  const drips = useMemo(() => generateDrips(seed), [seed]);

  return (
    <div
      className={`relative w-full h-24 ${colorClass} ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      {/* Base line - THICKER for emphasis */}
      <div 
        className="absolute top-0 left-0 right-0 bg-current" 
        style={{ height: "6px" }} 
      />

      {/* Drips */}
      <svg
        className="absolute top-0 left-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {drips.map((drip, i) => {
          const path = generateDripPath(drip);
          const bulbOffsetX = drip.curveDirection * drip.curveIntensity * 0.2;
          
          return (
            <g key={i}>
              {animated ? (
                <motion.path
                  d={path}
                  stroke="currentColor"
                  strokeWidth={drip.width}
                  fill="none"
                  strokeLinecap="round"
                  style={{ x: `${drip.x}%`, y: 6 }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.2 + drip.height * 0.01,
                    delay: drip.delay,
                    ease: "easeOut",
                  }}
                />
              ) : (
                <path
                  d={path}
                  stroke="currentColor"
                  strokeWidth={drip.width}
                  fill="none"
                  strokeLinecap="round"
                  style={{ transform: `translate(${drip.x}%, 6px)` }}
                />
              )}
              
              {/* Drip bulb at bottom - sized relative to drip width */}
              {animated ? (
                <motion.ellipse
                  cx={bulbOffsetX}
                  cy={drip.height + 4}
                  rx={drip.width * 0.9}
                  ry={drip.width * 0.7}
                  fill="currentColor"
                  style={{ x: `${drip.x}%`, y: 6 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: drip.delay + 0.9 + drip.height * 0.008,
                    ease: "easeOut",
                  }}
                />
              ) : (
                <ellipse
                  cx={bulbOffsetX}
                  cy={drip.height + 4}
                  rx={drip.width * 0.9}
                  ry={drip.width * 0.7}
                  fill="currentColor"
                  style={{ transform: `translate(${drip.x}%, 6px)` }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
