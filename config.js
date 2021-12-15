module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",

  // primary = background-darker
  // background = background
  // neutral-100 = neutral-10000
  // primary = primary
  // primary-dark = primary-dark
  // primary-focus = primary (opacity 20%)
  // neutral-100 = neutral-10000
  // neutral-200 = neutral-20000
  // neutral-400 = neutral-400
  // neutral-400 = neutral-400
  // neutral-900 = neutral-900

  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FF9700',
          white: '#FFFFFF',
          gray: '#3C3C3C',
        },
        primary: {
          DEFAULT: '#FF9700',
          dark: '#CC8114',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          900: '#171717',
        },
        background: {
          DEFAULT: '#262626',
          darker: '#1E1E1E',
        },
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.12)',
        2: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        popup: '4px 4px 40px -1px rgba(0, 0, 0, 0.25)',
        input: 'inset 2px 2px 4px rgba(0, 0, 0, 0.12)',
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
