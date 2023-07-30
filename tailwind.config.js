/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/sections/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-blue": "#264e56",
      "primary-sky-blue": "#a4e5fe",
      green: "#90dbb9",
      orange: "#edc37c",
      pink: "#edb6a4",
      white: "#ffffff",
      "blue-grey": "#5f728d",
      "sky-green": "#7cbab5",
      "primary-grey": "#9ec9ac",
    },
    extend: {},
  },
  plugins: [],
};
