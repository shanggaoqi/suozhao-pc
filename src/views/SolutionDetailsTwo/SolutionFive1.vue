<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>自动化拓扑解决方案</header>
    <section>进入21世纪以来，政府、企业等各机构的正常办公、生产工作已离不开网络环境，但实际生产环境中网络情况往往非常复杂，设备数量众多且种类繁杂，而不同厂商的设备又不能在一套网管系统里进行管理，设备间复杂的链路关系也需要手动设置，为网管人员的工作增加了难度，因此提出了自动化拓扑的需求。</section>
    
    <article>关于自动化拓扑的需求</article>
    <aside>
      <div>
        <span></span>
        <span>对于不同种类和不同厂商的设备，网管能通过多种协议，将其集中显示，并自动生成拓扑。</span>
      </div>
      <div>
        <span></span>
        <span>拓扑需显示的设备数量庞大时，网管能自动、高效地显示拓扑。</span>
      </div>
      <div>
        <span></span>
        <span>对于中间件/数据库等软件服务，网管的拓扑能自动化地显示和网络设备的连接关系。</span>
      </div>
      <div>
        <span></span>
        <span>拓扑能显示设备告警，链路状态等重要信息。</span>
      </div>
      <div>
        <span></span>
        <span>拓扑能智能识别链路，区分工业环网中的主用、备用链路和链路状态。</span>
      </div>
      <div>
        <span></span>
        <span>拓扑能智能发现网络设备的下挂设备。</span>
      </div>
      <div>
        <span></span>
        <span>对于特殊的拓扑操作功能，网管可以通过特殊的定制开发进行实现，且能与常见功能很好地结合。</span>
      </div>
    </aside>
    <article>自动化拓扑解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>多种协议类型统一管理</span>
      </div>
      <div>
        <span></span>
        <span>拓扑显示告警、链路信息</span>
      </div>
      <div>
        <span></span>
        <span>智能链路识别</span>
      </div>
      <div>
        <span></span>
        <span>下挂设备管理</span>
      </div>
      <div>
        <span></span>
        <span>定制开发</span>
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