// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new PostCSS plugin
    autoprefixer: {}, // Still needed for vendor prefixes
  },
};

export default config;