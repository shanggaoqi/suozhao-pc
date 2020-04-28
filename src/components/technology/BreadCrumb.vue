<template>
  <b-container>
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
  </b-container>
</template>

<script>
export default {
   name:'BreadCrumb',
   data(){
    return{
      items:[
        {
          text:'您现在的位置:',
          active:false
        },
        {
          text:'首页',
          to:{name:'index'},
          active:false
        },
        {
          text:'技术服务',
          to:{name:"news"},
          active:false
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container{
    padding:1.5rem 15% 0;
  }
  /* 给面包屑导航更改样式 */
  .container>.breadcrumb>.breadcrumb-item:nth-child(3){
    padding:0;
  }
  .container>.breadcrumb>.breadcrumb-item:nth-child(2)::before{
    display: inline-block;
    padding:0;
    content: "";
  }
  .container>.breadcrumb>.breadcrumb-item>a{
    color: #666666;
    text-decoration: none;
  }
  .container>.breadcrumb>.breadcrumb-item:nth-child(3)::before{
    display: inline-block;
    padding: 0 .5rem;
    color: #666666;
    content: ">";
  }
</style>