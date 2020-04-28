<template>
    <div id="demo" class="container carousel slide " data-interval="4000" data-ride="carousel">
    <!-- 指示符 -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
  
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active ">
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_zhyw.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_wltp.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_ywjk.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/PC_zcqc.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/pc_zhsb.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/pc_zngj.jpg" alt="西安星云宇博数据科技有限公司"> 
        </router-link>
      </div>
      <div class="carousel-item ">
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_zhyw.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_wltp.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_ywjk.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/PC_zcqc.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/pc_zhsb.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/pc_zngj.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
      </div>
      <div class="carousel-item ">
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_zhyw.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_wltp.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img  width="33%" src="../../assets/product_center/pc_ywjk.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/PC_zcqc.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/pc_zhsb.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
        <router-link :to="{path:'/product/one'}">
          <img width="33%" src="../../assets/product_center/pc_zngj.jpg" alt="西安星云宇博数据科技有限公司">
        </router-link>
      </div>
    </div>
  
    <!-- 左右切换按钮 -->
    <!-- <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon">&lt;</span>
    </a>
    <a class="carousel-control-next" href="#demo"  data-slide="next">
      <span class="carousel-control-next-icon">&gt;</span>
    </a> -->
  </div>
</template>

<script>
export default {
  name:'SmallCarousel'
}
</script>

<style scoped>
  .container{
      padding: 0 15% 3rem;
  }
  /* 改变轮播图的切换栏的位置 */
  .container>.carousel-indicators{
    margin-bottom: 1rem;
  }
  /* 更改轮播图的切换栏的样式 */
  .container>.carousel-indicators>li[data-v-63be8e0d] {
    background-color: #3C8AFF;
  }
  .container>.carousel-indicators>li{
    background-color: #CFD7E4;
  }
   /* 轮播图之间留缝隙 */
  .container>.carousel-inner>.carousel-item>a>img{
    padding:0 .5rem 0 0; 
  }
  
  /* 对轮播图左右切换按钮更改样式 */
  /* .container>.carousel-control-prev{
    width:10%;
    left: 100px;
  }
  .container>.carousel-control-prev>.carousel-control-prev-icon{
    background-image: none;
    background: none;
    font-size: 1.5rem;
    padding-bottom: 8rem;
    color: black;
  }
  .container>.carousel-control-next{
    width:10%;
    right: 108px;
  } */
</style>