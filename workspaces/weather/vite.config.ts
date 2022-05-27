import 'dotenv/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { URL } from 'url';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3004,
    proxy: {
      '^/api': {
        target: 'http://api.weatherapi.com/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        configure: proxy => {
          proxy.on('proxyReq', proxyReq => {
            const parsed = new URL(
              proxyReq.path,
              'http://api.weatherapi.com/v1'
            );
            parsed.searchParams.set('key', process.env.WEATHER_API_KEY);
            proxyReq.path = parsed.pathname + parsed.search;
          });
        },
      },
    },
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
});
