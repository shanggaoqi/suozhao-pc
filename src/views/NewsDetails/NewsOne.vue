<template>
  <b-container style="paddingTop:80px"  >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <header>工信部实施《中小企业数字化赋能专项行动方案》</header>
    <aside>
      <span>2020年3月17日</span>
      <!-- <span>浏览次数：209</span> -->
    </aside>
    <section>
      <div>《方案》提出，要坚持统筹推进新冠肺炎疫情防控和经济社会发展，以新一代信息技术与应用为支撑，以提升中小企业应对危机能力、夯实可持续发展基础为目标，集聚一批面向中小企业的数字化服务商，培育推广一批符合中小企业需求的数字化平台、系统解决方案、产品和服务，助推中小企业通过数字化网络化智能化赋能实现复工复产，增添发展后劲，提高发展质量。</div>
      <footer>
        <img src="../../assets/details_one/pc_peit1.jpg" alt="西安星云宇博数据科技有限公司">
      </footer>
      
      <div>坚持统筹推进新冠肺炎疫情防控和经济社会发展，以新一代信息技术与应用为支撑，以提升中小企业应对危机能力、夯实可持续发展基础为目标，集聚一批面向中小企业的数字化服务商，培育推广一批符合中小企业需求的数字化平台、系统解决方案、产品和服务，助推中小企业通过数字化网络化智能化赋能实现复工复产，增添发展后劲，提高发展质量。</div>
      <div>推动中小企业落实《网络安全法》等法律法规和技术标准的要求，强化网络与数据安全保障措施。建设工业互联网安全公共服务平台，面向广大中小企业提供网络和数据安全技术支持服务。鼓励安全服务商创新安全服务模式，提升安全服务供给能力，为中小企业量身定制全天候、全方位、立体化的安全解决方案。</div>
    </section>
    <article>
      <span>下一篇:</span>
      <router-link :to="{path:'/news/one'}">
        <span class="pl-2">工信部实施《中小企业数字化赋能专项行动方案》</span>
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
          text:'工信部实施《中小企业数字化赋能专项行动方案》',
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