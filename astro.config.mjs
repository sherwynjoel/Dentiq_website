import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    server: {
      fs: {
        allow: [
          "C:/Users/Sherwyn joel/.gemini",
          "C:/Users/Sherwyn joel/OneDrive/Desktop/stockfish/stockfish"
        ]
      }
    }
  }
});
