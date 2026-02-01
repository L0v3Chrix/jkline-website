"use client";

import { Music, Music2, Youtube } from "lucide-react";

interface StreamingLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const streamingLinks: StreamingLink[] = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA",
    icon: <Music className="w-5 h-5" />,
    color: "#1DB954",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/j-kline/1461270336",
    icon: <Music2 className="w-5 h-5" />,
    color: "#FA243C",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@officialjkline",
    icon: <Youtube className="w-5 h-5" />,
    color: "#FF0000",
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/artists/B07R76F4PZ/j-kline",
    icon: <Music className="w-5 h-5" />,
    color: "#00A8E1",
  },
];

interface StreamingLinksProps {
  useGold?: boolean;
  className?: string;
}

export default function StreamingLinks({
  useGold = false,
  className = "",
}: StreamingLinksProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      {streamingLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
          style={{
            borderColor: useGold ? "#D4AF37" : link.color,
            color: useGold ? "#D4AF37" : link.color,
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = useGold ? "#D4AF37" : link.color;
            target.style.color = "#0A0A0A";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = "transparent";
            target.style.color = useGold ? "#D4AF37" : link.color;
          }}
        >
          {link.icon}
          <span className="font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
