<template>
  <div id="app">
    검색어 : <input v-model="search">
    <button @click="callNaverAPI">네이버 API 호출</button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',

  data : () => ({
    search : ''
  }),
  
  methods : {

    callNaverAPI(){
      // v1으로 시작하기 때문에 proxy를 탐 -> vue.config.js 확인
        axios.get("/v1/search/webkr.json", {
          headers : {
            "X-Naver-Client-Id" : "iEBjx5CGxoexKDe2WKgj",
            "X-Naver-Client-Secret" : "yXMC7_XwqH"
          },
          params : {
            query : this.search
          }
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
