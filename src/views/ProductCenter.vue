<template>
  <b-container class="p-0">
    <!-- <Carousel></Carousel> -->
    <product-details></product-details>
    <!-- <small-carousel></small-carousel> -->
    <Details></Details>
  </b-container>
</template>

<script>
// 将product_center中的组件依次引入到ProductCenter组件中
//1.引入轮播图组件Carousel.vue
import Carousel from '../components/product_center/Carousel'
//2.引入产品详情组件ProductDetails.vue
import ProductDetails from '../components/product_center/ProductDetails'
//3.引入小轮播图组件SmallCarousel.vue组件
import SmallCarousel from '../components/product_center/SmallCarousel'
//4.引入综合运维详情组件Details.vue组件
import Details from '../components/product_center/Details'
export default {
  name:'ProductCenter',
  components:{
    Carousel,
    ProductDetails,
    SmallCarousel,
    Details
  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    background: #e7eaf2;
  }
</style>