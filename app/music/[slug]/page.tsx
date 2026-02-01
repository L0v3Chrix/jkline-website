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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Album Artwork Placeholder */}
            <div className="aspect-square bg-[#0D0D0D] border border-[#333] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-accent text-8xl font-bold">
                  {item.title.charAt(0)}
                </span>
                <p className="text-muted text-sm mt-4 uppercase tracking-widest">
                  {item.type === "album" ? "Album" : "Single"}
                </p>
              </div>
            </div>

            {/* Album Info */}
            <div className="flex flex-col justify-center">
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

              {/* Track List (if available) */}
              {item.tracks && item.tracks.length > 0 && (
                <div className="mb-8">
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

              {/* Streaming Links */}
              <StreamingEmbed
                spotifyUrl={item.spotifyUrl}
                youtubeUrl={item.youtubeUrl}
                appleMusicUrl={item.appleMusicUrl}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
