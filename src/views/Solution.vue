<template>
  <b-container class="p-0">
    <Carousel></Carousel>
    <bread-crumb></bread-crumb>
    <details-one></details-one>
    <details-two></details-two>
    <details-three></details-three>
  </b-container>
</template>

<script>
//引入轮播图组件
import Carousel from '../components/solution/Carousel'
//引入面包屑导航组件
import BreadCrumb from '../components/solution/BreadCrumb'
//引入DetailsOne组件
import DetailsOne from '../components/solution/DetailsOne'
//引入DetailsTwo组件
import DetailsTwo from '../components/solution/DetailsTwo'
//引入DetailsThree 组件
import DetailsThree from '../components/solution/DetailsThree'
export default {
  name:'Solution',
  components:{
    Carousel,
    BreadCrumb,
    DetailsOne,
    DetailsTwo,
    DetailsThree
  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
  }
</style>