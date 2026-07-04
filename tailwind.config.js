/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FAF8F5",
        ink: "#2C2A29",
        accent: "#8C9A86", // Verde Salvia
        burgundy: "#6C2232", // Granate/Burgundy
        terracotta: "#C86B5E",
        paper: "#ECE9E1",
        softBeige: "#F5F2EA", // Beige Suave
        // --- Stitch Semantic Colors ---
        "on-secondary-fixed-variant": "#494645",
        "surface-container": "#f2edea",
        "secondary-container": "#e7e1df",
        "on-error": "#ffffff",
        "tertiary": "#433d35",
        "outline": "#6f7978",
        "on-tertiary-fixed": "#201b14",
        "inverse-primary": "#93d2cf",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed-variant": "#00504e",
        "primary-container": "#1a5e5c",
        "secondary-fixed-dim": "#cac5c4",
        "secondary": "#615e5c",
        "on-secondary-fixed": "#1d1b1a",
        "tertiary-fixed": "#ebe1d5",
        "on-tertiary-container": "#d2c8bd",
        "tertiary-container": "#5b544b",
        "surface-variant": "#e7e1df",
        "on-tertiary-fixed-variant": "#4c463d",
        "error-container": "#ffdad6",
        "surface-bright": "#fef8f5",
        "tertiary-fixed-dim": "#cfc5ba",
        "surface-dim": "#ded9d6",
        "secondary-fixed": "#e7e1df",
        "primary": "#004644",
        "on-primary-container": "#96d5d2",
        "surface-container-high": "#ece7e4",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "on-background": "#1d1b1a",
        "on-tertiary": "#ffffff",
        "on-surface-variant": "#3f4948",
        "primary-fixed-dim": "#93d2cf",
        "outline-variant": "#bfc8c7",
        "on-primary-fixed": "#00201f",
        "surface-tint": "#276866",
        "inverse-surface": "#32302e",
        "primary-fixed": "#aeeeeb",
        "error": "#ba1a1a",
        "background": "#fef8f5",
        "surface-container-highest": "#e7e1df",
        "surface": "#fef8f5",
        "on-primary": "#ffffff",
        "inverse-on-surface": "#f5f0ed",
        "surface-container-low": "#f8f2f0",
        "on-surface": "#1d1b1a",
        "on-secondary-container": "#676462",
        "garnet": "#7A1C29",
        "linen": "#FAF8F5"
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "section-gap": "120px",
        "gutter": "24px",
        "stack-md": "16px",
        "container-max": "1280px",
        "unit": "8px",
        "stack-lg": "32px",
        "stack-sm": "8px"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Cormorant", "serif"],
        script: ["Dancing Script", "cursive"]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
