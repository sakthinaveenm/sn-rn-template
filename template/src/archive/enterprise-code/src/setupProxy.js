const {createProxyMiddleware} = require('http-proxy-middleware');
const CONFIG = require('./config');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: CONFIG.BACKEND_URL,
      changeOrigin: true,
    }),
  );
};
