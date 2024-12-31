/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212', // Deep gray background as a base color
        surface: '#1E1E1E',    // Slightly lighter for surfaces
        accent: '#1E90FF ',     // Accent color for CTAs (bright orange-red)
        muted: '#2A2A2A',      // Muted gray for secondary surfaces
        lightGray: '#AAAAAA',  // Light gray for secondary text/icons
        darkGray: '#2F2F2F',   // Dark gray for nav/headers
        "darkDark": '#0D0D0F',

      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.85rem', { lineHeight: '1rem' }],      // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }],         // 48px
        '6xl': ['4rem', { lineHeight: '1' }],         // 48px

      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
        '40': '10rem',    // 160px
        '48': '12rem',    // 192px
        '56': '14rem',    // 224px
        '64': '16rem',    // 256px
      },
      height: {
        nav: '3rem',      // 64px, could be adjusted as per requirement
      },
      borderRadius: {
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px
        'lg': '0.5rem',   // 8px
        'xl': '1rem',     // 16px
      },
      boxShadow: {
        'cta': '0 4px 6px rgba(30, 144, 255, 0.3)', // Soft shadow for accent buttons
      },
    },
  },
  plugins: [],
};
