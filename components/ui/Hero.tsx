import { ReactNode } from "react";

interface HeroProps {
  backgroundImage?: string;
  videoUrl?: string;
  overlay?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Hero({
  backgroundImage,
  videoUrl,
  overlay = true,
  children,
  className = "",
}: HeroProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${className}`}
    >
      {/* Background Video */}
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Background Image */}
      {backgroundImage && !videoUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      {overlay && (backgroundImage || videoUrl) && (
        <div className="absolute inset-0 bg-background/70" />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </section>
  );
}
