import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        muted: "#A0A0A0",
        accent: {
          DEFAULT: "#D4AF37",
          hover: "#E5C158",
        },
        // Graffiti / Street Art palette
        graffiti: {
          blue: "#00BFFF",      // Electric blue - spray can accent
          red: "#DC3545",       // Spray red - bold accent
          grey: "#6B7280",      // Urban grey - weathered look
          "dark-grey": "#374151", // Deeper urban grey
          brick: "#3D3D3D",     // Brick color
          mortar: "#1A1A1A",    // Mortar/grout color
        },
      },
      backgroundImage: {
        "spray-noise": "url('/textures/spray-noise.svg')",
        "brick-pattern": "url('/textures/brick-pattern.svg')",
        "drip-divider": "url('/textures/drip-effect.svg')",
      },
      animation: {
        "drip-down": "dripDown 1.5s ease-out forwards",
        "spray-in": "sprayIn 0.8s ease-out forwards",
        "stencil-reveal": "stencilReveal 0.6s ease-out forwards",
      },
      keyframes: {
        dripDown: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
        sprayIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        stencilReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
