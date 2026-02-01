import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import StreamingLinks from "@/components/ui/StreamingLinks";
import { FeaturedRelease } from "@/components/home/FeaturedRelease";
import { AboutTeaser } from "@/components/home/AboutTeaser";

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

        {/* Featured Release Section */}
        <Section className="bg-gradient-to-b from-background to-background/95">
          <FeaturedRelease />
        </Section>

        {/* Streaming Platforms Section */}
        <Section className="bg-background/95">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-widest text-sm mb-2">
              Available On
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Stream Everywhere
            </h2>
          </div>
          <StreamingLinks useGold />
        </Section>

        {/* About Teaser Section */}
        <Section className="bg-gradient-to-b from-background/95 to-background">
          <AboutTeaser />
        </Section>
      </main>

      <Footer />
    </>
  );
}
