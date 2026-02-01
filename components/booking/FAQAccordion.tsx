"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 4-6 weeks in advance to ensure availability, especially for weekend dates. However, we can sometimes accommodate shorter notice for the right opportunity. Reach out and let's talk!"
  },
  {
    question: "What are J-Kline's performance requirements?",
    answer: "Basic requirements include a quality sound system, stage/performance area, and standard hospitality (water, green room access). Specific technical riders are provided upon booking confirmation. We're flexible and work with venues of all sizes."
  },
  {
    question: "Do you travel for events?",
    answer: "Yes! While based in Austin, TX, J-Kline is available for events nationwide. Travel arrangements and accommodations for out-of-town events are discussed during the booking process."
  },
  {
    question: "What types of events are best suited?",
    answer: "J-Kline's message resonates across many contexts: concerts and festivals, recovery events, youth programs, corporate functions, faith-based gatherings, and private celebrations. His content can be tailored to fit the audience and occasion."
  },
  {
    question: "Can the content be customized for my event?",
    answer: "Absolutely. Whether you need a high-energy performance, an inspiring keynote, or a combination of both, we'll work with you to create the perfect experience for your audience."
  },
  {
    question: "What's included in a booking?",
    answer: "Standard bookings include the performance/speaking engagement, meet & greet time with attendees (when appropriate), and promotional support leading up to the event. Custom packages with additional elements are available."
  },
  {
    question: "How do I get started?",
    answer: "Simply fill out the booking inquiry form on this page or email directly. Share your event details—date, location, type of event, and audience—and we'll respond within 24-48 hours with next steps and availability."
  },
  {
    question: "Is there a press kit available?",
    answer: "Yes! Our Electronic Press Kit (EPK) includes professional photos, bio, videos, music samples, and testimonials. Download it directly from this page or request a custom press package for your promotional needs."
  }
];

interface FAQAccordionProps {
  className?: string;
}

export function FAQAccordion({ className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="border border-[#333] rounded-lg overflow-hidden bg-[#1A1A1A]"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#222] transition-colors"
          >
            <span className="font-semibold text-foreground pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-accent" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-muted leading-relaxed border-t border-[#333] pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
