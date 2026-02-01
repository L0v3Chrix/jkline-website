import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import StreamingEmbed from "@/components/music/StreamingEmbed";
import { discography } from "@/lib/content/discography";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return discography.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = discography.find((i) => i.slug === slug);
  
  if (!item) {
    return {
      title: "Not Found | J-Kline",
    };
  }

  return {
    title: `${item.title} | J-Kline`,
    description: item.description || `${item.title} - ${item.year} ${item.type} by J-Kline`,
  };
}

export default async function MusicDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = discography.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/music"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span>Back to Music</span>
          </Link>

          {/* Single/Album Info */}
          <div className="max-w-2xl">
            <div className="mb-8">
              <p className="text-accent text-sm uppercase tracking-widest mb-2">
                {item.type === "album" ? "Album" : "Single"} • {item.year}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {item.title}
              </h1>
              {item.description && (
                <p className="text-muted text-lg leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            {/* Streaming Embed & Links */}
            <StreamingEmbed
              spotifyUrl={item.spotifyUrl}
              youtubeUrl={item.youtubeUrl}
              appleMusicUrl={item.appleMusicUrl}
            />

            {/* Track List (if available) */}
            {item.tracks && item.tracks.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Tracks
                </h2>
                <ol className="space-y-2">
                  {item.tracks.map((track, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 text-muted"
                    >
                      <span className="text-accent w-6 text-right">
                        {index + 1}.
                      </span>
                      <span>{track}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
