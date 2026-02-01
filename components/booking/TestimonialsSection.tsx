"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  event?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "J-Kline's performance was electric. The crowd was completely captivated, and his message of hope resonated with everyone in the room.",
    author: "Event Coordinator",
    role: "Austin Recovery Community",
    event: "Recovery Awareness Event"
  },
  {
    quote: "His ability to connect with our students was remarkable. J-Kline shared his story with authenticity that inspired real conversations about making better choices.",
    author: "Youth Program Director",
    role: "Austin Youth Outreach",
    event: "School Assembly"
  },
  {
    quote: "We've had many speakers, but none who could combine raw talent with such a powerful personal testimony. J-Kline is the real deal.",
    author: "Pastor",
    role: "Faith Community Austin",
    event: "Sunday Service"
  },
  {
    quote: "The energy he brings is unmatched. J-Kline doesn't just perform—he transforms the entire atmosphere of the venue.",
    author: "Venue Manager",
    role: "Downtown Austin Venue",
    event: "Live Concert"
  }
];

interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className = "" }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className={`relative ${className}`}>
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg p-8 sm:p-12 relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />
            
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6 relative z-10">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-muted">{testimonials[currentIndex].role}</div>
                {testimonials[currentIndex].event && (
                  <div className="text-xs text-accent mt-1">{testimonials[currentIndex].event}</div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-[#1A1A1A] border border-[#333] text-muted hover:text-accent hover:border-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-accent w-6" : "bg-[#333] hover:bg-accent/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={next}
            className="p-2 rounded-full bg-[#1A1A1A] border border-[#333] text-muted hover:text-accent hover:border-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
