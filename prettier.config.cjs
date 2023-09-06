/** @type {import('prettier').Options} */
const config = {
  ...require('@vercel/style-guide/prettier'),
  arrowParens: 'avoid',
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss']
};

module.exports = config;