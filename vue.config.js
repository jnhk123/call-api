const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/v1': {  // v1으로 시작하는 all을 target으로 proxy한다. 
            target: 'https://openapi.naver.com/', 
            changeOrigin: true 
        }
    }
  }

})
