import { type Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // helder blauw – pas aan als je een andere tint wilt
      },
    },
  },
  plugins: [],
}
export default config
