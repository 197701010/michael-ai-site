import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Uitgebreid voor App Router
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Als je ook nog /pages gebruikt
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // Voeg andere paden toe waar je Tailwind klassen gebruikt
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", 
      },
      // Hier kun je de standaard 'prose' stijlen aanpassen als je wilt
      // Zie: https://tailwindcss.com/docs/typography-plugin#customizing-the-defaults
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Voorbeeld: basiskleur van de prose tekst
            // color: theme('colors.gray.700'),
            // a: {
            //   color: theme('colors.primary'), // Gebruik je primaire kleur voor links
            //   '&:hover': {
            //     color: theme('colors.primary'),
            //     opacity: 0.8,
            //   },
            // },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Typography plugin toegevoegd
    // Voeg hier eventuele andere Tailwind plugins toe die je gebruikt
  ],
};
export default config;