/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/components/**/*.html', './src/data/components/*.mdx'],
  presets: [require('./extend.preset.js')],
}
