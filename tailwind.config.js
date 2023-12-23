/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Custom size for h1
        'h1-fontsize': ['1.75rem', {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        // Custom size for h2
        'h2-fontsize': ['1.5rem', {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        // Custom size for h3
        'h3-fontsize': ['1.25rem', {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        // Custom size for h4
        'h4-fontsize': ['1.125rem', {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        // Custom size for h5
        'h5-fontsize': ['1rem', {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '500',  
        }],
        // Custom size for h6
        'h6-fontsize': ['0.875rem', {
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '500',
        }],
      },
    },
  },
  plugins: [],
}