import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  plugins: [],
  content: [
    './components/**/*.{vue,ts,tsx}',
    './layouts/**/*.{vue,ts,tsx}',
    './pages/**/*.{vue,ts,tsx}',
    './composables/**/*.{ts,tsx}',
    './plugins/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
    './app.{js,ts,vue}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Lato"', '-apple-system', 'BlinkMacSystemFont'],
      serif: ['"PT Serif"', 'serif'],
    },
    extend: {
      borderColor: theme => ({
        DEFAULT: theme.colors.neutral[300],
      }),
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#dfdfe2',
          300: '#cacace',
          400: '#aaaab1',
          500: '#6f6f78',
          600: '#62626a',
          700: '#4e4e55',
          800: '#3b3b40',
          900: '#27272a',
          DEFAULT: '#3b3b40',
        },
        primary: {
          25: '#f7ebea',
          50: '#eed7d6',
          100: '#e6c4c1',
          200: '#deb0ad',
          300: '#cd8883',
          400: '#bd615a',
          500: '#ac3931',
          600: '#8a2e27',
          700: '#67221d',
          800: '#451714',
          900: '#34110f',
          DEFAULT: '#ac3931',
        },
        danger: {
          50: '#fde8ed',
          100: '#fad2da',
          200: '#f5a5b5',
          300: '#f07791',
          400: '#eb4a6c',
          500: '#e61d47',
          600: '#b81739',
          700: '#8a112b',
          800: '#5c0c1c',
          900: '#2e060e',
          DEFAULT: '#e61d47',
        },
      },
    },
  },
}
