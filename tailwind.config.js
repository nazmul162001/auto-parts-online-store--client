module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/footerBg.jpg')",
        'hero-bg': "url('./src/assets/images/formBg.jpg')",
        'hero-bg-small': "url('./src/assets/images/small-line.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF3737',

          secondary: '#666666',

          accent: '#37CDBE',

          neutral: '#E6E6E6',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui', 'tw-elements/dist/plugin')],
};
