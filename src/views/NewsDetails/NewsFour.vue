<template>
  <b-container style="paddingTop:80px"  >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <header>三国专家论道网络安全云峰会 互信应是数字世界共治的基石</header>
    <aside>
      <span>2020年3月21日</span>
      <!-- <span>浏览次数：87</span> -->
    </aside>
    <section>
      <div>在“你中有我，我中有你”的全球化时代，疫情的蔓延让所有人陡然置身于“数字世界”的实战场景中。如何利用数字技术阻止疫情的蔓延，达成数字世界的治理共识，推动全球经济健康和可持续发展，已成全球社会当前普遍关心的问题。</div>
      <footer>
        <img src="../../assets/news/four_two.jpg" alt="西安星云宇博数据科技有限公司">
      </footer>
      
      <div>在3月24日召开的全球首个网络安全行业万人云峰会上，来自中、美、日等国家的行业大咖，围绕“危机下全球化与数字世界治理的殇与问”展开战略对话，与会专家认为，建立互信是扭转逆全球化思潮的关键，也是数字世界携手共商、共治、共赢的基石。</div>
      <div>据悉，这场开创网络安全行业办会先河的万人云峰会，由北京网络安全大会（BCS）主办，来自RSAC2020和BCS两大全球顶级安全大会的行业顶级安全专家，通过1场万人云峰会、1场技术峰会及3场技术分论坛，围绕战略、产业和技术三个维度，把RSAC上世界各国带来的网络安全最前沿的技术信息与产业趋势进一步探讨分享，同时也将中国的网络安全理念与能力传至全球。</div>
      <div>
        “在这场全球共同的战疫中，国际社会表现出同舟共济的生命关怀、主动汇流的援助通道、密切配合的协作机制，是在此次灾难中发掘的人类社会共同财富，展现了人类命运共同体的精神内核。”主持人李晓东表示，自然界的病毒肆虐阻挡不了全球化的进程，其他的病毒也同样不能。全球互联的时代，人类能以更快的速度、更大的智慧，聚合解决问题的能量与办法，也能建立更深的互信交流，共同携手全球共治，共建人类数字文明。
      </div>
      <div>据悉，在万人云峰会上，除了战略对话外，全球安全行业大咖还将从产业、技术等不同维度继续进行深入探讨，将网络安全行业新机遇、新趋势、新技术进行更大范围的分享与传播，以促进全球范围内网络安全领域的交流与合作，推动网络安全产业向更宽领域、更深层次、更高质量发展。</div>
    </section>
    <article>
      <span>下一篇:</span>
      <router-link :to="{name:'news_three'}">
        <span class="pl-2">自动化运维监控工具诞生</span>
      </router-link>
    </article>
  </b-container>
</template>

<script>
export default {
  name:'NewsFour',
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
          text:'三国专家论道网络安全云峰会 互信应是数字世界共治的基石',
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