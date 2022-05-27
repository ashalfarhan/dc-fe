import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://www.metaweather.com/api',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api': '',
  },
});
