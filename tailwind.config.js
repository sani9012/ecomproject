/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
    purge: [
      './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
}

