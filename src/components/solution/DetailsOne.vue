<template>
  <b-container>
    <header>行业解决方案</header>
    <aside  class=" d-flex flex-row flex-wrap justify-content-between">
      <section class="mb-3" @click="jump1()">
        <header>政府单位</header>
        <div></div>
        <article class="put">面向政府整个网络架构，实现设备拓扑、故障管理、性能管理、配置管理以及安全管理，支持跨平台部署以及国产化，并可根据用户需求进行二次开发扩展集成。</article>
      </section>
      <section class="mb-3" @click="jump2()">
        <header>金融行业</header>
        <div></div>
        <article>实现对多级网络结构，不同网络域的集中管理，具有高实时性、不间断性、高安全性这样的特点，同时具有极大的可开发、可拓展性，支持金融行业针对自身的特点进行二次开发，以满足其行业特性需求。</article>
      </section>
      <section class="mb-3" @click="jump3()">
        <header>交通行业</header>
        <div></div>
        <article>平台针对交通行业客户对于资产信息、网络攻击、预警研判、网络拓扑等业务，可基于平台现有工具进行拓展集成开发，进行定制化开发，简单而迅速的进行网管平台的部署。</article>
      </section>
       <section @click="jump4()">
        <header>企业IT部门</header>
        <div></div>
        <article>充分考虑到企业IT部门的各种需要，帮助IT部门共同提升业务保障价值。针对不同类型企业，支持平台拓展集成开发，完全满足企业的使用需求。</article>
      </section>
      <section @click="jump5()">
        <header>电力行业</header>
        <div></div>
        <article>平台电力行业综合网管解决方案，保障电力单位的网络系统畅通无阻，及时发现网络故障，避免网络安全事故发生。</article>
      </section>
      <section @click="jump6()">
        <header>制造业</header>
        <div></div>
        <article>平台制造业网管解决方案具有整体性，综合考虑网络安全、网络管理和网络优化等方面问题。符合制造业对网络管理的要求，提供简单、智能的管理。</article>
      </section>  
    </aside>
  </b-container>
</template>

<script>
export default {
  name:'DetailsOne',
  methods:{
    jump1(){
      this.$router.push({path:'/solution/one'})
    },
    jump2(){
      this.$router.push({name:'solution_two'})
    },
    jump3(){
      this.$router.push({name:'solution_three'})
    },
    jump4(){
      this.$router.push({name:'solution_four'})
    },
    jump5(){
      this.$router.push({name:'solution_five'})
    },
    jump6(){
      this.$router.push({name:'solution_six'})
    },
    // putin(){
    //   $(".put").addClass('send')
    // }
  }
}
</script>

<style scoped>
  .container{
    padding:3rem 15%;
    background-color: #E7EAF2;
  }
  .container>header{
    font-size: 24px;
    color: #333333;
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    font-weight: bold;
  }
  .container>aside>section{
    background: rgba(199,206,217,1);
    /* font-weight: bold; */
    padding:0 1rem;
    width:33%;
    height: 250px;
    cursor: pointer;
  }
 
  .container>aside>section>header{
    width:100%;
    text-align: center;
    padding:1rem 0;
    font-weight: bold;
    color:rgba(34,34,34,1);
  }
  .container>aside>section>div{
    border-bottom: 2px solid #00BAFF;
  }
  .container>aside>section>article{
    padding-top: 1rem;
    color:rgba(102,102,102,1);
    font-size: 14px;
    line-height:20px;
  }
  .container>aside>section:hover{
    background: rgba(47,58,74,1);
  }
  .container>aside>section:hover header{
    color: #ffffff;
  }
  
  .container>aside>section:hover article{
    color:  #ffffff;
  }
  
</style>