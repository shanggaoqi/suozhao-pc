<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>电力行业综合网管解决方案</header>
    <section>电力行业是国家的重点单位，关系到国计民生。随着电力行业的不断发展，电力的关键业务不断增长，因此信息化应用也不断增强，网络系统中的应用越来越多，网络管理的难度也越来越大。同时，随着互联网技术的发展，建立在互联网上的跨地区、全行业系统内部信息网开始逐步建立，网上应用着各种电力业务。</section>
    <section>与此同时，电力信息网络系统的网络安全问题愈来愈显得重要。那么，如何保障电力单位的网络系统畅通无阻，及时发现网络故障，避免网络安全事故发生成了电力企业IT人员的一个挑战。</section>
    <article>电力行业网管需求</article>
    <aside>
      <div>
        <span></span>
        <span>减轻网络管理部门的工作压力，为电网的安全生产和企业信息化提供保障。</span>
      </div>
      <div>
        <span></span>
        <span>具备7*24小时监控的能力，能采集并分析整个网络的所有数据</span>
      </div>
      <div>
        <span></span>
        <span>可对整个网络以及网络中所有节点进行流量统计的功能</span>
      </div>
      <div>
        <span></span>
        <span>可分析网络中具体应用的功能</span>
      </div>
      <div>
        <span></span>
        <span>精确监测电力网络中的关键应用</span>
      </div>
      <div>
        <span></span>
        <span>具备自动、快速准确排查故障的能力，网络一旦发生故障，可以第一时间准确定位故障点，将故障损失降到最低</span>
      </div>
      <div>
        <span></span>
        <span>可提供丰富的图表和报表报告</span>
      </div>
    </aside>
    <article>电力行业综合网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>全面的网络监视，全面监控整个网络、一个部门、一个网段、关键设备、网络服务器以及终端PC的情况，从而对网络进行全方面多角度监控，保障电力网的正常运营，并为网络评估、网络整改、网络扩充提供原始数据依据。</span>
      </div>
      <div>
        <span></span>
        <span>网络出口带宽分析，对整个网络的出口带宽进行分析，从而确定当出口带宽的负载情况。</span>
      </div>
      <div>
        <span></span>
        <span>网络资源能够自动发现并进行图形化展示。 对设备故障自动报警、自动通知、自动响应。 具有全面的安全管理功能。</span>
      </div>
      <div>
        <span></span>
        <span>支持7×24小时连续运行，具备对网络通讯的长期捕获和海量存储能力。借助该功能，网络管理人员可以对整个网络进行长期监控，保障网络的持续可靠运行。</span>
      </div>
      <div>
        <span></span>
        <span>实时诊断出网络中的故障，并自动告诉用户当前网络故障原因和推荐的解决方法。实现对网络故障进行快速分析和准确定位，从而简化了网络故障的排查过程。</span>
      </div>
      <div>
        <span></span>
        <span>支持网络故障回放的能力。通过对网络故障数据进行回放，可重现网络通讯的原始信息，并对网络故障的整个工程进行全方位跟踪，从而增加对故障的认知，减轻故障的排查难度，并提高故障排查效率。</span>
      </div>
      <div>
        <span></span>
        <span>生成全局的统计报表，也可以为每个主机或每个节点单独生成报表，网络管理人员通过报表的数据，可以从宏观上了解整个网络、某个网段、某个部门或某个主机的整体工作情况。</span>
      </div>
    </aside>
  </b-container>
</template>

<script>
export default {
  name:'DetailsOne',
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
          text:'电力行业综合网管解决方案',
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