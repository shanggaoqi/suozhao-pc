<template>
  <b-container class="p-0">
    <Carousel></Carousel>
    <BreadCrumb></BreadCrumb>
    <small-carousel></small-carousel>
  </b-container>
</template>

<script>
//引入轮播图组件
import Carousel from '../components/News/Carousel'
//引入面包屑导航组件
import BreadCrumb from '../components/News/BreadCrumb'
//引入小轮播图组件
import SmallCarousel from '../components/News/SmallCarousel'
export default {
  name:'News',
  //引入其中需要的组件
  components:{
    Carousel,
    BreadCrumb,
    SmallCarousel
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
  }
</style>