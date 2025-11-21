/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cloudflare-blue': '#1d4ed8',
        'error-red': '#dc2626',
        'success-green': '#16a34a',
        'gray-light': '#f3f4f6',
        'gray-medium': '#6b7280',
        'gray-dark': '#374151'
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}