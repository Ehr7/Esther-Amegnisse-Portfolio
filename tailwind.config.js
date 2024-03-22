/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: { 
    extend: {
      fontFamily: {
        rubik: ['Rubik']
      }
    }
  },
  plugins: [
    require('@designbycode/tailwindcss-text-stroke')
  ]
};

