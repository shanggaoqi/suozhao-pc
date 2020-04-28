<template>
  <div id="app" key="Key">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <Bottom></Bottom>
  </div>
</template>
<script>
 
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Bottom from './components/Bottom'
  import { index } from "./router/index"
  export default{
    name: 'app',
    index,
    components: {
     Header,
     Footer,
     Bottom
    },
    data(){
      return {
        Key:"" // 监听URL的变化(解决路由不变,参数变,但页面不刷新的问题)
      }
    },
    watch: {
      $route: function(newUrl, oldUrl) {
        // 路由(包括参数)发生变化时,对Key进行赋值
        // 如果Key发生了变化,则页面执行刷新
        this.Key = new Date().getTime();
      }
    }
  }

</script>  

<style>
#app {
  font-family:Microsoft YaHei;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
  max-width: 1920px;
}
</style>
