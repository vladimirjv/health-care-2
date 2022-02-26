const tailwindForms = require('@tailwindcss/forms');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#23355f',
        secondary: '#3a4d7f',
        secondary_accent: '#51669e',
        accent: '#4671c6',
      },
    },
  },
  plugins: [tailwindForms],
}
