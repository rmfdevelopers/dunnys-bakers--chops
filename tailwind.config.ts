import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#C5A059",
        accent: "#1A1A1A"
      },
      fontFamily: {
        heading: ["Cormorant Garamond"],
        sans: ["DM Sans"]
      }
    }
  }
} satisfies Config;