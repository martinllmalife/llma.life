import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://llma.life',
      dynamicRoutes: [
        '/',
        '/blog',
        '/community',
        '/press',
        '/5-truths-that-saved-me',
        '/lavender-transition-guide',
        '/the-six-pillars',
        '/blog/gen-z-doesnt-want-romance-they-want-a-real-partner',
        '/blog/tax-benefits-are-not-a-reward-for-fucking',
        '/blog/you-can-fck-a-stranger-but-i-cant-love-my-best-friend',
        '/blog/when-motherly-love-showed-up-differently',
        '/blog/barry-diller-came-out-at-82',
        '/blog/when-you-dont-see-the-path-you-become-it',
        '/blog/welcome-to-the-lavender-logs',
      ],
    }),
  ],
})
