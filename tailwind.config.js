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
      // primary colors
      "primary-blue": "#264e56", // 264E56
      "primary-sky-blue": "#a4e5fe", // A4E5FE
      green: "#90dbb9", // 90DBB9
      
      // secondary colors
      "green-500": "#8BC6C0",
      orange: "#edc37c", // EDC37C
      pink: "#edb6a4", // EDB6A4
      white: "#ffffff",
      "blue-grey": "#5f728d", // 5F728D
      "sky-green": "#7cbab5", // 7CBAB5
      "primary-grey": "#9ec9ac", // 9EC9AC
      grey: "#efefef",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      "baby-doll": ["Baby Doll"],
    },
    fontSize: {
      title: "35px",
      subtitle: "28px",
      "custom-text": "14px",
      "custom-text-desktop": "18px",
    },
    extend: {},
  },
  plugins: [],
};
