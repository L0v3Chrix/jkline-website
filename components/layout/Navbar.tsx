"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { SocialIconsRow } from "@/components/ui/SocialIcons";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Mobile Menu Button - Left on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-foreground hover:text-accent transition-colors p-2"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="relative block hover:opacity-90 transition-opacity duration-300"
          >
            <Image
              src="/images/logo-jkline-graffiti.svg"
              alt="J-KLINE"
              width={140}
              height={25}
              className="h-6 md:h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons - Right */}
          <div className="hidden md:block">
            <SocialIconsRow
              size={20}
              platforms={["instagram", "youtube", "spotify"]}
            />
          </div>

          {/* Spacer for mobile to balance the layout */}
          <div className="md:hidden w-[44px]" />
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
