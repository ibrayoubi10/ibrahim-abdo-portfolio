import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0118",
          surface: "#150528",
          purple: "#8b5cf6",
          violet: "#a855f7",
          pink: "#ec4899",
          orange: "#f97316",
          amber: "#fbbf24",
          ink: "#f5f3ff",
          mute: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grad-primary":
          "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
        "grad-secondary":
          "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ec4899 100%)",
        "grad-radial":
          "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25), transparent 60%)",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
