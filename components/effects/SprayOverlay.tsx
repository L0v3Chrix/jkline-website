"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SprayOverlayProps {
  children: ReactNode;
  intensity?: "light" | "medium" | "heavy";
  color?: "gold" | "blue" | "red" | "grey" | "mixed";
  className?: string;
  animated?: boolean;
}

const intensityMap = {
  light: 0.03,
  medium: 0.06,
  heavy: 0.1,
};

const colorMap = {
  gold: "rgba(212, 175, 55, VAR)",
  blue: "rgba(0, 191, 255, VAR)",
  red: "rgba(220, 53, 69, VAR)",
  grey: "rgba(128, 128, 128, VAR)",
  mixed: "multi",
};

export function SprayOverlay({
  children,
  intensity = "medium",
  color = "gold",
  className = "",
  animated = true,
}: SprayOverlayProps) {
  const opacity = intensityMap[intensity];

  // Generate spray dots positions
  const generateSprayDots = (count: number, colorVal: string) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const dotOpacity = Math.random() * 0.5 + 0.2;
      dots.push({ x, y, size, opacity: dotOpacity, color: colorVal });
    }
    return dots;
  };

  const dotCount = intensity === "light" ? 30 : intensity === "medium" ? 60 : 100;
  
  const dots = color === "mixed"
    ? [
        ...generateSprayDots(dotCount / 3, "rgba(212, 175, 55, 1)"),
        ...generateSprayDots(dotCount / 3, "rgba(0, 191, 255, 1)"),
        ...generateSprayDots(dotCount / 3, "rgba(220, 53, 69, 1)"),
      ]
    : generateSprayDots(dotCount, colorMap[color].replace("VAR", "1"));

  return (
    <div className={`relative ${className}`}>
      {children}
      
      {/* Spray paint dots overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="sprayBlur">
              <feGaussianBlur stdDeviation="0.5" />
            </filter>
          </defs>
          {dots.map((dot, i) => (
            animated ? (
              <motion.circle
                key={i}
                cx={`${dot.x}%`}
                cy={`${dot.y}%`}
                r={dot.size}
                fill={dot.color}
                opacity={dot.opacity * opacity * 10}
                filter="url(#sprayBlur)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: dot.opacity * opacity * 10 }}
                transition={{
                  duration: 0.3,
                  delay: Math.random() * 0.8,
                }}
              />
            ) : (
              <circle
                key={i}
                cx={`${dot.x}%`}
                cy={`${dot.y}%`}
                r={dot.size}
                fill={dot.color}
                opacity={dot.opacity * opacity * 10}
                filter="url(#sprayBlur)"
              />
            )
          ))}
        </svg>
      </div>
    </div>
  );
}
