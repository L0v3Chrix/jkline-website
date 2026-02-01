"use client";

import { Instagram, Facebook, Youtube, Music } from "lucide-react";
import Link from "next/link";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/officialjkline/",
  facebook: "https://m.facebook.com/OfficialJKline/",
  youtube: "https://www.youtube.com/@officialjkline",
  spotify: "https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA",
} as const;

type Platform = keyof typeof SOCIAL_LINKS;

interface SocialIconProps {
  platform: Platform;
  size?: number;
  className?: string;
}

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  spotify: Music,
};

export function SocialIcon({ platform, size = 24, className = "" }: SocialIconProps) {
  const Icon = iconMap[platform];
  const href = SOCIAL_LINKS[platform];

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-muted hover:text-accent transition-colors duration-300 ${className}`}
      aria-label={`Follow J-Kline on ${platform}`}
    >
      <Icon size={size} />
    </Link>
  );
}

interface SocialIconsRowProps {
  size?: number;
  className?: string;
  platforms?: Platform[];
}

export function SocialIconsRow({
  size = 24,
  className = "",
  platforms = ["instagram", "facebook", "youtube", "spotify"],
}: SocialIconsRowProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {platforms.map((platform) => (
        <SocialIcon key={platform} platform={platform} size={size} />
      ))}
    </div>
  );
}
