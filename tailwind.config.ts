// surfatech-web-solution/tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0056b3", // Professional blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6c757d", // Professional gray
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#ffc107", // Professional yellow
          foreground: "#1A1F2C",
        },
        muted: {
          DEFAULT: "#f8f9fa", // Light gray for backgrounds
          foreground: "#374151",
        },
        success: {
          DEFAULT: "#28a745", // Green for success messages
          foreground: "#FFFFFF",
        },
        danger: {
          DEFAULT: "#dc3545", // Red for error messages
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#ffc107", // Yellow for warnings
          foreground: "#1A1F2C",
        },
      },
      borderRadius: {
        lg: "0.5rem", // Consistent border radius
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;