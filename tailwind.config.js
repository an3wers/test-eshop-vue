module.exports = {
  content: [
    './index.html',
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
