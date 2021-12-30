// 该服务为 vercel serve跨域处理
const {
  createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ""
  if (req.url.startsWith('/axiosapi')) {
    target = 'http://www.uniquemo.cn'
  } 
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/backend`
      // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
      '^/axiosapi/': '/'
    }
  })(req, res)
}