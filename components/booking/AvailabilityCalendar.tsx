"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface AvailabilityCalendarProps {
  className?: string;
}

export function AvailabilityCalendar({ className = "" }: AvailabilityCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { month, year, days, firstDayOfWeek } = useMemo(() => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    
    return { month, year, days, firstDayOfWeek };
  }, [currentDate]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Decorative "booked" dates (random pattern for visual effect)
  const bookedDates = useMemo(() => {
    const booked = new Set<number>();
    // Add some random "booked" dates for visual effect
    [3, 7, 14, 15, 21, 28].forEach(d => {
      if (d <= days.length) booked.add(d);
    });
    return booked;
  }, [days.length]);

  const today = new Date();
  const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
  const todayDate = today.getDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-4 border-b border-[#333]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-accent" />
            <h4 className="font-bold text-foreground">Availability</h4>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevMonth}
              className="p-1 rounded hover:bg-white/10 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-muted" />
            </button>
            <span className="text-sm font-medium text-foreground min-w-[120px] text-center">
              {monthNames[month]} {year}
            </span>
            <button
              onClick={nextMonth}
              className="p-1 rounded hover:bg-white/10 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-muted" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-center text-xs font-medium text-muted py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before first of month */}
          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          
          {/* Day cells */}
          {days.map(day => {
            const isBooked = bookedDates.has(day);
            const isToday = isCurrentMonth && day === todayDate;
            const isPast = isCurrentMonth && day < todayDate;
            
            return (
              <div
                key={day}
                className={`
                  aspect-square flex items-center justify-center text-sm rounded-md transition-colors
                  ${isToday 
                    ? "bg-accent text-background font-bold" 
                    : isBooked 
                      ? "bg-accent/20 text-accent" 
                      : isPast
                        ? "text-muted/50"
                        : "text-muted hover:bg-white/5"
                  }
                `}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-[#333] flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent" />
            <span className="text-muted">Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent/20" />
            <span className="text-muted">Tentatively Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[#333]" />
            <span className="text-muted">Available</span>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted text-center">
          * Calendar is for illustration. Contact us for real-time availability.
        </p>
      </div>
    </motion.div>
  );
}
