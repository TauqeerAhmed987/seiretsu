/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#E42313',
        dark: '#121022',
        'dark-soft': '#1A1830',
        heading: '#181633',
        body: '#6B7280',
      },
      fontFamily: {
        heading: ['Jost', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(18, 16, 34, 0.08)',
        'card-hover': '0 20px 50px rgba(228, 35, 19, 0.15)',
        button: '0 10px 25px rgba(228, 35, 19, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
