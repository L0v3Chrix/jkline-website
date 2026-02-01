import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ui/ContactForm";
import { SocialIconsRow } from "@/components/ui/SocialIcons";
import { GraffitiText, SprayOverlay } from "@/components/effects";
import { contactEmail, contactInfo } from "@/lib/content/links";
import { Mail, MapPin, Send } from "lucide-react";

export const metadata = {
  title: "Contact | J-Kline",
  description: "Get in touch with J-Kline for bookings, press inquiries, or general messages. Connect with Austin's voice of hope and redemption.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-accent/5 to-transparent relative overflow-hidden">
          <SprayOverlay intensity="light" color="gold" className="absolute inset-0 pointer-events-none" animated={false}>
            <div className="absolute inset-0" />
          </SprayOverlay>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <GraffitiText 
              variant="tag" 
              color="gold" 
              size="xl" 
              as="h1"
              className="mb-4"
            >
              Get In Touch
            </GraffitiText>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Have a question, booking inquiry, or just want to connect? Reach out — let&apos;s start a conversation.
            </p>
          </div>
        </Section>

        {/* Contact Info + Form Section */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Direct Contact */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Reach Out Directly
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">Email</p>
                        <a 
                          href={`mailto:${contactEmail}`}
                          className="text-foreground hover:text-accent transition-colors font-medium break-all"
                        >
                          {contactEmail}
                        </a>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">Based In</p>
                        <p className="text-foreground font-medium">
                          {contactInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Connect on Social
                  </h3>
                  <SocialIconsRow size={28} className="gap-5" />
                </div>

                {/* Booking Note */}
                <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-5">
                  <h3 className="text-sm uppercase tracking-widest text-accent mb-2">
                    Booking & Press
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    For booking inquiries, press requests, or collaboration opportunities, 
                    please use the contact form or email directly. Typical response time is 24-48 hours.
                  </p>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="lg:col-span-3">
                <div className="bg-[#0D0D0D] border border-[#333] rounded-xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Send className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-bold text-foreground">
                      Send a Message
                    </h2>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Bottom CTA */}
        <Section className="bg-gradient-to-t from-accent/5 to-transparent">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted text-lg">
              Whether it&apos;s about music, speaking engagements, or just to share your story — 
              <span className="text-foreground font-medium"> every message matters.</span>
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
