import { createProxyMiddleware } from 'http-proxy-middleware'

export default createProxyMiddleware({
  target: 'https://www.metaweather.com/api',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api': '',
  },
  onError: (err, _req, _res, target) => {
    console.log('[Proxy Error] to %s: %s', target, err.message)
  },
})
