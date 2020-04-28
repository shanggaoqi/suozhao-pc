<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>国产化应用解决方案</header>
    <section>信息安全和国产化已经是国家战略，各种国产化的政策相续出台，要求核心单位优先使用安全可控的国产化网络管理软件，因此专门针对管理国产软硬件的网络管理软件应运而生，而国产化产品种类繁多，包括CPU、服务器、数据库、中间件等多种类型，因此网管软件往往无法做到全面国产化的兼容性。</section>
    <article>国产化网管的需求</article>
    <aside>
      <div>
        <span></span>
        <span>能部署在国产化产品上运行，如部署在安装了中标麒麟操作系统的华为服务器上进行网管服务</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产CPU：兼容龙芯、神威CPU</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产服务器：兼容龙芯、浪潮、华为服务器</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产操作系统：兼容中标麒麟、红旗Linux操作系统</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产数据库：兼容金仓、达梦数据库</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产中间件：兼容东方通等中间件</span>
      </div>
      <div>
        <span></span>
        <span>要求网管软件具有安全性和机密性，网管软件需是完全自主研发的国产化产品，不依赖于其它商业技术，拥有100%知识产权</span>
      </div>
    </aside>
    <article>国产化应用定制网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>国产化环境部署</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产操作系统和硬件</span>
      </div>
      <div>
        <span></span>
        <span>多协议支持</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产数据库</span>
      </div>
      <div>
        <span></span>
        <span>兼容国产中间件</span>
      </div>
      <div>
        <span></span>
        <span>通用功能</span>
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
          text:'国产化应用解决方案',
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