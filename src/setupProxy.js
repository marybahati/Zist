const { createProxyMiddleware } = require('http-proxy-middleware');
const PROXY_SERVER = 'http://zist.herokuapp.com/'
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: PROXY_SERVER,
      changeOrigin: true,
      disableHostCheck: true,
      pathRewrite: { '^/api': '' }
    })
  )
}
