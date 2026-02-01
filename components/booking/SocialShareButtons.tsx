"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Check, Link2, MessageCircle } from "lucide-react";

interface SharePlatform {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  getShareUrl: (url: string, text: string) => string;
}

// Custom icons for social platforms
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const sharePlatforms: SharePlatform[] = [
  {
    name: "X / Twitter",
    icon: TwitterIcon,
    color: "#000000",
    getShareUrl: (url, text) => 
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    color: "#1877F2",
    getShareUrl: (url) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    color: "#0A66C2",
    getShareUrl: (url, text) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }
];

const shareTexts: Record<string, string> = {
  default: "Check out J-Kline - Austin hip-hop artist, motivational speaker, and recovery advocate. Book him for your next event! 🎤",
  twitter: "🎤 Looking for an inspiring performer for your event? Check out @officialjkline - Austin hip-hop artist & recovery advocate bringing hope through music",
  facebook: "J-Kline brings high-energy performances and powerful messages of hope and resilience. Book him for your next event!",
  linkedin: "Seeking an inspiring speaker or performer for your next corporate event, conference, or community gathering? J-Kline combines hip-hop artistry with powerful messages of resilience and recovery."
};

interface SocialShareButtonsProps {
  className?: string;
  compact?: boolean;
}

export function SocialShareButtons({ className = "", compact = false }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(!compact);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "https://jklinemusic.com/events";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (platform: SharePlatform) => {
    const text = platform.name.toLowerCase().includes("twitter") 
      ? shareTexts.twitter 
      : platform.name.toLowerCase().includes("linkedin")
        ? shareTexts.linkedin
        : shareTexts.default;
    
    const shareUrl = platform.getShareUrl(pageUrl, text);
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  if (compact) {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-full text-sm text-muted hover:text-accent hover:border-accent transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full mt-2 right-0 bg-[#1A1A1A] border border-[#333] rounded-lg p-3 z-50 min-w-[200px]"
            >
              <div className="flex gap-2 mb-3">
                {sharePlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <button
                      key={platform.name}
                      onClick={() => handleShare(platform)}
                      className="p-2 rounded-lg bg-[#222] hover:bg-accent/20 transition-colors group"
                      title={`Share on ${platform.name}`}
                    >
                      <Icon className="w-5 h-5 text-muted group-hover:text-accent" />
                    </button>
                  );
                })}
              </div>
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#222] hover:bg-accent/20 transition-colors text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4 text-muted" />
                    <span className="text-muted">Copy Link</span>
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Share2 className="w-5 h-5 text-accent" />
        <h4 className="font-semibold text-foreground">Share This Page</h4>
      </div>
      
      <p className="text-sm text-muted mb-4">
        Know someone looking for a powerful performer or speaker? Share J-Kline with them!
      </p>

      <div className="flex flex-wrap gap-3 mb-4">
        {sharePlatforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.name}
              onClick={() => handleShare(platform)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222] border border-[#333] hover:border-accent hover:bg-accent/10 transition-all group"
            >
              <Icon className="w-5 h-5 text-muted group-hover:text-accent" />
              <span className="text-sm text-muted group-hover:text-foreground">{platform.name}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={handleCopyLink}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-green-500 font-medium">Link Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Copy Link</span>
          </>
        )}
      </button>

      <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
        <p className="text-xs text-muted text-center">
          <MessageCircle className="w-3 h-3 inline mr-1" />
          Tag <span className="text-accent font-semibold">@officialjkline</span> when you book!
        </p>
      </div>
    </div>
  );
}
