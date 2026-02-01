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
      },
    },
  },
  plugins: [typography],
};

export default config;
