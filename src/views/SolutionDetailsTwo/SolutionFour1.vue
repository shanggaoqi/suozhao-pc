<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>网络运维解决方案</header>
    <section>　随着网络应用的普及，各行各业的运行和发展都已离不开网络，网络运维的意义和面临的挑战都越来越大。优质的网管软件可以提升网络运维效率，从而让企业提供更优质的服务、减少运营成本、提升用户体验，所以选取优质高效的网管系统至关重要。</section>
    
    <article>网络运维面临的难题</article>
    <aside>
      <div>
        <span></span>
        <span>网管无法集中监控：网络中设备类型众多，思科、华为、DELL等各厂家的设备都需要使用特定的监控软件，功能操作复杂且监控软件部署分散，无法使用统一的一套网管系统监控全网的所有设备。</span>
      </div>
      <div>
        <span></span>
        <span>网管功能操作复杂：网络中设备数量众多，连接情况复杂，搭建网管系统或增加、删除设备时需要手动修改设备和链路信息，费时费力。</span>
      </div>
      <div>
        <span></span>
        <span>网管对中间件、数据库和虚拟化监控不足：传统的网管软件往往监控的是网络设备，如交换机、路由器等，对中间件、数据库和虚拟化监控能力不足。</span>
      </div>
      <div>
        <span></span>
        <span>网管操作终端单一：网管软件的操作界面往往依赖于客户端，想在其它终端上查看网管信息，需要重新安装客户端。</span>
      </div>
      <div>
        <span></span>
        <span>网管安装部署困难：对于不同的操作系统版本，需要选用特定版本的网管软件，软件安装和设置的操作过程各不相同，部署成本高且无法跨平台移植使用。</span>
      </div>
      <div>
        <span></span>
        <span>网管对国产化平台兼容性差：在“国产化”的浪潮下，越来越多的政府和企事业单位选择了使用国产化的设备和软件，如龙芯、浪潮的服务器，中标麒麟、红旗麒麟的操作系统，金仓、达梦的数据库和东方通的中间件等，而网管软件对国产化平台的兼容性往往不尽人意，尤其是外国的网管软件，无法满足国产化平台的需求。</span>
      </div>
    </aside>
    <article>网络运维网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>管控万物、集中监控</span>
      </div>
      <div>
        <span></span>
        <span>操作简单、智能化管理</span>
      </div>
      <div>
        <span></span>
        <span>实现对中间件、数据库、虚拟化的监控</span>
      </div>
      <div>
        <span></span>
        <span>多种方式通知告警</span>
      </div>
      <div>
        <span></span>
        <span>多种方式操作网管</span>
      </div>
      <div>
        <span></span>
        <span>安装简单、跨平台运行</span>
      </div>
      <div>
        <span></span>
        <span>实现成本控制</span>
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
          text:'网络运维解决方案',
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