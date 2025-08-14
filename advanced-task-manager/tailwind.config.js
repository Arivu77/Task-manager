module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        work: '#3b82f6', // blue
        personal: '#ec4899', // pink
        urgent: '#ef4444', // red
        study: '#22c55e', // green
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        'gradient-blue': 'linear-gradient(90deg, #00c6ff, #0072ff)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}