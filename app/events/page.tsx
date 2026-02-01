import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { GraffitiText, SprayOverlay, DrippingDivider } from "@/components/effects";
import { 
  EventTypeSelector,
  StatsSection,
  TestimonialsSection,
  FAQAccordion,
  SocialShareButtons,
  PricingTiers,
  BookingForm,
  EPKPreview,
  AvailabilityCalendar
} from "@/components/booking";
import { 
  ArrowRight, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles,
  Star,
  HelpCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredVideo, getVideoThumbnail } from "@/lib/content/videos";

export const metadata = {
  title: "Book J-Kline | Performances, Speaking Engagements & Events",
  description: "Book J-Kline for your next event. High-energy hip-hop performances, motivational speaking, and powerful messages of hope and resilience. Austin-based, available nationwide.",
  openGraph: {
    title: "Book J-Kline For Your Event",
    description: "High-energy performances and inspiring talks on resilience, recovery, and redemption.",
    images: ["/images/about/photo-01.jpg"],
  },
};

export default function BookingPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section - Video Background Style */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/about/photo-01.jpg"
              alt="J-Kline performing"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>

          {/* Spray Overlay */}
          <SprayOverlay intensity="light" color="gold" className="absolute inset-0 pointer-events-none" animated={false}>
            <div className="absolute inset-0" />
          </SprayOverlay>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 py-32 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Available for Bookings</span>
            </div>

            <GraffitiText 
              variant="tag" 
              color="gold" 
              size="2xl" 
              as="h1"
              className="mb-6"
            >
              Book J-Kline
            </GraffitiText>
            
            <p className="text-xl sm:text-2xl text-foreground/90 max-w-3xl mx-auto mb-4 leading-relaxed">
              Bring a powerful message of <span className="text-accent font-semibold">hope</span>, 
              {" "}<span className="text-accent font-semibold">resilience</span>, and 
              {" "}<span className="text-accent font-semibold">redemption</span> to your next event.
            </p>
            
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Austin-based hip-hop artist, certified life coach, and recovery advocate. 
              High-energy performances that move the crowd and inspire real change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#booking-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-md transition-colors text-lg"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#watch"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-foreground/20 hover:border-accent text-foreground hover:text-accent font-semibold rounded-md transition-colors text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Performance
              </Link>
            </div>

            {/* Share button */}
            <div className="mt-8 flex justify-center">
              <SocialShareButtons compact />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-accent rounded-full" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Section className="bg-[#0D0D0D] relative">
          <div className="max-w-5xl mx-auto">
            <StatsSection />
          </div>
        </Section>

        {/* Divider */}
        <DrippingDivider color="gold" animated={false} />

        {/* Video Preview Section */}
        <Section id="watch" className="bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <GraffitiText 
                variant="stencil" 
                color="gold" 
                size="lg" 
                as="h2"
                className="mb-4"
              >
                See J-Kline Live
              </GraffitiText>
              <p className="text-muted max-w-xl mx-auto">
                Get a taste of the energy, passion, and message J-Kline brings to every performance.
              </p>
            </div>

            {/* Featured Video */}
            {featuredVideo && (
              <div className="relative aspect-video rounded-lg overflow-hidden border border-[#333] group">
                <Image
                  src={getVideoThumbnail(featuredVideo.videoId)}
                  alt={featuredVideo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                <Link
                  href={`https://www.youtube.com/watch?v=${featuredVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-accent/30">
                    <Play className="w-8 h-8 text-background ml-1" />
                  </div>
                </Link>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-3">
                    <div className="font-bold text-foreground">{featuredVideo.title}</div>
                    {featuredVideo.featuring && (
                      <div className="text-sm text-muted">ft. {featuredVideo.featuring}</div>
                    )}
                    <div className="text-sm text-accent mt-1">{featuredVideo.views} views</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Section>

        {/* Event Types Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <GraffitiText 
                variant="stencil" 
                color="gold" 
                size="lg" 
                as="h2"
                className="mb-4"
              >
                What Type of Event?
              </GraffitiText>
              <p className="text-muted max-w-xl mx-auto">
                Select your event type to see how J-Kline can make it unforgettable.
              </p>
            </div>

            <EventTypeSelector />

            <div className="mt-8 text-center">
              <Link
                href="#booking-form"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
              >
                Ready to book? Let&apos;s talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Divider */}
        <DrippingDivider color="gold" animated={false} flip />

        {/* Testimonials Section */}
        <Section className="bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <GraffitiText 
                variant="stencil" 
                color="gold" 
                size="lg" 
                as="h2"
                className="mb-4"
              >
                What People Say
              </GraffitiText>
              <p className="text-muted max-w-xl mx-auto">
                Hear from event organizers who&apos;ve experienced the J-Kline difference.
              </p>
            </div>

            <TestimonialsSection />
          </div>
        </Section>

        {/* Pricing Tiers */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <GraffitiText 
                variant="stencil" 
                color="gold" 
                size="lg" 
                as="h2"
                className="mb-4"
              >
                Booking Packages
              </GraffitiText>
              <p className="text-muted max-w-xl mx-auto">
                Flexible options to fit your event and budget. Every package is customizable.
              </p>
            </div>

            <PricingTiers />
          </div>
        </Section>

        {/* Divider */}
        <DrippingDivider color="gold" animated={false} />

        {/* Booking Form & Sidebar Section */}
        <Section id="booking-form" className="bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GraffitiText 
                variant="tag" 
                color="gold" 
                size="xl" 
                as="h2"
                className="mb-4"
              >
                Let&apos;s Make It Happen
              </GraffitiText>
              <p className="text-muted max-w-xl mx-auto">
                Ready to book J-Kline? Fill out the form below and we&apos;ll be in touch within 24-48 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <BookingForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Direct Contact */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4">Prefer Direct Contact?</h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:Jklinemusic512269@gmail.com"
                      className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                    >
                      <Mail className="w-5 h-5 text-accent" />
                      <span className="text-sm">Jklinemusic512269@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="text-sm">Austin, TX (Available Nationwide)</span>
                    </div>
                  </div>
                </div>

                {/* Calendar Preview */}
                <AvailabilityCalendar />

                {/* EPK Preview */}
                <EPKPreview />

                {/* Social Share */}
                <SocialShareButtons />
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <HelpCircle className="w-8 h-8 text-accent" />
              </div>
              <GraffitiText 
                variant="stencil" 
                color="gold" 
                size="lg" 
                as="h2"
                className="mb-4"
              >
                Questions?
              </GraffitiText>
              <p className="text-muted max-w-xl mx-auto">
                Everything you need to know about booking J-Kline for your event.
              </p>
            </div>

            <FAQAccordion />

            <div className="mt-8 text-center">
              <p className="text-muted mb-4">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-gradient-to-br from-accent/10 via-background to-background relative overflow-hidden">
          <SprayOverlay intensity="light" color="gold" className="absolute inset-0 pointer-events-none" animated={false}>
            <div className="absolute inset-0" />
          </SprayOverlay>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <GraffitiText 
              variant="tag" 
              color="gold" 
              size="xl" 
              as="h2"
              className="mb-6"
            >
              Your Event Deserves Impact
            </GraffitiText>
            
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Don&apos;t settle for ordinary. Book J-Kline and give your audience an experience 
              they&apos;ll remember—powerful performances, authentic stories, and a message that inspires real change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#booking-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-md transition-colors text-lg"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-md transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted">
              Tag <span className="text-accent font-semibold">@officialjkline</span> on social media when you book!
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
