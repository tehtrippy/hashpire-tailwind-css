module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E1E1E',
          light: '#262626',
        },
        secondary: {
          DEFAULT: '#F2F2F2',
        },
        accent: {
          DEFAULT: '#F08E00',
          pressed: '#CC8114',
          focus: '#FF9700',
        },
        neutral: {
          1: '#F5F5F5',
          2: '#E0E0E0',
          3: '#9E9E9E',
          4: '#616161',
          5: '#0A0A0A',
        },
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.12)',
        2: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        popup: '4px 4px 40px -1px rgba(0, 0, 0, 0.25)',
        input: 'inset 2px 2px 4px rgba(0, 0, 0, 0.12)',
      },
      outline: {
        btnFocus: '4px solid rgba(255, 151, 0, 0.2)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
