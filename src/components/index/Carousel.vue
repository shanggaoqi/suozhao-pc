<template>
  <b-container style="paddingTop:70px">
    <b-carousel
      :interval="3000"
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/index/banner.jpg"
            alt="西安星云宇博数据科技有限公司"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/index/banner1.jpg"
            alt="西安索兆信息科技有限公司"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/index/banner2.jpg"
            alt="西安索兆信息科技有限公司"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template> 

<script>
export default {
    name:'Carousel',
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    padding:0;
  }
  
</style>