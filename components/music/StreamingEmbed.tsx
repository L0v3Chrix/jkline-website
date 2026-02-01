"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface StreamingEmbedProps {
  spotifyUrl?: string;
  youtubeUrl?: string;
  appleMusicUrl?: string;
}

export default function StreamingEmbed({
  spotifyUrl,
  youtubeUrl,
  appleMusicUrl,
}: StreamingEmbedProps) {
  // Extract Spotify artist/album/track ID for embed
  const getSpotifyEmbedUrl = (url: string) => {
    // Handle artist URLs: https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA
    const artistMatch = url.match(/spotify\.com\/artist\/([a-zA-Z0-9]+)/);
    if (artistMatch) {
      return `https://open.spotify.com/embed/artist/${artistMatch[1]}?utm_source=generator&theme=0`;
    }
    
    // Handle album URLs
    const albumMatch = url.match(/spotify\.com\/album\/([a-zA-Z0-9]+)/);
    if (albumMatch) {
      return `https://open.spotify.com/embed/album/${albumMatch[1]}?utm_source=generator&theme=0`;
    }
    
    // Handle track URLs
    const trackMatch = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    if (trackMatch) {
      return `https://open.spotify.com/embed/track/${trackMatch[1]}?utm_source=generator&theme=0`;
    }
    
    return null;
  };

  const spotifyEmbedUrl = spotifyUrl ? getSpotifyEmbedUrl(spotifyUrl) : null;

  return (
    <div className="space-y-6">
      {/* Spotify Embed */}
      {spotifyEmbedUrl && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden"
        >
          <iframe
            src={spotifyEmbedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </motion.div>
      )}

      {/* Streaming Links */}
      <div className="flex flex-wrap gap-3">
        {spotifyUrl && (
          <motion.a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white font-semibold rounded-full hover:bg-[#1ed760] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
            <ExternalLink size={14} />
          </motion.a>
        )}

        {youtubeUrl && (
          <motion.a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-[#cc0000] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
            <ExternalLink size={14} />
          </motion.a>
        )}

        {appleMusicUrl && (
          <motion.a
            href={appleMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FA233B] to-[#FB5C74] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.364-1.29.44-2.27 1.22-2.91 2.42-.297.56-.46 1.16-.543 1.79-.05.38-.08.76-.093 1.14V18.24c.01.18.02.36.04.54.06.6.15 1.2.37 1.77.49 1.28 1.33 2.22 2.56 2.8.56.27 1.16.44 1.78.52.49.07.98.1 1.47.11h12.24c.27-.01.54-.02.81-.05.65-.06 1.29-.17 1.9-.42 1.24-.51 2.14-1.37 2.69-2.6.25-.56.41-1.14.49-1.75.05-.36.08-.73.09-1.1.01-.18.01-12.35.01-12.57zm-6.48 11.69c-.02.36-.14.69-.36.98-.24.32-.54.56-.9.72-.35.16-.72.22-1.1.2-.34-.02-.67-.1-.98-.25-.3-.14-.56-.33-.78-.58-.24-.28-.4-.6-.49-.95-.08-.32-.1-.64-.05-.97.06-.41.22-.78.47-1.1.27-.35.61-.61 1.01-.78.38-.16.77-.22 1.18-.18.35.03.68.12.99.29.33.18.61.42.83.72.21.3.35.63.4.99.05.3.04.6-.02.91zm-.04-4.71c-.01.26-.08.5-.2.72-.14.24-.32.44-.55.6-.24.17-.5.28-.79.34-.27.06-.55.07-.83.03-.26-.03-.51-.12-.74-.25-.25-.15-.46-.34-.63-.57-.18-.24-.31-.51-.38-.8-.07-.28-.08-.56-.04-.84.05-.34.17-.65.37-.93.2-.28.46-.5.76-.66.3-.16.62-.25.96-.27.31-.02.61.03.9.14.32.12.6.3.83.55.22.24.39.52.49.83.1.29.13.59.1.89z" />
            </svg>
            Apple Music
            <ExternalLink size={14} />
          </motion.a>
        )}
      </div>
    </div>
  );
}
