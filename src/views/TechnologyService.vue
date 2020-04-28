<template>
  <b-container class="p-0">
     <Carousel></Carousel>
      <bread-crumb></bread-crumb>
      <Details></Details>
      <details-two></details-two>
      <details-three></details-three>
      <footer-image></footer-image>
  </b-container>
   
  
</template>

<script>
import Carousel from '../components/technology/Carousel'
import BreadCrumb from '../components/technology/BreadCrumb'
import Details from '../components/technology/Details'
import DetailsTwo from '../components/technology/DetailsTwo'
import DetailsThree from '../components/technology/DetailsThree'
import FooterImage from '../components/technology/FooterImage'
export default {
  name:'TechnologyService',
  components:{
    Carousel,
    BreadCrumb,
    Details,
    DetailsTwo,
    DetailsThree,
    FooterImage
  },
  data(){
    return{
      
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    
  }
</style>