<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>企业IT部门综合网管解决方案</header>
    <section>随着经济和科技的迅猛发展，企业的信息化步入了一个崭新的时代，而随着企业规模的不断壮大，业务的不断拓展，企业信息化依赖的网络结构和IT技术越来越复杂。</section>
    <section>企业IT网管部门的网管软件和技术实力直接决定企业是否能提供提供稳定、可靠、快速、优质的服务。但是，传统网管监控设备种类受限，监控的效率不高，后期扩展困难，同时无法和企业的业务情况结合起来，无法提供足够的安全管控功能，致使企业IT系统运行维护的管理水平相对滞后。</section>
    <article>企业IT管理的需求</article>
    <aside>
      <div>
        <span></span>
        <span>全面深入的监控管理</span>
      </div>
      <div>
        <span></span>
        <span>不间断的全程监控</span>
      </div>
      <div>
        <span></span>
        <span>后期扩展设备的支持</span>
      </div>
      <div>
        <span></span>
        <span>IT复杂性与管理方便性的矛盾</span>
      </div>
      <div>
        <span></span>
        <span>清楚的掌控设备部署间的关系</span>
      </div>
      <div>
        <span></span>
        <span>与公司业务相结合</span>
      </div>
      <div>
        <span></span>
        <span>多层次的安全管理</span>
      </div>
      <div>
        <span></span>
        <span>成本的控制</span>
      </div>
    </aside>
    <article>该平台企业IT网管解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>全面的监控管理</span>
      </div>
      <div>
        <span></span>
        <span>不间断的全程监控</span>
      </div>
      <div>
        <span></span>
        <span>对后期扩展设备的支持</span>
      </div>
      <div>
        <span></span>
        <span>真正解决IT复杂性与管理方便性的矛盾</span>
      </div>
      <div>
        <span></span>
        <span>清楚的掌控设备部署间的关系</span>
      </div>
      <div>
        <span></span>
        <span>提供业务管理功能</span>
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
          text:'企业IT部门综合网管解决方案',
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