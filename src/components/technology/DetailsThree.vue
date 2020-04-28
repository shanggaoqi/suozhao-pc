<template>
  <div class="container">
    <header>开发模式</header>
    <section>提供6大开发模式，在通用网管功能的基础上，开发人员可以选择进行模块式或者代码式的开发形式，以便在最短的时间内满足用户各种定制需求。</section>
    <nav class="d-flex flex-row flex-wrap">
      <aside>
        <img src="../../assets/technology/jckfms.png" alt="西安索兆信息科技有限公司">
        <article>集成开发模式</article>
      </aside>
      <aside>
        <img src="../../assets/technology/APIkf.png" alt="西安索兆信息科技有限公司">
        <article> API模式开发</article>
      </aside>
      <aside>
        <img src="../../assets/technology/dmkf.png" alt="西安索兆信息科技有限公司">
        <article>代码开放开发模式</article>
      </aside>
      <aside>
        <img src="../../assets/technology/fwqcj.png" alt="西安索兆信息科技有限公司">
        <article>服务端插件开发模式</article>
      </aside>
      <aside>
        <img src="../../assets/technology/sjkkf.png" alt="西安索兆信息科技有限公司">
        <article>数据库开发模式</article>
      </aside>
      <aside>
        <img src="../../assets/technology/khdkf.png" alt="西安索兆信息科技有限公司">
        <article>客户端开发模式</article>
      </aside>
    </nav>
    <header>代码级开放开发服务</header>
    <section>该平台提供代码级开放模式，深入客户端源代码，提供完善的开发文档、实施培训以及技术支持服务，让用户从开发起始到平台使用全无后顾之忧。</section>
    <aside class="d-flex flex-row flex-nowrap justify-content-between">
      <section>
        <img width="100%" src="../../assets/technology/kfydm.png" alt="西安星云宇博数据科技有限公司">
        <div>开放源代码</div>
      </section>
      <section>
        <img width="100%" src="../../assets/technology/kfwd.png" alt="西安星云宇博数据科技有限公司">
        <div>开发文档</div>
      </section>
      <section>
        <img width="100%" src="../../assets/technology/kfpx.png" alt="西安星云宇博数据科技有限公司">
        <div>开发培训</div>
      </section>
      <section>
        <img width="100%" src="../../assets/technology/jszc.png" alt="西安星云宇博数据科技有限公司">
        <div>技术支持服务</div>
      </section>
    </aside>
    <header>开发特性</header>
    <footer class="d-flex flex-row flex-wrap">
      <div>
        <img width="100%" src="../../assets/technology/pc_kskf.png" alt="西安星云宇博数据科技有限公司">
      </div>
      <div>
          充分利用已有的软件功能，并提供可复用可扩展的框架模块，让用户把重点放在具体业务需求上，最短几个人，周就能开发出一款特色的网管软件。
      </div>
      <div>
        <img width="100%" src="../../assets/technology/pc_qmkf.png" alt="西安星云宇博数据科技有限公司">
      </div>
      <div>
        提供全面的开发模式，从平台的界面到功能、管控设备均可根据用户需求自定义开发，从而完全开发出一款专属于用户自己的网管软件。
      </div>
      <div>
        客户端完全开发代码，用户可根据滋生需要更改服务端插件开发，用户可以自定义修改数据库在不改变现有表的基础上进行修改。
      </div>
      <div>
        <img width="100%" src="../../assets/technology/pc_srkf.png" alt="西安星云宇博数据科技有限公司">
      </div>
      <div>
       完全满足用户个性化需求的开发模式，通过一周的培训即可上手，并在培训中解决80%的开发问题，让开发过程愉悦简单。
      </div>
      <div>
        <img width="100%" src="../../assets/technology/pc_yykaif.png" alt="西安星云宇博数据科技有限公司">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name:'DetailsThree'
}
</script>

<style scoped>
  .container{
    padding: 4rem 15%;
    color: #333333;
  }
  .container>header{
    width: 100%;
    text-align: center;
    font-size:24px;
  }
  .container>section{
    width: 100%;
    text-align: center;
    font-size:.75rem;
    padding:1rem 0 3rem;
  }
  .container>nav{
    padding-bottom: 4rem;
  }
  .container>nav>aside{
    box-sizing: border-box;
    border: 1px solid #CACACA;
    background: #F0F3F6;
    width: 33%;
  }
  .container>nav>aside>img{
    padding-bottom:1rem ;
  }
  .container>nav>aside:first-child{
    padding:4rem 10% 1rem;
    border-right:0px;
    border-bottom:0px;
  }
  .container>nav>aside:first-child>img{
    width:83px;
  }
  .container>nav>aside:nth-child(2){
    border-right:0px;
    border-bottom:0px;
    padding: 6.3rem 10% 1rem; 
  }
  .container>nav>aside:nth-child(2)>img{
    width: 126px;
  }
  .container>nav>aside:nth-child(3){
    border-bottom: 0px;
    padding:4rem 7.5% 1rem;
  }
  .container>nav>aside:nth-child(3)>img{
    width: 176px;
  }
  .container>nav>aside:nth-child(4){
    border-right: 0px;
    padding:3rem 3rem 1rem;
    text-align: center;
  }
  .container>nav>aside:nth-child(4)>img{
    width: 71px;
  }
  .container>nav>aside:nth-child(5){
    border-right: 0px;
    padding:4.3rem 10% 1rem;
  }
  .container>nav>aside:nth-child(5)>img{
    width: 97px;
  }
  .container>nav>aside:last-child{
    padding:3rem 10% 1rem;
    text-align: center;
  }
  .container>nav>aside:last-child>img{
    width: 71px;
  }
  .container>aside{
    padding:3rem 0 7rem;
  }
  .container>aside>section>div{
    text-align: center;
  }
  .container>footer{
    padding: 4rem 0;
  }
  .container>footer>div{
    width: 25%;
  }
  .container>footer>div:nth-child(2){
    background: #E1EDFF;
    color: #3F4146;
    padding:3rem 1rem ;
    font-size: .75rem;
  }
  .container>footer>div:nth-child(4){
    background: #E1EDFF;
    color: #3F4146;
    padding:3rem 1rem ;
    font-size: .75rem;
  }
  .container>footer>div:nth-child(5){
    background: #265089;
    color: #FFFFFF;
    padding:3rem 1rem ;
    font-size: .75rem;
  }
  .container>footer>div:nth-child(7){
    background: #E1EDFF;
    color: #3F4146;
    padding:3rem 1rem ;
    font-size: .75rem;
  }
</style>