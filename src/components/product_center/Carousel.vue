<template>
  <b-carousel
    :interval="4000"
    img-width="1024"
    img-height="480"
    style="paddingTop:70px"
  >
    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <b-carousel-slide img-alt="西安星云宇博数据科技有限公司">
      <template v-slot:img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../../assets/product_center/banner_yyal.jpg"
          alt="西安星云宇博数据科技有限公司"
        >
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name:'Carousel'
}
</script>

<style scoped>
</style>