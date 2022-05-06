module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
      },
      colors: {
        purple: "#7b3c96",
        mauve: "#2a2240",
        wine: "#1a1426",
        crimson: "#722e3c",
      },
      spacing: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
