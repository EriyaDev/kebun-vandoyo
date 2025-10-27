/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'urbanist' : "Urbanist",
    },
    extend: {
      width: {
        'desktop': '1440px',
      },
      screens: {
        'desktop': '1440px',
      },
      colors: {
        'primary-color' : "#FEFEFE",
        'secondary-color' : "#FEFEFE",
        'third-color' : "#f0f0f0",
        'inactive-color' : "#D6D6D6",
        'border-color' : "#02001E1F",

        'accent-color' : "#8FA31E",
        'accent-secondary-color' : "#556B2F",

        'text-primary-color' : "#121212",
        'text-secondary-color' : "#F5F5F5",
        'text-inactive-color' : "#727272",
      },
      backgroundImage: {
        'yellow-donut' : "url('/public/assets/icons/wcu/donut-yellow.svg')",
        'pink-donut' : "url('/public/assets/icons/wcu/donut-pink.svg')",
        'check' : "url('/public/assets/icons/pricing/check.svg')",
        'star' : "url('/public/assets/icons/global/star.svg')",
        'quote' : "url('/public/assets/icons/global/quote.svg')",
      },
    },
  },
  plugins: [],
}

