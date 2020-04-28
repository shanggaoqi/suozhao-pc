<template>
  <b-container style="paddingTop:80px">
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <b-row class="p-0 m-0">
      <b-col cols="7" class="p-0 m-0">
        <article>综合运维可视化</article> 
        <section>数据中心运维包含很多的内容，从底层往上，包含物理资源、虚拟资源、系统、应用、业务的运维。复杂度往上逐层递增。而重要性却是以底层运维为基础。</section>
        <section>运维部门的多数的运维工作80%集中在底层物理资源、系统资源运维。这正符合二八定律，我们在花80%的时间做20%的工作内容。如果是这样，我们需要将运维工作做剥离。将这20%的工作从整个运维体系剥离开来，通过带外网络架构来进行统一管理，建立一个底层运维的“简生态”。</section>
      </b-col>
      <b-col cols="1" class="p-0 m-0"></b-col>
      <b-col cols="4" class="p-0 m-0">
        <img src="../../assets/details_one/chp_zhyw.jpg" alt="西安星云宇博数据科技有限公司">
      </b-col>
    </b-row>
    <aside>扬带外之长，建数据中心操作系统</aside>
    <section class="p-0">带外管理最大的好处就在于与生产系统相隔离，直接实现与机器对话。这样效率更高，同时可以有效减少对生产系统的影响。现在的数据中心，通常对所有设备都已经建立了比较完善的带外管理网络。这一日益完善的架构，不仅仅可以用来做带外管理，还可以利用其优势构建一个完整的底层DCOS（Data Center Operating System）。扬带外之长，实施建造一套完整的底层运维架构。</section>
    <div class="d-flex flex-row flex-nowrap justify-content-between">
      <img width="49%" src="../../assets/details_one/pc_peit1.jpg" alt="西安星云宇博数据科技有限公司">
      <img width="49%" src="../../assets/details_one/pc_peit2.jpg" alt="西安星云宇博数据科技有限公司">
    </div>
    <aside>自动化运维监控工具诞生</aside>
    <section>初期阶段IT基础设施通常处在小规模状态。几台至几十台机器的规模，足以满足业务需求。很多公司都不一定配有专门的运维人员或者部门，业务开发人员完成自己业务工作的同时，也一并完成所负责管理相关业务的设备。随着云时代到来了，IT基础设施迅速发展成几百上千服务器。更多的业务系统上线，业务人员也无暇再顾及运维工作。此时，运维人员开始专业化，独立成部门。各类孤岛式的运维管理工具上线，提升运维效率。</section>
    <section>可是在各类运维工具上线之后，大家发现运维人员仍然时常要充当“救火队员”，收警告、修机器，哪里宕机去哪里。虽然有了运维管理工具自动化收集监控数据之后，但还是有很多问题，让底层物理资源运维工作无法实现完全自动化。</section>
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
          text:'产品中心',
          to:{name:"product"},
          active:false
        },
        {
          text:'综合运维管理平台',
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
  /* 给.row设置内边距 */
  .container>.row{
    padding:2rem 0 !important;
  }
  /* 给.col-4中的图片添加样式 */
  .container>.row>.col-4>img{
    width:100%;
  }
  /* 给.col-7中的文字添加样式 */
  .container>.row>.col-7>article{
    font-size:30px;
    padding-bottom:1.5rem;
  }
  .container>.row>.col-7>section{
    font-size: 14px;
    padding-bottom: .7rem;
    text-indent: 2em;
  }
  /* 给aside设置样式 */
  .container>aside{
    font-size: 1.5rem;
    padding-bottom: .7rem;
  }
  .container>section{
    font-size: 14px;
    padding-bottom: .7rem;
    text-indent: 2em;
  }
  /* 给图片设置上下边距 */
  .container>.d-flex{
    padding:1.5rem 0;
  }
</style>