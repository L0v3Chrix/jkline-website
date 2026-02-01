"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface GraffitiTextProps {
  children: ReactNode;
  variant?: "tag" | "stencil" | "drip" | "outline";
  color?: "gold" | "blue" | "red" | "grey" | "white";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  animated?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

const colorMap = {
  gold: { main: "#D4AF37", shadow: "#8B7224" },
  blue: { main: "#00BFFF", shadow: "#0080AA" },
  red: { main: "#DC3545", shadow: "#922B35" },
  grey: { main: "#6B7280", shadow: "#374151" },
  white: { main: "#FFFFFF", shadow: "#A0A0A0" },
};

const sizeMap = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-7xl",
  "2xl": "text-7xl md:text-8xl",
};

export function GraffitiText({
  children,
  variant = "tag",
  color = "gold",
  size = "lg",
  className = "",
  animated = true,
  as: Component = "span",
}: GraffitiTextProps) {
  const colors = colorMap[color];
  const sizeClass = sizeMap[size];

  const getVariantStyles = (): CSSProperties => {
    switch (variant) {
      case "tag":
        return {
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: colors.main,
          textShadow: `
            3px 3px 0 ${colors.shadow},
            -1px -1px 0 ${colors.shadow},
            1px -1px 0 ${colors.shadow},
            -1px 1px 0 ${colors.shadow},
            4px 4px 8px rgba(0,0,0,0.5)
          `,
          transform: "skewX(-3deg)",
          display: "inline-block",
        };
      case "stencil":
        return {
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          fontWeight: 900,
          letterSpacing: "0.05em",
          textTransform: "uppercase" as const,
          color: colors.main,
          textShadow: `
            2px 2px 4px rgba(0,0,0,0.8),
            0 0 20px ${colors.main}40
          `,
          WebkitTextStroke: `1px ${colors.shadow}`,
        };
      case "drip":
        return {
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          fontWeight: 900,
          letterSpacing: "-0.01em",
          color: colors.main,
          textShadow: `
            2px 2px 0 ${colors.shadow},
            4px 8px 4px rgba(0,0,0,0.4)
          `,
          position: "relative" as const,
        };
      case "outline":
        return {
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          fontWeight: 900,
          letterSpacing: "0.02em",
          color: "transparent",
          WebkitTextStroke: `2px ${colors.main}`,
          textShadow: `0 0 8px ${colors.main}30`,
        };
      default:
        return {};
    }
  };

  const MotionComponent = motion[Component] as typeof motion.span;

  const content = (
    <>
      {children}
      {variant === "drip" && (
        <svg
          className="absolute -bottom-4 left-0 w-full h-8 overflow-visible"
          preserveAspectRatio="none"
          style={{ color: colors.main }}
        >
          {/* Drip paths for text */}
          <path
            d="M10,0 Q12,8 10,15 Q9,20 10,25"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="10" cy="27" rx="2" ry="2" fill="currentColor" />
          
          <path
            d="M45,0 Q47,5 45,10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="45" cy="12" rx="1.5" ry="1.5" fill="currentColor" />
          
          <path
            d="M80,0 Q82,12 80,22 Q79,28 80,32"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="80" cy="35" rx="3" ry="2.5" fill="currentColor" />
        </svg>
      )}
    </>
  );

  if (animated) {
    return (
      <MotionComponent
        className={`${sizeClass} ${className}`}
        style={getVariantStyles()}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {content}
      </MotionComponent>
    );
  }

  return (
    <Component className={`${sizeClass} ${className}`} style={getVariantStyles()}>
      {content}
    </Component>
  );
}
