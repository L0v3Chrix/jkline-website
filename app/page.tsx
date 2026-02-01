import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import StreamingLinks from "@/components/ui/StreamingLinks";
import { EgoFeature } from "@/components/home/EgoFeature";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { SocialProof } from "@/components/home/SocialProof";
import { GraffitiText, DrippingDivider } from "@/components/effects";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* E.G.O. Feature Section - Now the Hero */}
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

        {/* Social Proof Section */}
        <SocialProof />
      </main>

      <Footer />
    </>
  );
}
