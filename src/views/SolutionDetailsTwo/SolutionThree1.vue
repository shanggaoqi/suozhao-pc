<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>设备管控解决方案</header>
    <section>设备管理对当今的网络设备来说是一个至关重要的因素，从交换机消费互连类电子产品到工业控制自动信息处理设备等对设备管理有需求的设备范围是变化多端的，不同的市场需求就有不同的管理要求，因而就要求一种能够实现任意网络设备集成在一起进行远程管理的能力。在现代企业中，设备管理已经成为关系到企业经济效益，关系到企业生存与发展的重要环节。</section>
    <section>各种大型、高效、低耗的现代化设备要求有与之相适应的先进管理手段，传统、静态的设备管理方式已不能适应现代化设备管理的要求，只有现代化设备与现代化管理方式结合起来，相辅相成，协调发展，互相促进，才能充分发挥现代化设备的作用，不断提高生产效率，增加企业效益。</section>
    <article>实现设备管控对网管软件的需求</article>
    <aside>
      <div>
        <span></span>
        <span>设备类型全面管控：网络中的设备是组成网络的基础，这些设备种类繁多，设备数量巨大，而且各种设备的管理协议不同，因此对设备管控首先需要的就是能够全面的管控，不论是传统的网络设备，还是新兴的各类设备等。</span>
      </div>
      <div>
        <span></span>
        <span>设备信息全面管控：设备管控重点在于设备的链路关系、生成拓扑、设备告警、设备性能，此外还可能包括设备运行时间、设备资产信息等辅助信息。</span>
      </div>
      <div>
        <span></span>
        <span>自定义监控信息：除了常用的CPU使用率、网口流量等信息，还可以提供扩展功能，根据需求灵活定义需要监控的信息。</span>
      </div>
      <div>
        <span></span>
        <span>设备安全管控：网管能对设备进行配置，提供如配置端口参数、配置安全策略等功能。</span>
      </div>
      <div>
        <span></span>
        <span>全网安全管控：网管能提供网络安全功能。</span>
      </div>
      <div>
        <span></span>
        <span>统计有用信息：网管能统计设备的告警等有用信息，自动分析，生成图文形式的报表，深入发掘背后的更多信息。</span>
      </div>
    </aside>
    <article>设备管控定制网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>全面管控各种设备类型:平台通过SNMP、SSH、Telnet、JMX、JDBC等多种协议对不同设备进行监控，支持对路由器、工业交换机、服务器、无线AP、中间件、数据库、虚拟化等多种设备的监控。同时提供设备类型扩展功能，通过配置还可继续增加可管控的设备类型。</span>
      </div>
      <div>
        <span></span>
        <span>全面管控设备信息:平台通过CDP、LLDP、OSPF、交换机STP生成树、交换机端口转发、ARP等多种协议发现和管理设备链路信息，自动生成拓扑，提供完善的设备告警功能，全面管控设备异常状态，提供详细的设备性能管理功能，全面管控设备运行状态，同时提供资产管理、操作日志管理、策略管理、SNMP辅助信息查询等其它功能，方便用户多方位地全面管理设备信息。</span>
      </div>
      <div>
        <span></span>
        <span>自定义监控:平台支持通过配置增加支持的监控指标，除常用的CPU使用率、内存使用率、网口流量等监控外，可根据用户需求，增加特殊的监控指标，如无线3G/4G上下行速率、数据库读写速率、WEB服务请求数量等。</span>
      </div>
      <div>
        <span></span>
        <span>设备安全管控:平台通过对SNMP协议和特定设备命令的分析，提供定制化的设备配置功能、参数控制功能，通过界面完成对设备的配置，如开启/关闭端口、配置端口限速、配置VLAN、配置QOS、配置流、配置流行为、配置路由等。</span>
      </div>
      <div>
        <span></span>
        <span>全网安全管控:平台通过自动探索全网MAC-IP信息，设置黑白名单、设置MAC-IP绑定、统计IP使用情况等方式来保证网络安全。</span>
      </div>
      <div>
        <span></span>
        <span>统计有用信息:平台通过对设备、资源、链路、告警、性能等不同信息的统计和分析，智能生成报表，供管理员发掘更深层次的有用信息。</span>
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
          text:'设备管控解决方案',
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