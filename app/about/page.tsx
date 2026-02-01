import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { BioSection } from "@/components/about/BioSection";
import { PressSection } from "@/components/about/PressSection";
import { RecoveryResources } from "@/components/about/RecoveryResources";
import { PhotoGallery, GalleryPhoto } from "@/components/about/PhotoGallery";
import { 
  longBio, 
  credentials 
} from "@/lib/content/bio";
import { 
  quotes, 
  missionStatement 
} from "@/lib/content/quotes";
import { pressFeatures } from "@/lib/content/press";
import { 
  Award, 
  CheckCircle,
  Camera
} from "lucide-react";

// Photo gallery data
const aboutPhotos: GalleryPhoto[] = [
  { src: "/images/about/photo-01.jpg", alt: "J-Kline performance", credit: "Pics By G" },
  { src: "/images/about/photo-02.jpg", alt: "J-Kline in studio", credit: "626Capture" },
  { src: "/images/about/photo-03.jpg", alt: "J-Kline live show", credit: "Legendary Photos" },
  { src: "/images/about/photo-04.jpg", alt: "J-Kline portrait", credit: "Pics By G" },
  { src: "/images/about/photo-05.jpg", alt: "J-Kline backstage", credit: "626Capture" },
  { src: "/images/about/photo-06.jpg", alt: "J-Kline concert", credit: "Legendary Photos" },
  { src: "/images/about/photo-07.jpg", alt: "J-Kline recording", credit: "Pics By G" },
  { src: "/images/about/photo-08.jpg", alt: "J-Kline performing", credit: "626Capture" },
  { src: "/images/about/photo-09.jpg", alt: "J-Kline on stage", credit: "Legendary Photos" },
  { src: "/images/about/photo-10.jpg", alt: "J-Kline candid", credit: "Pics By G" },
];

export const metadata = {
  title: "About | J-Kline",
  description: "The story of J-Kline - from addiction and homelessness to hope and redemption. Hip-hop artist, certified life coach, and recovery advocate.",
};

export default function AboutPage() {
  const featuredQuote = quotes[0];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-accent/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              My Story
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From the depths of addiction to becoming a voice of hope—this is the journey that shaped the music.
            </p>
          </div>
        </Section>

        {/* Bio Section */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <BioSection bio={longBio} />
          </div>
        </Section>

        {/* Photo Gallery Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Life &amp; Performances
              </h2>
              <p className="text-muted">
                Moments captured on the journey.
              </p>
            </div>
            <PhotoGallery photos={aboutPhotos} />
          </div>
        </Section>

        {/* Featured Quote */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-accent/20 font-serif">
                "
              </span>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic">
                {featuredQuote.text}
              </p>
              <span className="absolute -bottom-16 -right-4 text-8xl text-accent/20 font-serif rotate-180">
                "
              </span>
            </blockquote>
            {featuredQuote.source && (
              <p className="text-sm text-muted mt-8">
                — {featuredQuote.source}, {featuredQuote.date}
              </p>
            )}
          </div>
        </Section>

        {/* Credentials Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Credentials & Roles
              </h2>
              <p className="text-muted">
                More than music—a mission to inspire change.
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-center gap-3 bg-[#1A1A1A] border border-[#333] rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Press Section */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              In The Press
            </h2>
            <p className="text-muted">
              Sharing the story across platforms.
            </p>
          </div>
          
          <PressSection features={pressFeatures} />
        </Section>

        {/* Mission Statement */}
        <Section className="bg-gradient-to-t from-accent/10 to-transparent">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-6">
              The Mission
            </h2>
            <p className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed">
              {missionStatement}
            </p>
          </div>
        </Section>

        {/* Recovery Resources */}
        <Section>
          <RecoveryResources />
        </Section>
      </main>

      <Footer />
    </>
  );
}
