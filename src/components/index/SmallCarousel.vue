<template>
  <div id="demo" class="container carousel slide " data-interval="4000" data-ride="carousel">
    <!-- 指示符 -->
    <!-- <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul> -->
  
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active ">
        <img width="33%" src="../../assets/index/smallcarousel1.jpg" alt="西安星云宇博数据科技有限公司">
        <img width="33%" src="../../assets/index/smallcarousel2.jpg" alt="西安星云宇博数据科技有限公司">
        <img width="33%" src="../../assets/index/smallcarousel3.jpg" alt="西安星云宇博数据科技有限公司">
      </div>
      <div class="carousel-item ">
        <img width="33%" src="../../assets/index/smallcarousel1.jpg" alt="西安星云宇博数据科技有限公司">
        <img width="33%" src="../../assets/index/smallcarousel2.jpg" alt="西安星云宇博数据科技有限公司">
        <img width="33%" src="../../assets/index/smallcarousel3.jpg" alt="西安星云宇博数据科技有限公司">
      </div>
      <div class="carousel-item ">
        <img width="33%" src="../../assets/index/smallcarousel1.jpg" alt="西安星云宇博数据科技有限公司">
        <img width="33%" src="../../assets/index/smallcarousel2.jpg" alt="西安星云宇博数据科技有限公司">
        <img width="33%" src="../../assets/index/smallcarousel3.jpg" alt="西安星云宇博数据科技有限公司">
      </div>
    </div>
  
    <!-- 左右切换按钮 -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo"  data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<script>
export default {
  name:'SmallCarousel'
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    padding: 1rem 15%  !important;
    background:#E7EAF2;
  }
  /* 轮播图之间留缝隙 */
  .container>.carousel-inner>.carousel-item>img{
    padding:0 .5rem 0 0; 
  }
  .container>.carousel-control-prev{
    width:10%;
    left: 100px;
    color: #ffffff;
  }
  .container>.carousel-control-next{
    width:10%;
    right: 108px;
    color: #B0B0B0;
  }
</style>