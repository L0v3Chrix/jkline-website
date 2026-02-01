"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-accent/20 leading-none">
            404
          </h1>
          <div className="relative -mt-12 md:-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Message */}
        <p className="text-muted text-lg mb-10 leading-relaxed">
          Looks like this page got lost on the journey. 
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Tagline */}
        <p className="text-muted/40 text-sm mt-16 italic">
          Voice of Hope. Sound of Redemption.
        </p>
      </div>
    </main>
  );
}
