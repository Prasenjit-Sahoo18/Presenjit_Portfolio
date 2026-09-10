/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',
        secondary: '#0EA5E9',
        accent: '#67E8F9',
        dark: '#071A2B',
        deep: '#020617',
        light: '#F0F9FF',
        navy: '#0C1A2E',
        'navy-light': '#112240',
        'sky-glow': '#BAE6FD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'type': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'draw': 'draw 2s ease-in-out forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(56,189,248,0.6), 0 0 80px rgba(56,189,248,0.2)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(56,189,248,0.3)',
        'glow-lg': '0 0 40px rgba(56,189,248,0.4), 0 0 80px rgba(56,189,248,0.15)',
        'glow-sm': '0 0 10px rgba(56,189,248,0.2)',
        'inner-glow': 'inset 0 0 20px rgba(56,189,248,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
