"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  image,
  imageAlt = "",
  title,
  subtitle,
  children,
  className = "",
}: CardProps) {
  return (
    <motion.div
      className={`bg-[#1A1A1A] border border-[#333] rounded-lg overflow-hidden ${className}`}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 30px rgba(212, 175, 55, 0.15)",
      }}
      transition={{ duration: 0.2 }}
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold text-foreground mb-1">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-muted text-sm mb-4">{subtitle}</p>
        )}
        {children && <div className="text-foreground">{children}</div>}
      </div>
    </motion.div>
  );
}
