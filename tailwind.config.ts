
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
				},
				cyber: {
					'dark': '#1A1F2C',
					'neon': '#33C3F0',
					'electric': '#1EAEDB',
					'purple': '#8B5CF6',
					'charcoal': '#222222',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)',
					},
					'50%': { 
						opacity: '0.7',
						filter: 'brightness(1.3) blur(1px)',
					}
				},
				'electric-bolt': {
					'0%': { 
						height: '0%', 
						opacity: '0.5',
						filter: 'brightness(1) blur(3px)',
					},
					'25%': { 
						height: '100%', 
						opacity: '1',
						filter: 'brightness(1.5) blur(2px)',
					},
					'50%': { 
						height: '100%', 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(1px)',
					},
					'75%': { 
						height: '100%',
						opacity: '1', 
						filter: 'brightness(1.5) blur(2px)',
					},
					'100%': { 
						height: '100%',
						opacity: '0.5',
						filter: 'brightness(1) blur(3px)', 
					}
				},
				'circuit-pulse': {
					'0%': { 
						opacity: '0.1',
						strokeDashoffset: '1000'
					},
					'50%': { 
						opacity: '1',
						strokeDashoffset: '500'
					},
					'100%': { 
						opacity: '0.1',
						strokeDashoffset: '0'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-5px) rotate(1deg)' 
					},
					'75%': { 
						transform: 'translateY(5px) rotate(-1deg)' 
					}
				},
				'glitch': {
					'0%, 100%': { 
						transform: 'translate(0)' 
					},
					'20%': { 
						transform: 'translate(-2px, 2px)' 
					},
					'40%': { 
						transform: 'translate(-2px, -2px)' 
					},
					'60%': { 
						transform: 'translate(2px, 2px)' 
					},
					'80%': { 
						transform: 'translate(2px, -2px)' 
					}
				},
				'assemble': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.1) translateY(20px) rotate(10deg)' 
					},
					'50%': { 
						opacity: '0.5',
						transform: 'scale(0.8) translateY(5px) rotate(2deg)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1) translateY(0) rotate(0)' 
					}
				},
				'matrix-fall': {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0' 
					},
					'50%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translateY(100%)',
						opacity: '0' 
					}
				},
				'rotate-3d': {
					'0%': { 
						transform: 'rotateX(0) rotateY(0)' 
					},
					'50%': { 
						transform: 'rotateX(180deg) rotateY(90deg)' 
					},
					'100%': { 
						transform: 'rotateX(360deg) rotateY(0)' 
					}
				},
				'lightning-flash': {
					'0%, 100%': { 
						opacity: '0',
						filter: 'brightness(1) blur(8px)',
					},
					'10%, 90%': { 
						opacity: '0.2',
						filter: 'brightness(1) blur(4px)',
					},
					'20%, 80%': { 
						opacity: '0.5',
						filter: 'brightness(1.2) blur(2px)',
					},
					'30%, 50%, 70%': { 
						opacity: '1',
						filter: 'brightness(1.5) blur(0px)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'electric-bolt': 'electric-bolt 0.5s ease-in-out forwards',
				'circuit-pulse': 'circuit-pulse 3s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'glitch': 'glitch 0.5s linear infinite',
				'assemble': 'assemble 1.5s ease-out forwards',
				'matrix-fall': 'matrix-fall 3s linear infinite',
				'rotate-3d': 'rotate-3d 8s ease-in-out infinite',
				'lightning-flash': 'lightning-flash 1s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
