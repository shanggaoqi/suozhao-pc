<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>金融行业综合网管解决方案</header>
    <section>网络已成为新经济时代的基础设施,它的质量直接决定了社会及经济生活的质量。同样，伴随着市场经济的发展，金融行业也逐步走向网络化，金融行业的网络管理和维护已经成为金融管理的一个重要环节，金融行业网络运行管理和维护的质量直接影响了金融行业的运行质量，而故障处理的响应速度直接影响到了用户对运行商的信赖程度及评价。</section>
    <article>金融行业网管需求</article>
    <aside>
      <div>
        <span></span>
        <span>支持可视化管理，以拓扑图的形式展示网络</span>
      </div>
      <div>
        <span></span>
        <span>分布式管理，网管可以在能上网的任何地方（本地和远程管理），统一管理整个集团的网络。</span>
      </div>
      <div>
        <span></span>
        <span>具有全面的网络管理功能，支持权限分配</span>
      </div>
      <div>
        <span></span>
        <span>具有数据管理功能，支持支持多维度数据的统计分析</span>
      </div>
      <div>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议。</span>
      </div>
      <div>
        <span></span>
        <span>支持用户自定义策略，对所收集到的事件进行自动处理，做出各种响应动作。</span>
      </div>
    </aside>
    <article>金融行业综合网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>自动发现网络设备，迅速搜索整个网络内的所有节点，支持多厂商的设备组成的“混合”网络</span>
      </div>
      <div>
        <span></span>
        <span>智能分析网络拓扑结构，自动勾画出整个网络的的真实物理拓扑图，真实反映整个网络的运行状态。</span>
      </div>
      <div>
        <span></span>
        <span>支持7×24小时连续运行，保持快速的实时响应能力，以保证整个业务系统的通常运行。</span>
      </div>
      <div>
        <span></span>
        <span>支持多种告警机制，自定义配置告警阈值，支持快速标示已经执行操作的告警，迅速定位告警设备。</span>
      </div>
      <div>
        <span></span>
        <span>从用户网络、用户权限进行设置、对黑白名单的控制和MAC-IP的角度对全网设备进行安全监控。</span>
      </div>
      <div>
        <span></span>
        <span>实现对网络设备、数据流量、服务器、网络应用的全面监控，确保整个IT系统从网络到应用的正常运行。</span>
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
          text:'金融行业综合网管解决方案',
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