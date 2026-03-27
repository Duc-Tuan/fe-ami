/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px", // Ở breakpoint này container sẽ có max-width 900px
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      screens: {
        sm: "100%", // Mobile: full width
        md: "100%", // Tablet: full width
        lg: "900px", // Desktop: 900px
        xl: "900px",
        "2xl": "900px",
      },
    },
  },
  plugins: [],
};
