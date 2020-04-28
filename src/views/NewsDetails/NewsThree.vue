<template>
  <b-container style="paddingTop:80px"  >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <header>自动化运维监控工具诞生</header>
    <aside>
      <span>2020年3月19日</span>
      <!-- <span>浏览次数：79</span> -->
    </aside>
    <section>
      <div>自动化运维监控工具诞生,通过DCOS的全生命周期自动化平台管理，实现部署、监控、分析、管理全自动，数据中心的无人值守。尽可能的保证服务过程的标准化，减少其中的人为管理。</div>
      <footer>
        <img src="../../assets/news/three_one.jpg" alt="西安星云宇博数据科技有限公司">
      </footer>
      
      <div>数据中心运维包含很多的内容，从底层往上，包含物理资源、虚拟资源、系统、应用、业务的运维。复杂度往上逐层递增。而重要性却是以底层运维为基础。</div>
      <div>众所周知，运维部门的多数的运维工作80%集中在底层物理资源、系统资源运维。这正符合二八定律，我们在花80%的时间做20%的工作内容。如果是这样，我们需要将运维工作做剥离。将这20%的工作从整个运维体系剥离开来，通过带外网络架构来进行统一管理，建立一个底层运维的“简生态”。用更直观、更标准化的视图来简化这一部分的管理，提升基础工作的管理效率，实实在在的提升日常运维管理工作的质量。这就好像物理设备是水杯，而设备上承载的万千业务是水杯里的可乐或者柠檬茶，无论水杯里装的是什么，带外管理的任务只负责保障水杯的完整，不会有水杯里的内容流失。最最重要的任务，用最简化的方式来保驾护航，反而能赢得最佳的效果。</div>
    </section>
    <article>
      <span>下一篇:</span>
      <router-link :to="{name:'news_two'}">
        <span class="pl-2">工信部部署开展2020年IPv6端到端贯通能力提升专项行动</span>
      </router-link>
    </article>
  </b-container>
</template>

<script>
export default {
  name:'NewsOne',
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
          text:'新闻动态',
          to:{name:"news"},
          active:false
        },
        {
          text:'自动化运维之后，你还在人工巡检吗',
          active:false
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    padding:1rem 15% 3rem;
  }
  /* 给面包屑导航更改样式 */
  .container>.breadcrumb>.breadcrumb-item:nth-child(3){
    padding:0;
  }
  .container>.breadcrumb>.breadcrumb-item:nth-child(4){
    padding: 0;
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
  .container>.breadcrumb>.breadcrumb-item:nth-child(4)::before{
    display: inline-block;
    padding: 0 .5rem;
    color: #666666;
    content: ">";
  }
  /* 对新闻内容部分进行样式设置 */
  .container>header{
    width:100%;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 1rem; 
  }
  .container>aside{
    width: 100%;
    font-size: .75rem;
    text-align: center;
    padding-bottom: 3rem;
    color: #666666;
  }
  /* .container>aside>span:first-child{
    display: inline-block;
    padding-right: 2rem;
  } */
  .container>section>div{
    padding-bottom:1rem;
    text-indent: 2em;
    color: #666666;
  }
  .container>section>footer{
    width: 100%;
    padding:1rem 10% 2rem;
  }
  .container>section>footer>img{
    width: 100%;
  }
  .container>article{
      padding-top:2rem;
  }
</style>