import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
				chat: {
					DEFAULT: "hsl(var(--chat-background))",
					foreground: "hsl(var(--chat-foreground))",
					secondary: "hsl(var(--chat-secondary-background))",
					"secondary-foreground": "hsl(var(--chat-secondary-foreground))",
					primary: "hsl(var(--chat-primary-background))",
					"primary-foreground": "hsl(var(--chat-primary-foreground))",
					border: "hsl(var(--chat-border))",
					bubble: {
						DEFAULT: "hsl(var(--chat-bubble-background))",
						foreground: "hsl(var(--chat-bubble-foreground))",
						border: "hsl(var(--chat-bubble-border))",
					},
				},
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
				"loading-move": {
					"0%": { transform: "translateY(0)" },
					"10%": { transform: "translateY(4px)" },
					"20%": { transform: "translateY(0px)" },
					"30%": { transform: "translateY(-4px)" },
					"40%": { transform: "translateY(0px)" },
				},
				"loading-move-min": {
					"0%": { transform: "translateY(0)" },
					"10%": { transform: "translateY(1px)" },
					"20%": { transform: "translateY(0px)" },
					"30%": { transform: "translateY(-1px)" },
					"40%": { transform: "translateY(0px)" },
				},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				"loading-move": "loading-move 2s linear infinite",
				"loading-move-min": "loading-move-min 2s linear infinite",
  		}
  	}
  },
  plugins: [tailwindAnimate],
} satisfies Config
