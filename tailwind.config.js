/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FAF8F5", // Lino cálido
        ink: "#2C2A29", // Marengo/Ónix suave
        accent: "#1A5E5C", // Verde Cerceta (Madroños)
        burgundy: "#7A1C29", // Granate/Terciopelo
        terracotta: "#C86B5E", // Terracota cálido (Vichy)
        paper: "#ECE9E1"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Cormorant", "serif"],
        script: ["Dancing Script", "cursive"]
      }
    },
  },
  plugins: [],
}
