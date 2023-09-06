import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nimbus-sans-d-ot)', ...fontFamily.sans]
      },
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        primary: 'hsl(var(--color-primary))'
      }
    }
  },
  plugins: []
};

export default config;
