"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StorySectionProps {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  variant?: "default" | "full-width" | "quote";
  quote?: string;
  quoteSource?: string;
}

export function StorySection({
  title,
  content,
  image,
  imageAlt = "J-Kline",
  imagePosition = "right",
  variant = "default",
  quote,
  quoteSource,
}: StorySectionProps) {
  if (variant === "full-width" && image) {
    return (
      <section className="relative w-full overflow-hidden">
        {/* Full-width image break */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-end justify-center pb-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-lg text-white/80">{content}</p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "quote") {
    return (
      <section className="py-16 px-4 bg-[#0D0D0D]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <span className="absolute -top-6 -left-2 text-7xl text-accent/30 font-serif">
              "
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed italic px-8">
              {quote || content}
            </blockquote>
            <span className="absolute -bottom-10 -right-2 text-7xl text-accent/30 font-serif rotate-180">
              "
            </span>
          </div>
          {quoteSource && (
            <p className="text-muted mt-8 text-sm">— {quoteSource}</p>
          )}
        </motion.div>
      </section>
    );
  }

  // Default side-by-side layout
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
          imagePosition === "left" ? "md:grid-flow-dense" : ""
        }`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center md:text-left ${imagePosition === "left" ? "md:col-start-2" : ""}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              {title}
            </h2>
            <div className="prose prose-lg prose-invert">
              {content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-muted text-lg leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative mx-auto md:mx-0 ${imagePosition === "left" ? "md:col-start-1 md:row-start-1" : ""}`}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gold accent border */}
                <div className="absolute inset-0 border-2 border-accent/20 rounded-lg" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/40 rounded-lg -z-10" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
