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
        softBeige: "#F5F2EA" // Beige Suave
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
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
