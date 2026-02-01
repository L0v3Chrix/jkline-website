"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Ticket, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Event } from "@/lib/content/events";

interface EventsListProps {
  events: Event[];
}

export function EventsList({ events }: EventsListProps) {
  if (events.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-12 px-6 bg-[#1A1A1A] border border-[#333] rounded-lg"
      >
        <Calendar className="w-12 h-12 text-muted mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No Upcoming Shows
        </h3>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Stay tuned! Join the mailing list to be the first to know when new shows are announced.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center gap-2 justify-center">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-muted text-sm">
              Subscribe in the footer below
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            y: -2,
            boxShadow: "0 8px 30px rgba(212, 175, 55, 0.15)",
          }}
          className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Event Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-accent px-2 py-1 bg-accent/10 rounded">
                  {event.type}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {event.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{event.date}</span>
                </div>
                
                {event.time && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{event.venue}, {event.city}</span>
                </div>
              </div>

              {event.description && (
                <p className="text-muted/80 mt-3 text-sm">
                  {event.description}
                </p>
              )}
            </div>

            {/* Ticket Button */}
            {event.ticketUrl && (
              <div className="flex-shrink-0">
                <Button
                  href={event.ticketUrl}
                  variant="primary"
                  size="md"
                  className="w-full md:w-auto"
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Get Tickets
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
