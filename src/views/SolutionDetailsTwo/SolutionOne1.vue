<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>网络安全解决方案</header>
    <section>随着信息化技术的飞速发展，用户经营管理对计算机应用系统的依赖性增强，计算机应用系统对网络的依赖性增强。计算机网络规模不断扩大，网络结构日益复杂。计算机网络和计算机应用系统的正常运行对网络安全提出了更高的要求。</section>
    <section>信息安全防范应做整体的考虑，全面覆盖信息系统的各层次，针对网络、系统、应用、数据做全面的防范。信息安全防范体系模型显示安全防范是一个动态的过程，事前、事中和事后的技术手段应当完备，安全管理应贯穿安全防范活动的始终。</section>
    <article>网络安全管理的需求</article>
    <aside>
      <div>
        <span></span>
        <span>访问控制，完善的权限管理:可以对不同的管理人员分配不同的操作权限，可以对不同的管理人员分配不同的网络，做到粗、细粒度的权限控制，避免越权管理。</span>
      </div>
      <div>
        <span></span>
        <span>提供安全管控功能:网管提供安全控制功能，支持通过网管简单操作，完成对设备的用户、各种服务、VLAN、QOS、端口限速、静态路由等进行配置的功能。</span>
      </div>
      <div>
        <span></span>
        <span>网络接入设备控制:当网络中非法设备接入时产生告警通知网管人员。</span>
      </div>
      <div>
        <span></span>
        <span>故障发现与故障通知:设备故障出现时可以立刻通知到管理员，快速定位到故障环节，以便于快速恢复系统。</span>
      </div>
      <div>
        <span></span>
        <span>设备性能监视:实时获取网络设备性能数据，对于设备的端口流量、数据库读写速率、CPU负载等性能全面掌控，提前避免由于设备性能带来的网络运行不安全事件发生</span>
      </div>
      
    </aside>
    <article>该平台网络安全管理解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>安全控制:该平台通过对不同设备的配置命令进行分析，使用多线程技术、远程连接技术实现特定配置命令的下发，来实现对设备的用户、各种服务、VLAN、QOS、端口限速、静态路由等功能的配置，控制网络访问，保证减少网络受到的入侵攻击，实现网络安全。</span>
      </div>
      <div>
        <span></span>
        <span>端口控制:该平台通过SNMP协议操作设备和对设备下发配置命令，来实现对端口状态、dot1x、STP、端口应用VLAN、QOS策略等功能的配置，从端口层面来实现网络安全。</span>
      </div>
      <div>
        <span></span>
        <span>策略比对:该平台提供设备配置策略的比对功能，可以智能化地对策略信息进行分析，将不同策略的异同差异化地展示给用户，以便用户确认策略配置。</span>
      </div>
      <div>
        <span></span>
        <span>故障发现与故障通知:该平台通过多线程主动轮询以及接收设备trap/syslog等上报信息来发现网络中存在的故障，并通过拓扑图实现设备的快速定位，使用软件界面、邮件通知、短信通知多种方式来通知网络管理人员，保证了网管人员及时掌控网络运行的异常信息。</span>
      </div>
      <div>
        <span></span>
        <span>设备性能监视:该平台通过多线程主动轮询机制获取路由器、交换机、数据库、中间件等设备的性能信息，并将性能信息以统计图与列表的方式展现给用户，让用户直观地掌控网络设备运行情况。</span>
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
          text:'网络安全解决方案',
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