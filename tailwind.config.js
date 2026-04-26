/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 40px rgba(15, 23, 42, 0.12)',
        panel: '0 18px 60px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(236, 72, 153, 0.16), transparent 26%), radial-gradient(circle at 90% 10%, rgba(99, 102, 241, 0.14), transparent 24%), linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #eef2ff 100%)',
      },
    },
  },
  plugins: [],
}
