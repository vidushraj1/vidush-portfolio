import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px) rotateY(90deg)' },
					'100%': { opacity: '1', transform: 'translateX(0) rotateY(0deg)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(50px) rotateY(-90deg)' },
					'100%': { opacity: '1', transform: 'translateX(0) rotateY(0deg)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.5) rotate(-180deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3) rotate(-120deg)' },
					'50%': { opacity: '1', transform: 'scale(1.2) rotate(10deg)' },
					'70%': { transform: 'scale(0.9) rotate(-5deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.7', transform: 'scale(1.05)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
					'50%': { transform: 'translateY(-20px) rotateX(10deg)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'pulse-glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 20px hsl(280 100% 60% / 0.4))' },
					'50%': { filter: 'drop-shadow(0 0 40px hsl(280 100% 60% / 0.8))' }
				},
				'pulse-glow-pink': {
					'0%, 100%': { filter: 'drop-shadow(0 0 20px hsl(320 100% 60% / 0.4))' },
					'50%': { filter: 'drop-shadow(0 0 40px hsl(320 100% 60% / 0.8))' }
				},
				'pulse-glow-blue': {
					'0%, 100%': { filter: 'drop-shadow(0 0 20px hsl(240 100% 70% / 0.4))' },
					'50%': { filter: 'drop-shadow(0 0 40px hsl(240 100% 70% / 0.8))' }
				},
				'pulse-glow-green': {
					'0%, 100%': { filter: 'drop-shadow(0 0 20px hsl(120 100% 50% / 0.4))' },
					'50%': { filter: 'drop-shadow(0 0 40px hsl(120 100% 50% / 0.8))' }
				},
				'card-float': {
					'0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
					'50%': { transform: 'translateY(-10px) rotateY(2deg)' }
				},
				'card-bounce': {
					'0%': { transform: 'scale(1) rotateZ(0deg)' },
					'25%': { transform: 'scale(1.05) rotateZ(1deg)' },
					'50%': { transform: 'scale(1.1) rotateZ(-1deg)' },
					'75%': { transform: 'scale(1.05) rotateZ(0.5deg)' },
					'100%': { transform: 'scale(1.08) rotateZ(0deg)' }
				},
				'btn-wiggle': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(3deg)' },
					'75%': { transform: 'rotate(-3deg)' }
				},
				'underline-glow': {
					'0%': { boxShadow: '0 0 5px hsl(280 100% 60% / 0.5)' },
					'50%': { boxShadow: '0 0 20px hsl(280 100% 60% / 0.8), 0 0 30px hsl(320 100% 60% / 0.6)' },
					'100%': { boxShadow: '0 0 5px hsl(280 100% 60% / 0.5)' }
				},
				'particles-float': {
					'0%, 100%': { transform: 'translateX(0%) translateY(0%) scale(1)' },
					'33%': { transform: 'translateX(30px) translateY(-30px) scale(1.1)' },
					'66%': { transform: 'translateX(-20px) translateY(20px) scale(0.9)' }
				},
				'icon-bounce': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
					'50%': { transform: 'translateY(-10px) rotateZ(180deg)' }
				},
				'icon-spin': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'icon-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.2)' }
				},
				'typing': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(280 100% 60%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-in-left': 'fade-in-left 1s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-in-right': 'fade-in-right 1s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'pulse-glow-pink': 'pulse-glow-pink 2.5s ease-in-out infinite',
				'pulse-glow-blue': 'pulse-glow-blue 3s ease-in-out infinite',
				'pulse-glow-green': 'pulse-glow-green 2.2s ease-in-out infinite',
				'card-float': 'card-float 6s ease-in-out infinite',
				'card-bounce': 'card-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'btn-wiggle': 'btn-wiggle 0.5s ease-in-out',
				'underline-glow': 'underline-glow 0.5s ease-in-out',
				'particles-float': 'particles-float 10s ease-in-out infinite',
				'icon-bounce': 'icon-bounce 2s ease-in-out infinite',
				'icon-spin': 'icon-spin 3s linear infinite',
				'icon-pulse': 'icon-pulse 2s ease-in-out infinite',
				'typing': 'typing 3s steps(20) infinite alternate',
				'blink': 'blink 1s step-end infinite'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glow-pink': 'var(--shadow-glow-pink)',
				'glow-blue': 'var(--shadow-glow-blue)',
				'glow-green': 'var(--shadow-glow-green)',
				'card': 'var(--shadow-card)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
