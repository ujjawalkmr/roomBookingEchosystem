const { createProxyMiddleware } = require("http-proxy-middleware");
const { PROPERTY_SERVICE } = require("../config/services");

module.exports = createProxyMiddleware({
  target: PROPERTY_SERVICE,
  changeOrigin: true,
  
});