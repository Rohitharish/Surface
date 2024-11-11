/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '360px', // Extra small devices (phones, 360px and up)
      'xsm': '400px', // custom breakpoint
      '2sm': '480px', // custom breakpoint
      'sm': '640px', // Small devices (phones, 640px and up)
      'md': '768px', // Medium devices (tablets, 768px and up)
      'lg': '1024px', // Large devices (desktops, 1024px and up)
      'xl': '1280px', // Extra large devices (large desktops, 1280px and up)
      '2xl': '1536px', // 2X large devices (large desktops, 1536px and up)
      // Add more custom breakpoints as needed
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fontWeight: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
  },
  plugins: [],
};
