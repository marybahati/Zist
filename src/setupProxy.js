const { createProxyMiddleware } = require('http-proxy-middleware');
const PROXY_SERVER = 'https://zist.herokuapp.com/'

// const PROXY_SERVER = 'https://j9qvqstev7.execute-api.eu-west-3.amazonaws.com/dev/'
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