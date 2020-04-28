<template>
  <b-container style="paddingTop:80px"  >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <header>工信部部署开展2020年IPv6端到端贯通能力提升专项行动</header>
    <aside>
      <span>2020年3月18日</span>
      <!-- <span>浏览次数：105</span> -->
    </aside>
    <section>
      <div>工业和信息化部近日发文部署开展2020年IPv6端到端贯通能力提升专项行动。行动包括优化提升IPv6网络接入能力、加快提升内容分发网络（CDN）IPv6应用加速能力、大幅提升云服务平台IPv6业务承载能力、全面扩大数据中心（IDC）IPv6覆盖范围、着力提升终端设备IPv6支持能力、稳步提升行业网站及互联网应用IPv6浓度、着力强化IPv6 网络安全保障能力等七项重点任务。</div>
      <footer>
        <img src="../../assets/details_one/pc_peit1.jpg" alt="西安星云宇博数据科技有限公司">
      </footer>
      
      <div>全面扩大数据中心（IDC）IPv6覆盖范围。中国电信、中国移动、中国联通进一步加强对中小型数据中心和机房的IPv6改造。阿里云、腾讯云、百度云、京东云、华为云、世纪互联、鹏博士、秦淮科技、新网互联、方正信息、西部数码、万国数据、光环新网加快数据中心IPv6改造力度，到2020年第三季度末，完成年报中全部数据中心的IPv6改造，形成全国范围数据中心IPv6覆盖能力。</div>
      <div>着力强化IPv6 网络安全保障能力。各相关企业要进一步完善针对IPv6的网络安全定级备案、风险评估、通报预警、灾难备份及恢复等工作。推动IPv6环境下网络安全产品和服务的应用，鼓励构建IPv6安全产品孵化平台和测试环境，推动在研IPv6安全产品孵化，强化IPv6安全产品应用性能验证。基础电信企业和重点IDC、CDN等企业要做好僵木蠕、移动互联网恶意程序监测处置系统、信息安全管理系统等安全技术手段IPv6配套改造工作，强化IPv6环境下漏洞、违法信息等的监测发现与处置。</div>
    </section>
    <article>
      <span>下一篇:</span>
      <router-link :to="{name:'news_one'}">
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
          text:'工信部部署开展2020年IPv6端到端贯通能力提升专项行动',
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