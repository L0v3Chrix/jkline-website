"use client";

import { motion } from "framer-motion";
import { Mic, Users, Heart, Award, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface BookingType {
  type: string;
  description: string;
  icon: string;
}

interface BookingInfoData {
  email: string;
  responseTime: string;
  availableFor: string[];
}

interface BookingInfoProps {
  bookingTypes: BookingType[];
  bookingInfo: BookingInfoData;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mic: Mic,
  podium: Award,
  heart: Heart,
  users: Users,
};

export function BookingInfo({ bookingTypes, bookingInfo }: BookingInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg p-8"
    >
      {/* Booking Types Grid */}
      <div className="grid gap-6 sm:grid-cols-2 mb-8">
        {bookingTypes.map((booking, index) => {
          const Icon = iconMap[booking.icon] || Mic;
          
          return (
            <motion.div
              key={booking.type}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {booking.type}
                </h4>
                <p className="text-sm text-muted">
                  {booking.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Available For List */}
      <div className="mb-8">
        <h4 className="text-sm uppercase tracking-wider text-accent mb-4">
          Available For
        </h4>
        <div className="flex flex-wrap gap-2">
          {bookingInfo.availableFor.map((item) => (
            <span
              key={item}
              className="text-sm text-muted bg-white/5 px-3 py-1 rounded-full border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="flex items-center gap-2 text-sm text-muted mb-6">
        <Clock className="w-4 h-4 text-accent" />
        <span>Typical response time: {bookingInfo.responseTime}</span>
      </div>

      {/* CTA Button */}
      <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
        Contact for Booking
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
}
