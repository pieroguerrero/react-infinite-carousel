/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-lr": {
          "0%": {
            transform:
              "translateX(calc(-1*var(--slide-width)*var(--number-of-elements)/2));",
          },
          "100%": { transform: "translateX(0)" },
        },
        "slide-rl": {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform:
              "translateX(calc(-1*var(--slide-width)*var(--number-of-elements)/2))",
          },
        },
      },
      animation: {
        rotate:
          "var(--animation-direction-rl-lr) var(--animation-speed) linear infinite",
      },
    },
  },
  plugins: [],
};
