"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import Button from "@/components/ui/Button";

interface PricingTier {
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  highlight?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Performance",
    tagline: "Live Hip-Hop Experience",
    icon: Zap,
    features: [
      "30-90 minute live performance",
      "High-energy hip-hop set",
      "Sound check included",
      "Meet & greet available",
      "Social media promotion"
    ],
    cta: "Book Performance"
  },
  {
    name: "Speaking + Performance",
    tagline: "The Full J-Kline Experience",
    icon: Crown,
    features: [
      "Keynote or motivational talk",
      "Live performance set",
      "Q&A session with audience",
      "VIP meet & greet",
      "Extensive promotion",
      "Custom content available"
    ],
    highlight: true,
    cta: "Book Full Package"
  },
  {
    name: "Speaking Only",
    tagline: "Inspiring Keynote",
    icon: Star,
    features: [
      "30-60 minute keynote",
      "Powerful personal testimony",
      "Q&A session",
      "Meet & greet available",
      "Tailored to your audience"
    ],
    cta: "Book Speaking"
  }
];

interface PricingTiersProps {
  className?: string;
}

export function PricingTiers({ className = "" }: PricingTiersProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-3 ${className}`}>
      {tiers.map((tier, index) => {
        const Icon = tier.icon;
        return (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
              relative rounded-lg p-6 flex flex-col
              ${tier.highlight 
                ? "bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent shadow-lg shadow-accent/10" 
                : "bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333]"
              }
            `}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-xs font-bold rounded-full">
                MOST POPULAR
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tier.highlight ? "bg-accent text-background" : "bg-accent/10 text-accent"}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`font-bold ${tier.highlight ? "text-accent" : "text-foreground"}`}>
                  {tier.name}
                </h4>
                <p className="text-xs text-muted">{tier.tagline}</p>
              </div>
            </div>

            <div className="text-center py-4 border-y border-[#333] mb-4">
              <span className="text-muted text-sm">Starting at</span>
              <div className="text-2xl font-bold text-foreground">Custom Quote</div>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? "text-accent" : "text-accent/70"}`} />
                  <span className="text-muted">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#booking-form"
              variant={tier.highlight ? "primary" : "secondary"}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
