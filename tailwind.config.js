/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bubble-cyan": "#00E5FF",
        "bubble-dark": "#0a1f25",
        "ai-purple": "#A855F7",
        "ai-dark": "#1a0b2e",
        "dark-bg": "#0B0C10",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-surface": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        "display": ["Outfit", "sans-serif"],
        "body": ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'gradient-bubble': 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(10,31,37,0) 50%)',
        'gradient-ai': 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(26,11,46,0) 50%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -5px rgba(0, 229, 255, 0.3)',
        'neon-purple': '0 0 20px -5px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
