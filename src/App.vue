<template>
  <div id="app">
    <p>
      검색어 : <input v-model="search">
      <button @click="callNaverAPI">네이버 API 호출</button>
    </p>

    <p>
      <button @click="callSungNam">공공데이터 호출</button>
    </p>

    <p>
      <button @click="callSungNam2">공공데이터 호출 (우회)</button>
    </p>
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
            "X-Naver-Client-Id" : process.env.VUE_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret" : process.env.VUE_APP_NAVER_CLIENT_SECRET
          },
          params : {
            query : this.search
          }
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        })
    },

    callSungNam() {
      axios.get('/3780000/SeongnamGiftStoreInfoService/getInfolist', {
        params : {
          ServiceKey : process.env.VUE_APP_ORG_SERVICE_KEY,
          pageNo : 1,
          numOfRows	: 10,
          gu : '수정구',
          dong : '수진2동'
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error); 
      })
    },

    callSungNam2() {
      axios.get('https://devcury.kr/api/api/sungnam', {
        params : {
          serviceKey : process.env.VUE_APP_ORG_SERVICE_KEY,
          pageNo : 1,
          numOfRows	: 10,
          gu : '수정구',
          dong : '수진2동'
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error); 
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
