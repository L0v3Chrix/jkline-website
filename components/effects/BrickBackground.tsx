"use client";

import { ReactNode } from "react";

interface BrickBackgroundProps {
  children: ReactNode;
  intensity?: "light" | "medium" | "heavy";
  className?: string;
  overlay?: boolean;
}

export function BrickBackground({
  children,
  intensity = "medium",
  className = "",
  overlay = true,
}: BrickBackgroundProps) {
  const opacityMap = {
    light: 0.1,
    medium: 0.2,
    heavy: 0.35,
  };

  return (
    <div className={`relative ${className}`}>
      {/* Brick pattern layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: opacityMap[intensity],
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 23px,
              #1a1a1a 23px,
              #1a1a1a 27px
            ),
            repeating-linear-gradient(
              90deg,
              #3a3a3a,
              #3a3a3a 48px,
              #1a1a1a 48px,
              #1a1a1a 52px
            )
          `,
          backgroundSize: "100px 50px",
        }}
      />
      
      {/* Offset row */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: opacityMap[intensity] * 0.8,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 23px,
              #1a1a1a 23px,
              #1a1a1a 27px
            ),
            repeating-linear-gradient(
              90deg,
              #383838,
              #383838 48px,
              #1a1a1a 48px,
              #1a1a1a 52px
            )
          `,
          backgroundSize: "100px 50px",
          backgroundPosition: "50px 25px",
        }}
      />

      {/* Grunge texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.15,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark overlay for readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
