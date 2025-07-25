/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BloomChain color palette from design framework
        earth: {
          50: '#f3f6f4',
          100: '#e3eae5',
          200: '#c8d5cc',
          300: '#a3b9a9',
          400: '#7a9682',
          500: '#5a7a62',
          600: '#4CAF50', // Primary green
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        golden: {
          50: '#fffef7',
          100: '#fffaeb',
          200: '#fff3c4',
          300: '#ffe897',
          400: '#ffd54f',
          500: '#FFD700', // Primary gold
          600: '#ffb300',
          700: '#ff8f00',
          800: '#e65100',
          900: '#bf360c',
        },
        web3: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196F3', // Primary blue
          600: '#1976d2',
          700: '#1565c0',
          800: '#0d47a1',
          900: '#01579b',
        },
        accent: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#03DAC6', // Cyan accent
          600: '#00897b',
          700: '#00695c',
          800: '#004d40',
          900: '#00251a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['monospace'], // For pixel-art themed text
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'garden-gradient': 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 50%, #1B5E20 100%)',
        'web3-gradient': 'linear-gradient(135deg, #2196F3 0%, #1565C0 50%, #0D47A1 100%)',
        'golden-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF8F00 50%, #E65100 100%)',
        'cosmic-gradient': 'linear-gradient(135deg, #673AB7 0%, #3F51B5 50%, #2196F3 100%)',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.5)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.5)',
        'glow-blue': '0 0 20px rgba(33, 150, 243, 0.5)',
        'pixel': '4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 