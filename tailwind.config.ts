import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'primary-1': 'var(--color-primary-green-1)',
        'primary-2': 'var(--color-primary-green-2)',
        'primary-3': 'var(--color-primary-green-3)',
        'primary-4': 'var(--color-primary-green-4)',
        'primary-5': 'var(--color-primary-green-5)',
        'secondary-1': 'var(--color-secondary-orange-1)',
        'secondary-2': 'var(--color-secondary-orange-2)',
        'secondary-3': 'var(--color-secondary-orange-3)',
        'secondary-4': 'var(--color-secondary-orange-4)',
        'wran-1': 'var(--color-wran-red-1',
        'wran-2': 'var(--color-wran-red-2',
      },
    },
  },
  plugins: [],
} satisfies Config;
