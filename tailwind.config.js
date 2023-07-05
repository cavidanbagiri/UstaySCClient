/** @type {import('tailwindcss').Config} */

if(!Object.hasOwn){
  Object.hasOwn = (obj, key)=>{
    return typeof obj==='object' && obj.hasOwnProperty(key);
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

