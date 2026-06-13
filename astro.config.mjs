import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wolfstride.in',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    server: {
      fs: {
        allow: [
          "C:/Users/Sherwyn joel/.gemini",
          "C:/Users/Sherwyn joel/OneDrive/Desktop/stockfish/stockfish",
          "C:/Users/Sherwyn joel/OneDrive/Desktop/dentiq/Dentiq"
        ]
      }
    }
  }
});
