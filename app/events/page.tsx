import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { EventsList } from "@/components/events/EventsList";
import { BookingInfo } from "@/components/events/BookingInfo";
import { 
  upcomingEvents, 
  bookingTypes, 
  bookingInfo 
} from "@/lib/content/events";
import { Calendar, Briefcase } from "lucide-react";

export const metadata = {
  title: "Events | J-Kline",
  description: "Upcoming performances, speaking engagements, and how to book J-Kline for your event.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-accent/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Events
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Live performances, speaking engagements, and community events.
            </p>
          </div>
        </Section>

        {/* Upcoming Events Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">
                Upcoming Events
              </h2>
            </div>
            
            <EventsList events={upcomingEvents} />
          </div>
        </Section>

        {/* Book J-Kline Section */}
        <Section className="bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Book J-Kline
              </h2>
              <p className="text-muted max-w-xl mx-auto">
                Bring a powerful message of hope, resilience, and redemption to your next event.
              </p>
            </div>
            
            <BookingInfo 
              bookingTypes={bookingTypes} 
              bookingInfo={bookingInfo} 
            />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
