// 该服务为 vercel serve跨域处理
const {
  createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
  const target = "http://www.uniquemo.cn"
  createProxyMiddleware('/api',{
    target,
    changeOrigin: true,
  })(req, res)
  createProxyMiddleware('/graphql',{
    target,
    changeOrigin: true,
  })(req, res)
}