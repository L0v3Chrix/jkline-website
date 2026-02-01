"use client";

import { useState } from "react";
import { SocialIconsRow } from "@/components/ui/SocialIcons";
import { GraffitiText, DrippingDivider } from "@/components/effects";
import { Heart } from "lucide-react";

// "Come Home" video - different from SocialProof (Runaway) and other sections
const FOOTER_VIDEO_ID = "7cQ3hOFm8Ts";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Newsletter signup:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="overflow-hidden">
      {/* Newsletter Section - ABOVE the video */}
      <div className="bg-background border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Stay Connected
            </h3>
            <p className="text-muted text-sm mb-4">
              Get updates on new music, events, and exclusive content.
            </p>
            
            {isSubscribed ? (
              <p className="text-accent text-sm">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors text-base"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Video Background Section */}
      <div className="relative">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${FOOTER_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${FOOTER_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute w-full h-full pointer-events-none"
            style={{ 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%) scale(1.5)',
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Graffiti drip divider at top */}
        <DrippingDivider color="gold" flip className="absolute -top-4 left-0 right-0 z-10" animated={false} />
        
        <div className="container mx-auto px-4 sm:px-6 py-12 pt-16 relative z-10">
          {/* Social Icons - AT THE TOP of overlay */}
          <div className="flex justify-center mb-8">
            <SocialIconsRow size={24} />
          </div>

          {/* Recovery Helpline */}
          <div className="flex items-center justify-center gap-2 mb-6 text-sm">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-muted/80">Need help?</span>
            <a 
              href="tel:1-800-662-4357" 
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              1-800-662-4357
            </a>
            <span className="text-muted/60">(SAMHSA 24/7)</span>
          </div>

          {/* Tagline with graffiti style */}
          <div className="text-center mb-4">
            <GraffitiText 
              variant="outline" 
              color="gold" 
              size="sm" 
              as="span"
              animated={false}
              className="!text-lg"
            >
              Voice of Hope. Sound of Redemption.
            </GraffitiText>
          </div>

          {/* Copyright */}
          <p className="text-center text-muted text-sm">
            © {new Date().getFullYear()} J-Kline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
