<template>
  <b-container>
    <div>
      <a href="http://www.beian.miit.gov.cn/" target="_blank">陕ICP备17016241号</a>
      <span>西安星云宇博数据科技有限公司</span>   
    </div>
  </b-container>
</template>

<script>
export default {
  name:'Bottom'
}
</script>

<style scoped>
  .container{
      background: #313336;
      max-width: 1920px;
      padding:.5rem 15%;
  }
  .container>div{
    text-align: center;
    font-size:.75rem;
    color:rgba(255,255,255,1);
    opacity:0.2;
  }
  .container>div>a{
    color:#fff;
    text-decoration: none;
  }
  .container>div>span{
    display: inline-block;
    padding:0 0 0 1rem;
  }
</style>