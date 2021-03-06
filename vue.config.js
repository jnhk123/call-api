const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/v1': {  // v1으로 시작하는 api주소를 target으로 proxy한다. 
            target: 'https://openapi.naver.com/', 
            changeOrigin: true 
        },

        '/3780000' : {
          target : 'http://apis.data.go.kr'
        }
    }
  },
  outputDir:'./docs',
  publicPath:'/call-api/'

})
