"use client";

/**
 * GRAFFITI EFFECTS DEMO
 * 
 * This component demonstrates all available street art effects.
 * Import from components/effects for production use.
 * 
 * Available Components:
 * - GraffitiText: Tag-style typography with variants (tag, stencil, drip, outline)
 * - DrippingDivider: Section divider with animated paint drips
 * - SprayOverlay: Adds spray paint dots overlay to any content
 * - BrickBackground: Urban brick wall texture background
 * 
 * CSS Utilities (in globals.css):
 * - .texture-spray: Spray paint noise overlay
 * - .texture-brick: Brick wall pattern
 * - .text-stencil: Banksy-style stencil text
 * - .text-tag: Graffiti tag style text
 * - .border-drip: Dripping paint border effect
 * - .glow-gold, .glow-blue, .glow-red: Neon glow effects
 * - .edge-worn: Grunge/worn edge mask
 * 
 * Colors (Tailwind):
 * - text-graffiti-blue (#00BFFF)
 * - text-graffiti-red (#DC3545)
 * - text-graffiti-grey (#6B7280)
 * - bg-graffiti-* for backgrounds
 */

import { GraffitiText } from "./GraffitiText";
import { DrippingDivider } from "./DrippingDivider";
import { SprayOverlay } from "./SprayOverlay";
import { BrickBackground } from "./BrickBackground";

export function GraffitiDemo() {
  return (
    <div className="space-y-16 py-16">
      {/* Typography Variants */}
      <section className="space-y-8 px-8">
        <h2 className="text-muted uppercase tracking-widest text-sm">Typography Variants</h2>
        
        <div className="space-y-6">
          <GraffitiText variant="tag" color="gold" size="xl">
            J-KLINE TAG STYLE
          </GraffitiText>
          
          <GraffitiText variant="stencil" color="white" size="lg">
            STENCIL STYLE
          </GraffitiText>
          
          <GraffitiText variant="drip" color="gold" size="xl">
            DRIP STYLE
          </GraffitiText>
          
          <GraffitiText variant="outline" color="blue" size="xl">
            OUTLINE STYLE
          </GraffitiText>
        </div>
      </section>

      {/* Dripping Dividers */}
      <section className="space-y-8">
        <h2 className="text-muted uppercase tracking-widest text-sm px-8">Dripping Dividers</h2>
        
        <DrippingDivider color="gold" />
        <div className="h-8" />
        <DrippingDivider color="blue" />
        <div className="h-8" />
        <DrippingDivider color="red" flip />
      </section>

      {/* Spray Overlay */}
      <section className="space-y-8 px-8">
        <h2 className="text-muted uppercase tracking-widest text-sm">Spray Overlay</h2>
        
        <SprayOverlay intensity="medium" color="mixed">
          <div className="bg-graffiti-dark-grey p-12 rounded-lg">
            <GraffitiText variant="stencil" color="gold" size="lg">
              REDEMPTION
            </GraffitiText>
          </div>
        </SprayOverlay>
      </section>

      {/* Brick Background */}
      <section className="space-y-8">
        <h2 className="text-muted uppercase tracking-widest text-sm px-8">Brick Background</h2>
        
        <BrickBackground intensity="medium" className="py-16">
          <div className="text-center">
            <GraffitiText variant="tag" color="gold" size="2xl">
              J-KLINE
            </GraffitiText>
            <p className="text-muted mt-4">Raw. Authentic. Redemption.</p>
          </div>
        </BrickBackground>
      </section>

      {/* CSS Utility Classes */}
      <section className="space-y-8 px-8">
        <h2 className="text-muted uppercase tracking-widest text-sm">CSS Utilities</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="texture-spray bg-background p-8 border border-muted/20 rounded-lg">
            <span className="text-stencil text-2xl text-accent">TEXTURE-SPRAY</span>
          </div>
          
          <div className="texture-brick p-8 rounded-lg">
            <span className="text-tag text-2xl text-accent">TEXTURE-BRICK</span>
          </div>
          
          <div className="bg-background p-8 border border-muted/20 rounded-lg">
            <span className="text-4xl font-bold glow-gold text-accent">GLOW-GOLD</span>
          </div>
          
          <div className="bg-background p-8 border border-muted/20 rounded-lg">
            <span className="text-4xl font-bold glow-blue text-graffiti-blue">GLOW-BLUE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
