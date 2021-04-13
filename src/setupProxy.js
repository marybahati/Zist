const { createProxyMiddleware } = require('http-proxy-middleware');
// const PROXY_SERVER = 'http://zist.herokuapp.com/'

const PROXY_SERVER = 'https://d757ifmy5d.execute-api.eu-west-3.amazonaws.com/dev/'
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
