<template>
  <b-container>
      <Carousel></Carousel>
      <Search></Search>
      <small-carousel></small-carousel>
  </b-container>
</template>

<script>
import Carousel from '../components/index/Carousel'
import Search from '../components/index/Search'
import SmallCarousel from '../components/index/SmallCarousel'
export default {
    name:'index',
    components:{
      Carousel,
      Search,
      SmallCarousel
    }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    padding:0;
    position: relative;
  }
</style>