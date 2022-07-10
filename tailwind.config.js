const plugin = require("tailwindcss/plugin");

const Rotate = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective": {
      perspective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    }
  });
});

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), Rotate],
};
