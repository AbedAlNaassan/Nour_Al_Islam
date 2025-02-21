/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(12, 38, 80)",
        customBlueDarker: "rgb(4, 18, 40)"
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        reem: ["Reem Kufi", "sans-serif"]
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        slideIn: "slideIn 2s ease-in-out"
      }
    }
  },
  plugins: []
};
