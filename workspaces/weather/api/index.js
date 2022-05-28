// @ts-check
import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'http://api.weatherapi.com/v1',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: path => path.replace(/^\/api/, ''),
  onProxyReq: proxyReq => {
    const parsed = new URL(proxyReq.path, 'http://api.weatherapi.com/v1');
    parsed.searchParams.set('key', process.env.WEATHER_API_KEY);
    proxyReq.path = parsed.pathname + parsed.search;
  },
});
