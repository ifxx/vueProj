const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/v2': {
        target: 'https://api.ai.prod.eu-central-1.aws.ml.hana.ondemand.com/',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/v2': '' // 移除路径中的 '/api'
        // },
        Headers:{
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  }
});
