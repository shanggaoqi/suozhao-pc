<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>交通行业综合网管解决方案</header>
    <section>该网管平台立足于平台的安全性、可扩展性、管理性、可靠性和易用性，针对交通行业网络特点定制的专属网络管理解决方案。</section>
    
    <article>交通行业网管需求</article>
    <aside>
      <div>
        <span></span>
        <span>自动搜索发现核心层、汇聚层、接入层等网络中交换机设备、服务器等设备</span>
      </div>
      <div>
        <span></span>
        <span>自动生成拓扑，形成工业冗余环网并标识阻塞链路和阻塞点</span>
      </div>
      <div>
        <span></span>
        <span>基于面板图的方式管理交换机设备，重点监控工业交换机的光口</span>
      </div>
      <div>
        <span></span>
        <span>对交换机设备的端口状态、链路状态监控。流量等性能数据采集</span>
      </div>
      <div>
        <span></span>
        <span>对服务器设备的系统资源如CPU、内存、磁盘使用率的监控</span>
      </div>
      <div>
        <span></span>
        <span>必须能够第一时间发现故障，通过多种方式通知管理员</span>
      </div>
      <div>
        <span></span>
        <span>尽可能长时间的保留网管数据，提供统计报表</span>
      </div>
    </aside>
    <article>该网管平台交通行业综合网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>安全性：通过支持对用户网络、用户权限进行设置，对MAC-IP和黑白名单的控制，通过多层次多角度提升网络安全性，保障用户网络安全。</span>
      </div>
      <div>
        <span></span>
        <span>管理性：该网管平台平台统一管理全网网络设备，无品牌和类型的限制，支持同时对多台设备进行配置/备份和设备软件管理以及设备参数管理，以减少管理员的工作量，提高系统的可用性。</span>
      </div>
      <div>
        <span></span>
        <span>可靠性：电信级软件架构的微内核精简技术，100% Java多层分布式技术，提供了电信级可靠性保障。支持容灾方案以及双机热备方案，网管平台安全可靠。</span>
      </div>
      <div>
        <span></span>
        <span>易用性：键式智能化网管，一键搜索、发现、识别网络设备、资源、链路，自动生成拓扑图，全面完整呈现网络的拓扑结构，智能化故障管理，最大限度提高产品的易用性。</span>
      </div>
      <div>
        <span></span>
        <span>可扩展性：的设备类型、未知设备种类，用户无需开发编程，系统提供的策略扩展GUI界面，就可完成对新设备的支持。同时，提供众多可复用可扩展的框架模块以及深入代码级的开发模式，能够在原有通用功能的基础上对平台进行扩展开发。</span>
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
          text:'交通行业综合网管解决方案',
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