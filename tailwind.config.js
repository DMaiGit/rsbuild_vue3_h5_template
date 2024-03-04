/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/**/*.{html,js,ts,jsx,tsx,vue}'
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    'HanSans': ['HanSans']
  },
};
