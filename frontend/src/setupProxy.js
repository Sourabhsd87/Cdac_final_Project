const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy middleware for /api
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );

  // Proxy middleware for /maps
  app.use(
    '/maps',
    createProxyMiddleware({
      target: 'https://maps.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/maps': ''
      }
    })
  );
};
