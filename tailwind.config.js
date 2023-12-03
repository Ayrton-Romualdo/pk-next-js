/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 100s linear infinite'
      },
      keyframes: {
        slide: {
          '0%' : {backgroundPosition: "177px 0px"},
          '25%' : {backgroundPosition: "0px -177px"},
          '50%' : {backgroundPosition: "177px 177px"},
          '75%' : {backgroundPosition: "177px -177px"},
          '100%' : { backgroundPosition: "-177px 0px" },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", "coffee", "valentine"
    ]
  }
}
