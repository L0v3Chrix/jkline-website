"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Calendar, MapPin, Users, Mic } from "lucide-react";
import Button from "@/components/ui/Button";
import { eventTypes } from "./EventTypeSelector";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  expectedAttendance: string;
  budget: string;
  message: string;
  howHeard: string;
}

interface FormErrors {
  [key: string]: string;
}

interface BookingFormProps {
  className?: string;
}

export function BookingForm({ className = "" }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    expectedAttendance: "",
    budget: "",
    message: "",
    howHeard: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.message.trim()) newErrors.message = "Please tell us about your event";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Booking Inquiry:", formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-lg p-8 text-center ${className}`}
      >
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Inquiry Received!</h3>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Thank you for your interest in booking J-Kline. We&apos;ll review your request and get back to you within 24-48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Submit Another Inquiry
          </Button>
          <Button variant="ghost" href="/">
            Return Home
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className={`bg-gradient-to-br from-[#1A1A1A] to-[#222] border border-[#333] rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-full ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Send className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Request a Quote</h3>
          <p className="text-sm text-muted">Fill out the form and we&apos;ll be in touch</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Organization / Company
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => handleChange("organization", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="Acme Events Inc."
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Event Type <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <Mic className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <select
              value={formData.eventType}
              onChange={(e) => handleChange("eventType", e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors appearance-none"
            >
              <option value="">Select event type...</option>
              {eventTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          {errors.eventType && <p className="mt-1 text-sm text-red-500">{errors.eventType}</p>}
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => handleChange("eventDate", e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Event Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              value={formData.eventLocation}
              onChange={(e) => handleChange("eventLocation", e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
              placeholder="Austin, TX"
            />
          </div>
        </div>

        {/* Expected Attendance */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Expected Attendance
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <select
              value={formData.expectedAttendance}
              onChange={(e) => handleChange("expectedAttendance", e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors appearance-none"
            >
              <option value="">Select range...</option>
              <option value="1-50">1-50 people</option>
              <option value="50-100">50-100 people</option>
              <option value="100-250">100-250 people</option>
              <option value="250-500">250-500 people</option>
              <option value="500+">500+ people</option>
            </select>
          </div>
        </div>

        {/* Budget Range */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors appearance-none"
          >
            <option value="">Select budget range (optional)...</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-2.5k">$1,000 - $2,500</option>
            <option value="2.5k-5k">$2,500 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k+">$10,000+</option>
            <option value="discuss">Let&apos;s discuss</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Tell Us About Your Event <span className="text-accent">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
            placeholder="Tell us about your event, audience, and what you're looking for..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* How did you hear about us */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            How did you hear about J-Kline?
          </label>
          <select
            value={formData.howHeard}
            onChange={(e) => handleChange("howHeard", e.target.value)}
            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors appearance-none"
          >
            <option value="">Select one (optional)...</option>
            <option value="social-media">Social Media</option>
            <option value="youtube">YouTube</option>
            <option value="spotify">Spotify / Music Streaming</option>
            <option value="referral">Friend / Colleague Referral</option>
            <option value="previous-event">Saw at Previous Event</option>
            <option value="search">Google Search</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
              />
              Sending...
            </span>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Submit Booking Inquiry
            </>
          )}
        </Button>
      </div>

      <p className="mt-4 text-xs text-muted text-center">
        By submitting this form, you agree to be contacted about your inquiry.
        We typically respond within 24-48 hours.
      </p>
    </motion.form>
  );
}
