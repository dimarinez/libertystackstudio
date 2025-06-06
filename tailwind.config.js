/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontSize: {
            '5xl': ['3.75rem', { lineHeight: '1' }],
          },
        },
      },
    plugins: [],
  };