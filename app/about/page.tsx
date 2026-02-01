import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { BioSection } from "@/components/about/BioSection";
import { PressSection } from "@/components/about/PressSection";
import { 
  longBio, 
  credentials, 
  milestones 
} from "@/lib/content/bio";
import { 
  quotes, 
  missionStatement 
} from "@/lib/content/quotes";
import { pressFeatures } from "@/lib/content/press";
import { 
  Award, 
  CheckCircle, 
  Calendar 
} from "lucide-react";

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

        {/* Milestones Timeline */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Key Moments
              </h2>
              <p className="text-muted">
                The milestones that shaped the journey.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/30 hidden sm:block" />
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex gap-4 sm:gap-8 items-start"
                  >
                    {/* Year dot */}
                    <div className="hidden sm:flex flex-shrink-0 w-8 items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-[#1A1A1A] border border-[#333] rounded-lg p-4">
                      <span className="text-accent font-bold text-lg">
                        {milestone.year}
                      </span>
                      <p className="text-foreground mt-1">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
      </main>

      <Footer />
    </>
  );
}
