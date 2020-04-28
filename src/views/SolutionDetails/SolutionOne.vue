<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>政府单位综合网关解决方案</header>
    <section>随着信息化建设的日益推进，各地政府的网络基础架构已经基本成熟，相应的网络设备、防火墙等都已配置得相对完善，在加紧网络安全策略的同时，各地方政府的下一步的信息化重点之一将是加强对网络的管理。因为，政府的信息化需要对网络资源进行有效使用，就是基于网络基础架构的各种应用的持续、稳定运行，而这些也都必须有自动化、智能化的网络管理软件作为保障。</section>
    <section>凡是网络存在的地方、有服务器或应用的地方都需要网络管理，都是网管软件的用武之地。从实际运用来看，网管软件在政府中主要应用于网络设备、服务器、中间件、数据库、电子邮件、WEB系统等方面。</section>
    <article>政府部门网管要求</article>
    <aside>
      <div>
        <span></span>
        <span>全面实现国产化，完全支持基于国产龙芯等处理器，曙光、龙芯、银河服务器；支持中标麒麟、红旗Linux操作系统；支持达梦、金仓数据库。</span>
      </div>
      <div>
        <span></span>
        <span>分布式部署，以一级网络辐射下级网络，在上级管理机上可以查看、监管下级管理机的管理视图，并通过下级管理机实时地了解下级网络的运行状况。</span>
      </div>
      <div>
        <span></span>
        <span>网络资源能够自动发现并进行图形化展示。 对设备故障自动报警、自动通知、自动响应。 具有全面的安全管理功能。</span>
      </div>
      <div>
        <span></span>
        <span>监控网络设备端口使用率，CPU使用率，内存的利用率，并可以为设备监控参数设定阈值。</span>
      </div>
      <div>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议。</span>
      </div>
      <div>
        <span></span>
        <span>对网络管理信息进行历史积累，可生成统计报表进行分析。</span>
      </div>
    </aside>
    <article>政府部门综合网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>全面实现国产化，完全支持基于国产龙芯等处理器，曙光、龙芯、银河服务器；支持中标麒麟、红旗Linux操作系统；支持达梦、金仓数据库。</span>
      </div>
      <div>
        <span></span>
        <span>分布式部署，以一级网络辐射下级网络，在上级管理机上可以查看、监管下级管理机的管理视图，并通过下级管理机实时地了解下级网络的运行状况。</span>
      </div>
      <div>
        <span></span>
        <span>网络资源能够自动发现并进行图形化展示。 对设备故障自动报警、自动通知、自动响应。 具有全面的安全管理功能。</span>
      </div>
      <div>
        <span></span>
        <span>监控网络设备端口使用率，CPU使用率，内存的利用率，并可以为设备监控参数设定阈值。</span>
      </div>
      <div>
        <span></span>
        <span>具有可扩展性，支持网络管理标准，提供开发式API接口，能够支持多种网络管理协议。</span>
      </div>
      <div>
        <span></span>
        <span>对网络管理信息进行历史积累，可生成统计报表进行分析。</span>
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