/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#44afe0',
        secondary: '#10294c',
        'red-primary': '#ed3833',
        'text-gray': '#999999',
        'light-pink': '#fac4c2',
      },
      backgroundImage: {
        'main-bg': "url('/src/assets/images/bg.svg')",
      },
      height: {
        'header-height': '70px',
      },
    },
  },
  plugins: [],
};
