"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { ExternalLink, Package, Bell, Music2, Disc3, Disc, Shirt, Sticker } from "lucide-react";
import { GraffitiText } from "@/components/effects";
import { motion } from "framer-motion";

// Platform brand colors and icons
const streamingPlatforms = [
  { 
    name: "Spotify", 
    url: "https://open.spotify.com/artist/61BHscy2iBylZylAjUBjgA",
    color: "#1DB954",
    bgGradient: "from-[#1DB954]/20 to-[#1DB954]/5",
    description: "Stream all albums & singles"
  },
  { 
    name: "Apple Music", 
    url: "https://music.apple.com/us/artist/j-kline/1461270336",
    color: "#FC3C44",
    bgGradient: "from-[#FC3C44]/20 to-[#FC3C44]/5",
    description: "Listen on Apple devices"
  },
  { 
    name: "Amazon Music", 
    url: "https://music.amazon.com/artists/B07R76F4PZ",
    color: "#FF9900",
    bgGradient: "from-[#FF9900]/20 to-[#FF9900]/5",
    description: "Stream with Prime"
  },
];

export default function ShopPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(process.env.NEXT_PUBLIC_FORMS_API_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'shopNotify',
          email: email,
          interest: 'merch'
        }),
        mode: 'no-cors'
      });
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error('Shop notify error:', error);
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 overflow-x-hidden">
      {/* Header */}
      <Section className="py-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <GraffitiText 
            variant="tag" 
            color="gold" 
            size="lg" 
            as="h1"
            animated={true}
          >
            Shop
          </GraffitiText>
          <p className="text-muted text-lg mt-4">
            Support the movement. Stream the music. Rep the brand.
          </p>
        </div>
      </Section>

      {/* Music Streaming Section */}
      <Section className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Music2 className="w-8 h-8 text-accent" />
            <h2 className="text-2xl font-bold text-foreground">Stream the Music</h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${platform.bgGradient} p-6 hover:border-white/30 transition-all duration-300`}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle at center, ${platform.color}20 0%, transparent 70%)` 
                  }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${platform.color}30` }}
                  >
                    <Disc3 className="w-6 h-6" style={{ color: platform.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-white transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted mb-4">{platform.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: platform.color }}>
                    <span>Listen Now</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* Merch Coming Soon Section */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background to-accent/5 p-8 md:p-12"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
              }} />
            </div>
            
            {/* Animated package icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Package className="w-10 h-10 text-accent" />
              </div>
            </motion.div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Merch Dropping Soon
              </h2>
              <p className="text-lg text-accent font-medium mb-4">
                🚚 Shipment on the way
              </p>
              
              {/* Product previews */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Disc className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground">CDs</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Disc3 className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground">Vinyl</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Shirt className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground">T-Shirts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Sticker className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground">Stickers</span>
                </div>
              </div>
              
              <p className="text-muted mb-8 max-w-md mx-auto">
                Official J-Kline gear is coming. Be the first to know when it drops.
              </p>

              {/* Notification Signup */}
              {isSubscribed ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-accent"
                >
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">You're on the list! We'll notify you.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors text-base"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Bell className="w-4 h-4" />
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
