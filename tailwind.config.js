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
        'light-orange': '#f07867',
      },
      backgroundImage: {
        'main-bg': "url('/src/assets/images/bg.svg')",
        'section-1-bg': "url('/src/assets/images/bg_section1.svg')",
        'section-contact-bg': "url('/src/assets/images/bg_section_contact.svg')",
        'heading-bg': "url('/src/assets/images/bg_heading.svg')",
        'project-bg': "url('/src/assets/images/project/bg_project.svg')",
        'project-bg2': "url('/src/assets/images/project/bg_project2.svg')",
      },
      height: {
        'header-height': '70px',
      },
      spacing: {
        'header-height': '70px',
      },
      fontFamily: {
        'public-sans': ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
