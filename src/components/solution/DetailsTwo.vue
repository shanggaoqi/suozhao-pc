<template>
  <b-container>
    <header>应用解决方案</header>
    <aside  class=" d-flex flex-row flex-wrap justify-content-between">
      <section class="mb-3" @click="link1()">
        <header>网络安全</header>
        <div></div>
        <article>基于平台面向涉密、网络安全、准入控制领域，开发的网络管理和安全策略管理系统。支持与交换机、路由器、防火墙、安全网关的各种安全策略联动，从而实现网管+安全策略的一体化管理系统。</article>
      </section>
      <section class="mb-3" @click="link2()">
        <header>国产化应用</header>
        <div></div>
        <article>针对国产化软硬件实现完整的网络拓扑图管理、故障管理、设备面板监控、性能监控、安全管理、业务配置等功能，满足用户国产化需求，并可根据用户需要进行二次开发。</article>
      </section>
      <section class="mb-3" @click="link3()">
        <header>设备管控</header>
        <div></div>
        <article>基于平台，面向计算机、网络设备、安全设备、云设备、物联设备以及智能终端等设备，从各个方面对用户的各类设备进行监测和管理，内容包括设备的可用性、设备性能、流量管理和业务分析等。</article>
      </section>
       <section class="mb-3" @click="link4()">
        <header>网络运维</header>
        <div></div>
        <article>平台支持实时显示网络上目前发生的各种流量与运作情形，实现对网络监测和分析以及网络故障及时发现和故障恢复，同时具有可扩展性，能够随网络发展而灵活扩充。</article>
      </section>
      <section class="mb-3" @click="link5()">
        <header>自动化拓扑</header>
        <div></div>
        <article>基于平台，面向物理交换机、智能交叉连接、网络链路自动控制与调度领域，借助智和网管平台，管理员可以通过任务、计划、手工、定时等多种途径，远程控制和改变真实网络设备之间的物理链接。</article>
      </section>
      <section class="mb-3" @click="link6()">
        <header>业务控制</header>
        <div></div>
        <article>能够有效展示业务系统、网络和安全环境，实现了自动高效的业务管理，由于减少了人的操作可能带来的损失。并可根据业务需求进行平台的开发拓展和集成。</article>
      </section>
      <section @click="link7()">
        <header>等保建设</header>
        <div></div>
        <article>等级保护建设解决方案助力用户《信息安全技术网络安全等级保护基本要求》建设。我们以等级保护相关标准为依据，依托丰富的网络安全行业经验，提升用户网络关键基础设施综合管理能力，助力用户通过等保测评</article>
      </section>
      
    </aside>
  </b-container>
</template>

<script>
export default {
  name:'DetailsTwo',
  methods:{
    link1(){
      this.$router.push({path:'/solution/one1'})
    },
    link2(){
      this.$router.push({path:'/solution/two1'})
    },
    link3(){
      this.$router.push({path:'/solution/three1'})
    },
    link4(){
      this.$router.push({path:'/solution/four1'})
    },
    link5(){
      this.$router.push({path:'/solution/five1'})
    },
    link6(){
      this.$router.push({path:'/solution/six1'})
    },
    link7(){
      this.$router.push({path:'/solution/seven1'})
    }
  }
}
</script>

<style scoped>
  .container{
    padding:3rem 15%;
    background: rgba(42,62,89,1);
  }
  .container>header{
    font-size: 24px;
    color:rgba(255,255,255,1);
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    font-weight: bold;
  }
  .container>aside>section{
    background:rgba(255,255,255,10%);
    padding:0 1rem;
    width:33%;
    height: 250px;
    cursor: pointer;
  }
  .container>aside>section>header{
    width:100%;
    text-align: center;
    padding:1rem 0;
    color:rgba(255,255,255,1);
  }
  .container>aside>section>div{
    border-bottom: 2px solid #00BAFF;
  }
  .container>aside>section>article{
    padding-top: 1rem;
    color:rgba(255,255,255,1);
    font-size: 14px;
    line-height:20px;
  }
  .container>aside>section:hover{
    background:rgba(255,255,255,1);
  }
  .container>aside>section:hover header{
     color:rgba(34,34,34,1);
   }
   .container>aside>section:hover article{
     color:rgba(102,102,102,1);
   }
</style>