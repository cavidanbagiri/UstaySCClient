/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin','tailwind-scroolbar')
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}

