import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import StreamingLinks from "@/components/ui/StreamingLinks";
import { EgoFeature } from "@/components/home/EgoFeature";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { GraffitiText, DrippingDivider } from "@/components/effects";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero className="bg-gradient-to-b from-background via-background/95 to-background">
          {/* Subtle radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
          
          <div className="relative z-10 space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="text-accent">J</span>-KLINE
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted max-w-2xl mx-auto">
              Voice of Hope. Sound of Redemption.
            </p>
            
            <div className="pt-4">
              <Button href="/music" variant="primary" size="lg">
                Listen Now
              </Button>
            </div>
          </div>
        </Hero>

        {/* E.G.O. Feature Section - Hero Treatment */}
        <section className="relative bg-gradient-to-b from-background via-background/98 to-background">
          <EgoFeature />
        </section>

        {/* Streaming Platforms Section */}
        <Section className="bg-background/95">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-widest text-sm mb-2">
              Available On
            </p>
            <GraffitiText 
              variant="outline" 
              color="gold" 
              size="lg" 
              as="h2"
              animated={false}
            >
              Stream Everywhere
            </GraffitiText>
          </div>
          <StreamingLinks useGold />
        </Section>

        {/* Divider */}
        <DrippingDivider color="gold" animated={false} />

        {/* About Teaser Section */}
        <Section className="bg-gradient-to-b from-background/95 to-background">
          <AboutTeaser />
        </Section>
      </main>

      <Footer />
    </>
  );
}
