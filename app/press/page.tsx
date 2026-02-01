import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SocialIconsRow } from "@/components/ui/SocialIcons";
import { PressSection } from "@/components/about/PressSection";
import { GraffitiText, SprayOverlay, DrippingDivider } from "@/components/effects";
import { shortBio, photoCredits } from "@/lib/content/bio";
import { pressFeatures, pressKitInfo } from "@/lib/content/press";
import { streamingLinks, contactEmail } from "@/lib/content/links";
import Image from "next/image";
import {
  Download,
  Camera,
  Music,
  Quote,
  Mail,
  ExternalLink,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Press Kit | J-Kline",
  description:
    "Download the official J-Kline press kit. High-res photos, artist bio, music links, and press inquiries. Hip-hop artist, recovery advocate, and voice of hope.",
};

const musicPlatforms = [
  {
    name: "Spotify",
    url: streamingLinks.spotify,
    icon: "🎵",
  },
  {
    name: "Apple Music",
    url: streamingLinks.appleMusic,
    icon: "🍎",
  },
  {
    name: "YouTube",
    url: streamingLinks.youtube,
    icon: "▶️",
  },
  {
    name: "Amazon Music",
    url: streamingLinks.amazonMusic,
    icon: "🎧",
  },
];

export default function PressPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-accent/10 to-transparent relative overflow-hidden">
          <SprayOverlay intensity="light" color="gold" className="absolute inset-0 pointer-events-none" animated={false}>
            <div className="absolute inset-0" />
          </SprayOverlay>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FileText className="w-16 h-16 text-accent mx-auto mb-6" />
            <GraffitiText 
              variant="tag" 
              color="gold" 
              size="xl" 
              as="h1"
              className="mb-4"
            >
              Press Kit
            </GraffitiText>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Everything you need for press coverage, interviews, and features.
              High-res assets, artist bio, and media resources.
            </p>
            <Button
              href="https://drive.google.com/drive/folders/your-press-kit-folder"
              variant="primary"
              size="lg"
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Download Press Kit
            </Button>
            <p className="text-sm text-muted/60 mt-4">
              ZIP file includes photos, bio, logos, and one-sheet
            </p>
          </div>
        </Section>

        {/* Divider */}
        <DrippingDivider color="gold" animated={false} />

        {/* Bio Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Artist Bio
              </h2>
              <p className="text-muted">For press releases and features</p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-6 sm:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                {shortBio}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <Button href="/about" variant="ghost" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Photos Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Press Photos
              </h2>
              <p className="text-muted">High-resolution images for media use</p>
            </div>

            {/* Photo Grid Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#1A1A1A] border border-[#333] rounded-lg flex items-center justify-center"
                >
                  <div className="text-center text-muted/40">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs">Photo {i}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                href="https://drive.google.com/drive/folders/your-photos-folder"
                variant="secondary"
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download All Photos (ZIP)
              </Button>
            </div>

            {/* Photo Credits */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-muted text-center">
                <span className="text-foreground font-medium">
                  Photo Credits:{" "}
                </span>
                {photoCredits
                  .map((c) => (c.company ? `${c.photographer} (${c.company})` : c.photographer))
                  .join(" • ")}
              </p>
            </div>
          </div>
        </Section>

        {/* Logo Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Logo & Branding
              </h2>
              <p className="text-muted">Official J-Kline logo assets</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Graffiti Logo - Dark BG */}
              <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center">
                <div className="bg-[#0D0D0D] rounded-lg p-8 mb-6">
                  <Image
                    src="/images/logo-jkline-graffiti.svg"
                    alt="J-Kline Graffiti Logo"
                    width={280}
                    height={50}
                    className="mx-auto h-12 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Graffiti Logo (Dark BG)
                </h3>
                <p className="text-sm text-muted mb-4">
                  Street art style, for dark backgrounds
                </p>
                <a
                  href="/images/logo-jkline-graffiti.svg"
                  download="jkline-logo-graffiti.svg"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download SVG
                </a>
              </div>

              {/* Clean Logo - Dark BG */}
              <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center">
                <div className="bg-[#0D0D0D] rounded-lg p-8 mb-6">
                  <Image
                    src="/images/logo-jkline-clean.svg"
                    alt="J-Kline Clean Logo"
                    width={280}
                    height={50}
                    className="mx-auto h-12 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Clean Logo (Dark BG)
                </h3>
                <p className="text-sm text-muted mb-4">
                  Professional style, for dark backgrounds
                </p>
                <a
                  href="/images/logo-jkline-clean.svg"
                  download="jkline-logo-clean.svg"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download SVG
                </a>
              </div>

              {/* Clean Logo - Light BG */}
              <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center">
                <div className="bg-white rounded-lg p-8 mb-6">
                  <Image
                    src="/images/logo-jkline-clean.svg"
                    alt="J-Kline Clean Logo on Light"
                    width={280}
                    height={50}
                    className="mx-auto h-12 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Clean Logo (Light BG)
                </h3>
                <p className="text-sm text-muted mb-4">
                  Professional style, for light backgrounds
                </p>
                <a
                  href="/images/logo-jkline-clean.svg"
                  download="jkline-logo-clean.svg"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download SVG
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Music Links Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Music className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Listen & Stream
              </h2>
              <p className="text-muted">Official music on all platforms</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#1A1A1A] border border-[#333] rounded-lg p-6 text-center hover:border-accent/50 hover:bg-[#1A1A1A]/80 transition-all duration-300"
                >
                  <span className="text-3xl block mb-3">{platform.icon}</span>
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {platform.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted/40 mx-auto mt-2 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Press Features Section */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Quote className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Press Features
              </h2>
              <p className="text-muted">
                Featured interviews and media coverage
              </p>
            </div>

            <PressSection features={pressFeatures} />
          </div>
        </Section>

        {/* Press Contact Section */}
        <Section className="bg-gradient-to-t from-accent/10 to-transparent">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Press Inquiries
            </h2>
            <p className="text-muted mb-6">
              For interviews, features, booking, or media requests, reach out
              directly.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-6 sm:p-8 mb-8">
              <p className="text-sm text-muted mb-2">Email</p>
              <a
                href={`mailto:${contactEmail}?subject=Press Inquiry - J-Kline`}
                className="text-xl sm:text-2xl text-accent hover:text-accent-hover transition-colors font-medium break-all"
              >
                {contactEmail}
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted">Connect on Social Media</p>
              <SocialIconsRow size={32} className="justify-center" />
            </div>
          </div>
        </Section>

        {/* Press Kit Includes */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0D0D0D] border border-[#333] rounded-xl p-6 sm:p-8">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-6 text-center">
                Press Kit Includes
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {pressKitInfo.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Button
                  href="https://drive.google.com/drive/folders/your-press-kit-folder"
                  variant="primary"
                  className="gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Press Kit
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
