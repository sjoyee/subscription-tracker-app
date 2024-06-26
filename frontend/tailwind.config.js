/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // tailwind.config.js
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};
