"use client";

import { Heart, Phone, ExternalLink } from "lucide-react";

export function RecoveryResources() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Heart Icon */}
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-accent/10 border border-accent/20">
          <Heart className="w-8 h-8 text-accent" fill="currentColor" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
        You&apos;re Not Alone
      </h2>
      
      <p className="text-muted text-center mb-8 max-w-xl mx-auto">
        If you or someone you know is struggling with addiction, help is available. 
        Recovery is possible—I&apos;m living proof.
      </p>

      {/* SAMHSA Helpline Card */}
      <div className="bg-[#1A1A1A] border border-accent/30 rounded-xl p-6 sm:p-8 text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Phone className="w-5 h-5 text-accent" />
          <span className="text-sm uppercase tracking-widest text-muted">
            SAMHSA National Helpline
          </span>
        </div>
        
        <a 
          href="tel:1-800-662-4357"
          className="text-3xl sm:text-4xl font-bold text-accent hover:text-accent-hover transition-colors block mb-2"
        >
          1-800-662-4357
        </a>
        
        <p className="text-muted text-sm">
          Free • Confidential • 24/7 • 365 days a year
        </p>
        <p className="text-muted/70 text-xs mt-2">
          Treatment referrals and information in English and Spanish
        </p>
      </div>

      {/* Austin Local Resources */}
      <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
          Austin Recovery Resources
        </h3>
        
        <div className="grid gap-3 sm:grid-cols-2">
          <a 
            href="https://integralcare.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
          >
            <ExternalLink className="w-4 h-4 text-accent group-hover:text-accent-hover" />
            <span>Integral Care (24/7 Crisis Line)</span>
          </a>
          
          <a 
            href="https://austinrecovery.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
          >
            <ExternalLink className="w-4 h-4 text-accent group-hover:text-accent-hover" />
            <span>Austin Recovery</span>
          </a>
          
          <a 
            href="https://www.aaaustin.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
          >
            <ExternalLink className="w-4 h-4 text-accent group-hover:text-accent-hover" />
            <span>Austin AA Meetings</span>
          </a>
          
          <a 
            href="https://www.texashealth.org/behavioral-health" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
          >
            <ExternalLink className="w-4 h-4 text-accent group-hover:text-accent-hover" />
            <span>Texas Health & Human Services</span>
          </a>
        </div>
      </div>
    </div>
  );
}
