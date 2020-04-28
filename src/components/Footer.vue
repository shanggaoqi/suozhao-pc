<template>
  <b-container>
    <section class="d-flex flex-row flex-nowrap justify-content-between align-items-center">
      <aside>
        <header>联系电话</header>
        <footer>19991960904</footer>
      </aside>
      <aside>
        <header>公司邮箱</header>
        <footer>suozhao@xiansz.top</footer>
      </aside>
       <aside>
        <header>公司地址</header>
        <footer>陕西省西安市高新区海星城市广场A座1609室</footer>
      </aside>
      <aside style="padding-right:1rem;" class="d-flex flex-row flex-nowrap justify-content-end">
        <img src="../assets/pc_erw.png" alt="西安星云宇博数据科技有限公司">
      </aside>
    </section>
    <footer>星云宇博紧跟大数据、人工智能、物联网、云计算等技术的发展与用户的需求，旨在为用户提供高性价比的产品与服务。我们始终保持学习态度，不忘初心，砥砺前行。</footer>
    <!-- <div class="d-flex justify-content-between flex-row flex-nowrap ">
      <header>
        <img width="293px" height="46px"  src="../assets/logo.png" alt="索兆信息科技有限公司">
        <aside>
          索兆科技紧跟大数据、人工智能、物联网、云计算、区块链等技术的发展与用户的需求，旨在为广大用户提供高性价比的产品与服务。
        </aside>
        <aside>
          在这里我们保持学习态度，不忘初心，砥砺前行。
        </aside>
      </header>
      <div>
        <div class="text-white " style="font-weight:bold;">
          网站导航
        </div>
        <div>
          <router-link :to="{name:'index'}">首页</router-link>
        </div>
        <div>
          <router-link :to="{name:'product'}">产品中心</router-link>
        </div>
        <div>
          <router-link :to="{name:'solution'}">解决方案</router-link>
        </div>
        <div>
          <router-link :to="{name:'technology'}">技术服务</router-link>
        </div>
        <div>
          <router-link :to="{name:'news'}">企业动态</router-link>
        </div>
        <div>
          <router-link :to="{name:''}">案例展示</router-link>
        </div>
        <div>
          <router-link :to="{name:'company'}">关于我们</router-link>
        </div>
      </div>
      <div>
        <div class="text-white " style="font-weight:bold;">
          联系电话
        </div>
        <div>
          <router-link :to="{name:''}">19991960904</router-link>
        </div>
        <div class="text-white " style="font-weight:bold;">
          公司邮箱
        </div>
        <div>
          <router-link :to="{name:''}">suozhao@xiansz.top</router-link>
        </div>
        <div class="text-white " style="font-weight:bold;">
          公司地址
        </div>
        <div>
          <router-link :to="{name:''}">陕西省西安市高新区海星城市广场A座1609室</router-link>
        </div>
      </div>
      <div class="d-flex justify-content-end flex-row flex-nowrap align-items-end">
        <img width="70%" height="30%" src="../assets/pc_erw.png" alt="索兆信息科技有限公司">
      </div>
    </div> -->
  </b-container>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
  .container{
    background:#3A3D41;
    max-width: 1920px;
    padding:1rem 15%;
    font-size:14px;
    color:rgba(255,255,255,1);
    font-family:Microsoft YaHei;
  }
  .container>section>aside>header{
    font-weight: bold;
    padding-bottom: .3rem;
  }
  .container>section>aside>footer{
    opacity: .5;
  }
   .container>section>aside>img{
     width:60%; 
     height: auto;
   }
  .container>footer{
    opacity: .24;
    padding-top: .7rem;
    font-size: 12.5px;
  }
  /* .container>.d-flex>header>aside{
    width:293px; 
    text-indent: 2em;
    color: #ffffff;
    opacity: .5;
    padding-top:1.3rem ;
    font-size: 14px;
  }
  .container>div>div:nth-child(2)>.text-white{
   padding-top: 1rem;
   padding-bottom:1rem;
  }
  .container>div>div:nth-child(2)>div{
    padding-bottom: .5rem;
  }
  .container>div>div:nth-child(2)>div>a{
    font-weight:400;
    color:rgba(255,255,255,1);
    opacity:0.5;
    text-decoration: none;
    
  }
  .container>div>div:nth-child(2)>div>a:hover{
    text-decoration-color: #2CDAFF;
    text-decoration-line: underline;
    color:#2CDAFF;
    opacity: 1;
  }
  .container>div>div:nth-child(3)>.text-white:first-child{
    padding-top: 1rem;
    padding-bottom:1rem;
  }
  .container>div>div:nth-child(3)>div{
    padding-bottom: .5rem;
  }
  .container>div>div:nth-child(3)>div:last-child{
    padding-bottom: 0;
  }
  .container>div>div:nth-child(3)>div>a{
    font-weight:400;
    color:rgba(255,255,255,1);
    opacity:0.5;
    text-decoration: none;
  } */
</style>