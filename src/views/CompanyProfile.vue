<template>
  <b-container class="p-0">
    <Carousel></Carousel>
    <bread-crumb></bread-crumb>
    <company-details></company-details>
  </b-container>
</template>

<script>
//1.引入轮播图组件
import Carousel from '../components/company_profile/Carousel'
//2.引入面包屑导航组件
import BreadCrumb from '../components/company_profile/BreadCrumb'
//3.引入CompanyDetails.vue
import CompanyDetails from '../components/company_profile/CompanyDetails'
export default {
  name:'CompanyProfile',
  components:{
    Carousel,
    BreadCrumb,
    CompanyDetails
  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
  }
</style>