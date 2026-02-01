"use client";

import { motion } from "framer-motion";
import { Mic2, Users, MapPin, Calendar } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: Stat[] = [
  { value: "100+", label: "Shows Performed", icon: Mic2 },
  { value: "50K+", label: "Lives Impacted", icon: Users },
  { value: "25+", label: "Cities Reached", icon: MapPin },
  { value: "3+", label: "Years Clean", icon: Calendar },
];

interface StatsSectionProps {
  className?: string;
}

export function StatsSection({ className = "" }: StatsSectionProps) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg p-6 text-center group hover:border-accent/50 transition-colors"
          >
            <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">{stat.value}</div>
            <div className="text-sm text-muted">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
