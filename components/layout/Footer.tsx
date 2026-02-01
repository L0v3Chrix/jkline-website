"use client";

import { useState } from "react";
import { SocialIconsRow } from "@/components/ui/SocialIcons";

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
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="max-w-md mx-auto text-center mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Stay Connected
          </h3>
          <p className="text-muted text-sm mb-4">
            Get updates on new music, events, and exclusive content.
          </p>
          
          {isSubscribed ? (
            <p className="text-accent text-sm">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Join
              </button>
            </form>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mb-8">
          <SocialIconsRow size={24} />
        </div>

        {/* Tagline */}
        <p className="text-center text-muted/60 text-sm italic mb-4">
          Voice of Hope. Sound of Redemption.
        </p>

        {/* Copyright */}
        <p className="text-center text-muted text-sm">
          © {new Date().getFullYear()} J-Kline. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
