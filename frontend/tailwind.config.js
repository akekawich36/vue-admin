/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        layout: "#FFF",
        danger: "rgb(219,53,69)",
      },
      boxShadow: {
        boxSidebar: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
        boxHeader: "0px -1px 0px 0px #F0F0F0 inset",
      },
    },
  },
  plugins: [],
  important: true,
};
