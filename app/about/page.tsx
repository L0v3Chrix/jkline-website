import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { VideoHero } from "@/components/about/VideoHero";
import { StorySection } from "@/components/about/StorySection";
import { Timeline } from "@/components/about/Timeline";
import { PressSection } from "@/components/about/PressSection";
import { RecoveryResources } from "@/components/about/RecoveryResources";
import { PhotoGallery, GalleryPhoto } from "@/components/about/PhotoGallery";
import { fullBio, credentials, milestones } from "@/lib/content/bio";
import { missionStatement } from "@/lib/content/quotes";
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
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Video Hero - Using "Last Time" which is about breaking cycles */}
        <VideoHero
          videoId="cdYJdgk2pnE"
          headline="My Story"
          subheadline="From the depths of addiction to becoming a voice of hope—this is the journey that shaped the music."
        />

        {/* Chapter 1: Origins */}
        <StorySection
          title="The Beginning"
          content={fullBio.intro}
          image="/images/about/photo-01.jpg"
          imageAlt="J-Kline portrait"
          imagePosition="right"
        />

        {/* Quote Break */}
        <StorySection
          variant="quote"
          title=""
          content=""
          quote={fullBio.tagline}
          quoteSource="J-Kline"
        />

        {/* Chapter 2: Finding Hip-Hop */}
        <StorySection
          title="Finding My Voice"
          content={fullBio.origins}
          image="/images/about/photo-03.jpg"
          imageAlt="J-Kline performing"
          imagePosition="left"
        />

        {/* Full-width image break */}
        <StorySection
          variant="full-width"
          title="Into The Darkness"
          content="The loss that would shape everything."
          image="/images/about/photo-05.jpg"
          imageAlt="J-Kline"
        />

        {/* Chapter 3: The Darkness */}
        <StorySection
          title="The Struggle"
          content={fullBio.darkness}
          image="/images/about/photo-07.jpg"
          imageAlt="J-Kline in studio"
          imagePosition="right"
        />

        {/* Quote Break */}
        <StorySection
          variant="quote"
          title=""
          content=""
          quote="My mission is to be a voice of hope, courage, and strength. That no matter what you're going through, you can make it out, you can bounce back, and it's never too late."
          quoteSource="J-Kline"
        />

        {/* Chapter 4: Redemption */}
        <StorySection
          title="The Comeback"
          content={fullBio.redemption}
          image="/images/about/photo-04.jpg"
          imageAlt="J-Kline"
          imagePosition="left"
        />

        {/* Full-width image break */}
        <StorySection
          variant="full-width"
          title="Today"
          content="Every bar carries the weight of experience. Every word is proof that you can come back from anything."
          image="/images/about/photo-02.jpg"
          imageAlt="J-Kline in studio"
        />

        {/* Chapter 5: Today */}
        <StorySection
          title="The Mission"
          content={fullBio.today}
          image="/images/about/photo-08.jpg"
          imageAlt="J-Kline performing"
          imagePosition="right"
        />

        {/* Timeline Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              The Journey
            </h2>
            <p className="text-muted">
              Key moments that shaped the story.
            </p>
          </div>
          <Timeline milestones={milestones} />
        </Section>

        {/* Photo Gallery Section */}
        <Section className="bg-background">
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

        {/* Credentials Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                More Than Music
              </h2>
              <p className="text-muted">
                A mission to inspire change.
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-center gap-3 bg-[#1A1A1A] border border-[#333] rounded-lg p-4 hover:border-accent/40 transition-colors"
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
