/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#40CD72',
          main80: '#40CD7280',
          light: '#e5fbef',
          shade: '#2DAD5A',
          dark: '#488a5d',
          blue: '#4055CD',
          purple: '#CD409B',
          yellow: '#E0C631',
          orange: '#cd4c40'
        },
        secondary: {
          main: '#61892F',
          tint: '#00755F',
          shade: '#006769',
          light: '#2F814A',
          dark: '#4b75a4'
        },
        dark: {
          1: '#161822',
          2: '#2B2F40',
          3: '#3F455A'
        },
        alerts: {
          error: '#FF7272',
          warning: '#FFBF77',
          success: '#4ED3A1'
        },
        white: '#FFFFFF',
        backdrop: '#00000080'
      },
      padding: {
        '73': '73px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        '2': '2px',
        '4': '4px',
        '6': '6px',
      },
    },
  },
  plugins: [],
}
