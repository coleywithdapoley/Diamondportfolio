import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Color System
      colors: {
        // Primary: Deep Jewel Purple
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#4C1D95', // Deep jewel purple
          950: '#3b0764',
        },
        // Secondary: Gold Accent
        gold: {
          50: '#fffbeb',
          100: '#fef3c7', // Soft cream
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B', // Gold accent
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Accent: Soft Cream
        cream: {
          50: '#fffbeb',
          100: '#FEF3C7', // Soft cream
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        // Neutral: Slate Grays
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Text: High Contrast Dark Gray
        text: {
          primary: '#1e293b', // High contrast dark gray
          secondary: '#475569',
          tertiary: '#64748b',
          light: '#94a3b8',
          inverse: '#ffffff',
        },
        // Dark mode colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      // Typography System
      fontFamily: {
        // Headings: Elegant serif or sophisticated sans-serif
        heading: ['Playfair Display', 'Georgia', 'serif'],
        // Alternative heading font (sophisticated sans-serif)
        'heading-alt': ['Inter', 'system-ui', 'sans-serif'],
        // Body: Clean, readable sans-serif
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Tagline: Script or decorative font
        script: ['Dancing Script', 'Brush Script MT', 'cursive'],
        // Decorative alternative
        decorative: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.5' }],
        'h5': ['1.25rem', { lineHeight: '1.5' }],
        'h6': ['1rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'tagline': ['1.5rem', { lineHeight: '1.4', fontStyle: 'italic' }],
      },
      // Spacing System (8px base unit)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      // Layout Grid System
      gridTemplateColumns: {
        'portfolio': 'repeat(auto-fit, minmax(300px, 1fr))',
        'projects': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
      maxWidth: {
        'container': '1280px',
        'content': '1024px',
        'narrow': '768px',
      },
      // Custom Animations
      animation: {
        // Fade in animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        // Slide animations
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        // Hover transitions
        'hover-lift': 'hoverLift 0.3s ease-out',
        'hover-scale': 'hoverScale 0.3s ease-out',
        // Loading states
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        // Button interactions
        'button-press': 'buttonPress 0.2s ease-out',
        'button-glow': 'buttonGlow 2s ease-in-out infinite',
        // Scroll animations
        'scroll-fade-up': 'scrollFadeUp 0.8s ease-out',
      },
      keyframes: {
        // Fade animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Slide animations
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // Hover transitions
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        // Button interactions
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        buttonGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(244, 158, 11, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(244, 158, 11, 0.8)' },
        },
        // Scroll animations
        scrollFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Transition defaults
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      // Box shadows
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'glow-purple': '0 0 20px rgba(76, 29, 149, 0.3)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config

