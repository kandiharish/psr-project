/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#16A34A',
        accent: '#F59E0B',
        background: '#FFFFFF',
        'light-bg': '#F8FAFC',
        text: '#0F172A',
        'muted-text': '#64748B',
        success: '#22C55E'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
