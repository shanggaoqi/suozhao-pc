<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>信息安全等级保护建设解决方案</header>
    <section>信息安全等级保护是国家信息安全保障的基本制度、基本策略、基本方法。信息安全等级保护工作包括定级备案、安全建设和整改、信息安全等级测评、信息安全检查五个阶段。信息系统建设完成后，运营、使用单位或者其主管部门应当选择符合国家要求的测评机构，依据《信息系统安全等级保护测评要求》等技术标准，定期对信息系统安全等级状况开展等级测评。</section>
    <article>等级保护建设流程</article>
    <aside>
      <div>
        <span></span>
        <span>定级备案：编写定级报告、填写定级备案表，完成在公安机关的定级备案</span>
      </div>
      <div>
        <span></span>
        <span>差距评估：采用技术手段和访谈调查方式发现现状与国家要求之间的差距</span>
      </div>
      <div>
        <span></span>
        <span>方案设计：依照国家相关标准，完成等级保护建设整改方案设计</span>
      </div>
      <div>
        <span></span>
        <span>建设整改：完成设备采购及调整、策略配置调优、完善管理制度等工作</span>
      </div>
      <div>
        <span></span>
        <span>系统测评：请测评中心完成系统测评，获得测评报告</span>
      </div>
    </aside>
    <article>等级保护建设解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>等级保护建设解决方案助力用户《信息安全技术网络安全等级保护基本要求》建设。我们以等保相关标准为依据，依托丰富的网络安全行业经验，提升用户网络关键基础设施综合管理能力，助力用户通过等级保护测评。</span>
      </div>
      <div>
        <span></span>
        <span>管理与运营是企业安全性的最终体现，随着安全越发受重视，企业在安全管理方面也要与时俱进。IT运维是一个很大的范畴，涉及到的部门、架构、技术、产品十分广泛。网络管理软件是运维人员应配备的管理工具。</span>
      </div>
      <div>
        <span></span>
        <span>用户可配套“监控+分析+运维+安管+日志+开发”六大模块进行IT运维智能管理，对网络设备、计算机、服务器、智能设备、物联网、工业设备、光设备、云设备、通信设备等所有联网设备及软件服务的集中管控，实现用户IT业务运营维护AI智能化、自动化、精细化、可视化、大数据分析、功能扩展和开发集成的需求。</span>
      </div>
      
    </aside>
  </b-container>
</template>

<script>
export default {
  name:'DetailsSeven1',
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
          text:'解决方案',
          to:{name:"solution"},
          active:false
        },
        {
          text:'信息安全等级保护建设解决方案',
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
    padding:1rem 15% 4rem;
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
  /* 网页顶部样式修改 */
  .container>header{
    padding:3rem 0 2rem;
    width:100%;
    text-align: center;
    font-size: 24px;
  } 
  .container>section{
    text-indent: 2em;
    font-size: 14px;
  }
  /* 对有小圆点列表的内容进行样式填充 */
  .container>article{
    width:100%;
    border-bottom:2px solid #265089;
    padding-top:3rem;
    font-size:18px;
    box-sizing: border-box;
  }
  .container>aside{
    padding-top:2rem;
  }
  .container>aside>div>span:first-child{
    display: inline-block;
    width: 6px;
    height:6px;
    background: #265089;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .container>aside>div>span:last-child{
    font-size: .75rem;
  }
</style>