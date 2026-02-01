"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Users, Heart, Building2, PartyPopper, Radio, GraduationCap, Church } from "lucide-react";

export interface EventType {
  id: string;
  name: string;
  description: string;
  icon: string;
  idealFor: string[];
  duration: string;
}

export const eventTypes: EventType[] = [
  {
    id: "concert",
    name: "Concert / Festival",
    description: "High-energy hip-hop performances that move the crowd and deliver a powerful message",
    icon: "mic",
    idealFor: ["Music Festivals", "Club Shows", "Concert Venues", "Block Parties"],
    duration: "30-90 min sets"
  },
  {
    id: "speaking",
    name: "Motivational Speaking",
    description: "Inspiring talks on resilience, recovery, overcoming adversity, and finding purpose",
    icon: "podium",
    idealFor: ["Corporate Events", "Conferences", "Schools", "Nonprofits"],
    duration: "30-60 min keynotes"
  },
  {
    id: "recovery",
    name: "Recovery Events",
    description: "Powerful testimony and connection for treatment centers and recovery communities",
    icon: "heart",
    idealFor: ["Treatment Centers", "Recovery Houses", "AA/NA Events", "Awareness Events"],
    duration: "Flexible"
  },
  {
    id: "corporate",
    name: "Corporate Events",
    description: "Professional performances and talks tailored for corporate audiences",
    icon: "building",
    idealFor: ["Team Building", "Company Retreats", "Award Ceremonies", "Product Launches"],
    duration: "Custom packages"
  },
  {
    id: "private",
    name: "Private Events",
    description: "Exclusive performances for birthdays, weddings, and private celebrations",
    icon: "party",
    idealFor: ["Birthday Parties", "Private Parties", "VIP Events", "Celebrations"],
    duration: "1-3 hours"
  },
  {
    id: "youth",
    name: "Youth & Schools",
    description: "Age-appropriate programming focused on making good choices and staying strong",
    icon: "school",
    idealFor: ["High Schools", "Colleges", "Youth Groups", "After-School Programs"],
    duration: "45-90 min programs"
  },
  {
    id: "faith",
    name: "Faith-Based Events",
    description: "Testimony and performance for churches and faith communities",
    icon: "church",
    idealFor: ["Churches", "Youth Groups", "Faith Conferences", "Worship Events"],
    duration: "Flexible"
  },
  {
    id: "media",
    name: "Media & Podcasts",
    description: "Interviews, podcast appearances, and media features",
    icon: "radio",
    idealFor: ["Podcasts", "Radio Shows", "Documentaries", "News Features"],
    duration: "Varies"
  }
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mic: Mic,
  podium: GraduationCap,
  heart: Heart,
  building: Building2,
  party: PartyPopper,
  school: GraduationCap,
  church: Church,
  radio: Radio,
  users: Users,
};

interface EventTypeSelectorProps {
  onSelect?: (eventType: EventType) => void;
  className?: string;
}

export function EventTypeSelector({ onSelect, className = "" }: EventTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<EventType | null>(null);

  const handleSelect = (eventType: EventType) => {
    setSelectedType(selectedType?.id === eventType.id ? null : eventType);
    onSelect?.(eventType);
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {eventTypes.map((eventType, index) => {
          const Icon = iconMap[eventType.icon] || Mic;
          const isSelected = selectedType?.id === eventType.id;

          return (
            <motion.button
              key={eventType.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSelect(eventType)}
              className={`
                relative p-4 sm:p-6 rounded-lg border-2 transition-all duration-300
                flex flex-col items-center text-center gap-2 sm:gap-3
                ${isSelected 
                  ? "border-accent bg-accent/10 shadow-lg shadow-accent/20" 
                  : "border-[#333] bg-[#1A1A1A] hover:border-accent/50 hover:bg-[#222]"
                }
              `}
            >
              <div className={`
                w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors
                ${isSelected ? "bg-accent text-background" : "bg-accent/10 text-accent"}
              `}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className={`text-xs sm:text-sm font-semibold transition-colors ${isSelected ? "text-accent" : "text-foreground"}`}>
                {eventType.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedType && (
          <motion.div
            key={selectedType.id}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">{selectedType.name}</h4>
              <p className="text-muted mb-4">{selectedType.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-accent font-semibold">Duration:</span>
                  <span className="text-muted ml-2">{selectedType.duration}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-accent font-semibold text-sm">Ideal for:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedType.idealFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted bg-white/5 px-3 py-1 rounded-full border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
