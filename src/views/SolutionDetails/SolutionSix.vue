<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>制造业综合网管解决方案</header>
    <section>制造业网络规模不是很大，但是设备由于企业发展规模的改变，采购时间不一，设备多种多样。管理复杂，网络上运行的系统一般为OA、MIS等，主要需求是对网络的基本特点进行管理，但是由于IT部门不是企业的利润部门，大部分企业对其投入都不大，这就要求管理产品简单、直观、易用。</section>
    <section>制造业网管解决方案具有整体性，既考虑了园区网建设，又注重了广域网互连及多种接入手段。在设计网络管理方案时，综合考虑了网络安全、网络管理和网络优化等方面的问题。符合制造业对网络管理的要求，提供简单、智能的管理。是真正能用的起来，能为客户解决问题的系统。</section>
    <article>制造业网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>支持可视化管理，以拓扑图的形式展示网络</span>
      </div>
      <div>
        <span></span>
        <span>实现数据管理功能，支持支持多维度数据的统计分析</span>
      </div>
      <div>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议</span>
      </div>
      <div>
        <span></span>
        <span>实现主动及时的故障管理，并支持对历史故障数据的回放和统计分析</span>
      </div>
      <div>
        <span></span>
        <span>支持7×24小时连续运行，保持快速的实时响应能力，以保证整个业务系统的通常运行</span>
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
          text:'政府单位综合网关解决方案',
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