<template>
  <b-container class="p-0">
    <header>扩展组件</header>
    <section>该平台提供多种可复用的平台扩展组件，简化网管基础技术研究，提高平台开发扩展效率。</section>
    <footer>
      <article class="d-flex flex-row flex-nowrap justify-content-between">
        <div>
          <img src="../../assets/technology/icon_001.png" alt="西安星云宇博数据科技有限公司">
          <aside>监控组件</aside>
        </div>
        <div>
          <img src="../../assets/technology/icon_002.png" alt="西安星云宇博数据科技有限公司">
          <aside>数据库组件</aside>
        </div>
        <div>
          <img src="../../assets/technology/icon_003.png" alt="西安星云宇博数据科技有限公司">
          <aside>界面开发组件</aside>
        </div>
        <div>
          <img src="../../assets/technology/icon_004.png" alt="西安星云宇博数据科技有限公司">
          <aside>监控调度组件</aside>
        </div>
      </article>
      <nav class="d-flex flex-row flex-nowrap justify-content-between">
        <div>
          <img src="../../assets/technology/icon_005.png" alt="西安星云宇博数据科技有限公司">
          <aside>iTopoview拓扑组件</aside>
        </div>
        <div>
          <img src="../../assets/technology/icon_006.png" alt="西安星云宇博数据科技有限公司">
          <aside>消息分发组件</aside>
        </div>
        <div>
          <img src="../../assets/technology/icon_007.png" alt="西安星云宇博数据科技有限公司">
          <aside>分布式组件</aside>
        </div>
        <div>
          <img src="../../assets/technology/icon_008.png" alt="西安星云宇博数据科技有限公司">
          <aside>ObjectSNMP</aside>
        </div>
      </nav>
    </footer>
  </b-container>
</template>

<script>
export default {
  name:'DetailsTwo',

}
</script>

<style scoped>
  .container{
    background-image: url("../../assets/technology/bg_kz.png");
    background-size: 100%;
    background-repeat: no-repeat;
    color: #FFFFFF;
    padding: 0;
  }
  .container>header{
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding:3rem 0 1rem;

  }
  .container>section{
    width: 100;
    text-align: center;
  }
  .container>footer{
    padding: 5rem 15% 2rem;
  }
  .container>footer>article{
    padding-bottom: 5rem;
  }
  .container>footer>article>div{
    width: 13%;
  }
  .container>footer>article>div>img{
    width: 100%;
  }
  .container>footer>article>div>aside{
    padding-top: .75rem;
    width: 100%;
    text-align: center;
    font-size: .8rem;
  }
  .container>footer>nav>div{
    width: 10%;
  }
  .container>footer>nav>div>img{
    width: 100%;
  }
  .container>footer>nav>div>aside{
    padding-top: .75rem;
    width: 100%;
    text-align: center;
    font-size: .8rem;
  }
</style>