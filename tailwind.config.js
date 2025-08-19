/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // manual dark mode with class switching
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            900: '#153049',
            800: '#134161',
            700: '#112d4e',
          },
          yellowgradientstart: '#f2b90c',
          yellowgradientend: '#f28b0c',
          teal: {
            500: '#2dd4bf',
            400: '#14b8a6',
          },
          warmgray: {
            100: '#f5f5f4',
            300: '#d4d4d8',
            500: '#737373'
          }
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
          serif: ['Lora', 'ui-serif', 'Georgia']
        },
        borderRadius: {
          sm: '6px'
        },
        boxShadow: {
          subtle: '0 2px 6px rgba(0,0,0,0.12)'
        }
      }
    },
    plugins: []
  };  