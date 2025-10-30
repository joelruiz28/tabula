/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        tabulaBlue: "#1E3A8A",        // Azul corporativo principal (botones, encabezados)
        tabulaBlueLight: "#3B82F6",   // Azul claro para hover o detalles
        tabulaGreen: "#16A34A",       // Verde de confirmación (éxito)
        tabulaGray: "#F3F4F6",        // Fondo general del sistema
        tabulaText: "#1F2937",        // Texto principal (gris oscuro)
        tabulaAccent: "#60A5FA",      // Color de acento en elementos destacados
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Fuente limpia y moderna
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.1)", // Sombras suaves
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
