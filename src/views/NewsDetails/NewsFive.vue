<template>
  <b-container style="paddingTop:80px"  >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <header>2020年一季度十大网络安全热点大盘点</header>
    <aside>
      <span>2020年3月23日</span>
      <!-- <span>浏览次数：79</span> -->
    </aside>
    <section>
      <div>随着网络威胁泛化的愈演愈烈，安全形势变得越来越复杂。物联网设备攻击,、无恶意软件攻击以及非电子邮件网络钓鱼攻击继续上升。防范这些攻击的代价从未像当下这样如此高昂。Ponemon公司最新发布数据泄露报告显示，数据泄露的平均成本现在已高达每起事件392万美元。随着威胁行为者不断改变方法，利用新技术并尝试新的攻击手段，无论是企业还是政府组织可能难以跟上这一变化的快速步伐。</div>
      <footer>
        <img src="../../assets/news/five_one.jpg" alt="西安星云宇博数据科技有限公司">
      </footer>
      
      <div>当前新型冠状病毒全球爆发，导致生产生活停顿，线下活动骤减，网络成为人们工作生活、沟通交流的主要方式。大数据、移动网络、物联网等新型应用为各国政府防疫抗疫提供了有力的支撑保障，也成为“抗疫”战场最不可或缺的基础设施。然而，一些不法之徒也借“抗疫”之机将目光瞄准了网络，黑客团伙、黑产组织和APT组织等纷纷登场，借助新型冠状病毒重点对医疗机构、国际组织、政府部门实施了一系列的网络攻击活动，就连世卫生组织（WHO）、美国卫生和公共服务部（HHS）也未能幸免。卡巴斯基、安天等知名网络安全厂商对此均有报道。与此同时，企业大面积远程办公也带来了显著的网络安全风险，相关远程办公软件、VPN均有被攻击的报道，美国CISA和国防部都发布了安全警示。</div>
      <div>在整个2019年，针对美国ICS系统的一系列勒索软件攻击表明这些系统容易受到攻击。Dragos公司在其《北美电力网络威胁形势》的最新报告中表示：“随着攻击者及其赞助者投入更多的精力和金钱来获得注重效果的能力，对电力部门造成中断性或损毁性攻击的风险将大大增加。”Dragos目前总共跟踪了11个已知的针对工业控制系统（ICS）的威胁组织，其中有7个瞄准了北美的电力公司，包括PARISITE、XENOTIME、MAGNALLIUM、DYMALLOY、RASPITE、ALLANITE和COVELLITE.Hacker。改善这一险恶局面应该成为2020年的关注重点。</div>
      <div>
        零信任成为RSA大会的热议话题，对这个流行语的确切定义，不同的人有不同的理解。2020年2月发布最新版本Draft(2nd) NIST Special Publication 800-207。NIST在Draft2中再次强调，零信任是一种以资源保护为核心的网络安全范式，其前提是信任从来不是隐式授予的，而是必须进行持续评估。但总的来说，零信任是指默认情况下不信任任何用户和设备的框架（有时是用于实现该框架的产品集），即使这些设备处于网络边界的内部。在零信任模型中，用户必须在每次访问网络服务时进行身份验证，而不是对用户进行一次身份验证然后再授予其一揽子访问权限。
      </div>
      <div>美国本届政府的2021财年预算提案中，分配给网络安全的的188亿美元，其中约90亿美元专门用于民营部门以保护网络安全，包括保护关键基础设施、增强网络安全人才以及其他优先事项。值得注意的是，总统预算计划在国土安全部、国防部和其他部门有一定的倾斜。比如今年国防部的预算为98亿美元，其中54亿美元将用于网络安全，包括6.73亿美元用于保护下一代平台，38亿美元用于防御性和进攻性数字行动，22亿美元将用于支持美国网络司令部的133支网络任务部队。此外在AI和机器学习、超级计算研究和量子计算等新兴技术上均专列预算计划。</div>
      <div> 从工厂和仓库中的工业物联网到办公室中的智能灯和恒温器，物联网设备已在许多类型的企业中大量使用。据卡巴斯基实验室数据显示，2019年有IoT设备的企业中有近三分之一受到攻击。使设备保持最新状态，仅考虑安全性设计的设备，并分析往返于IoT设备的网络流量，可以为确保企业安全提供帮助。Zscaler公司最近发布了其第二份年度物联网报告，报告对212个制造商的21种不同的共计553种IoT设备进行了统计分析。其关键发现足以呈现当前物联网安全的状况。最让人担忧的是影子物联网的存在，让众多企业网络的安全威胁日趋加剧。</div>
      <div>美国国家安全局（NSA）于2020年3月更新了其云安全指南。修订后的文件将云漏洞分为四类：云资源配置错误、访问控制不佳（可以通过限制访问和实施多因素身份验证来改善）、供应链漏洞和共享的租用漏洞（如当多个容器共享同一内核时容易受到同一攻击）。NSA将保护这些漏洞的责任分给了云服务提供商及其客户，如防止云资源配置错误不是AWS或Azure的工作，而是每个客户的云管理员的责任。</div>
      <div>安全专家担心在美国推出5G蜂窝网络将导致不安全连接的设备数量增加。这为个人客户和企业增加了攻击面，并为僵尸网络提供了更多的资源。不幸的是，5G推出的势头如此之大，以至于在宏观层面上没有太多工作要做。抛开政治因素之外，从技术层面看，5G将要面对的，是更开放的网络链接、更深度的计算设备、以及更复杂的应用环境。其面临核心网技术、低时延业务、大连接业务、网络切片技术、伪基站问题、用户位置隐私保护等六个方面的安全挑战。</div>
    </section>
    <article>
      <span>下一篇:</span>
      <router-link :to="{name:'news_four'}">
        <span class="pl-2">三国专家论道网络安全云峰会 互信应是数字世界共治的基石</span>
      </router-link>
    </article>
  </b-container>
</template>

<script>
export default {
  name:'NewsFour',
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
          text:'新闻动态',
          to:{name:"news"},
          active:false
        },
        {
          text:'2020年一季度十大网络安全热点大盘点',
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
    padding:1rem 15% 3rem;
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
  /* 对新闻内容部分进行样式设置 */
  .container>header{
    width:100%;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 1rem; 
  }
  .container>aside{
    width: 100%;
    font-size: .75rem;
    text-align: center;
    padding-bottom: 3rem;
    color: #666666;
  }
  /* .container>aside>span:first-child{
    display: inline-block;
    padding-right: 2rem;
  } */
  .container>section>div{
    padding-bottom:1rem;
    text-indent: 2em;
    color: #666666;
  }
  .container>section>footer{
    width: 100%;
    padding:1rem 10% 2rem;
  }
  .container>section>footer>img{
    width: 100%;
  }
  .container>article{
      padding-top:2rem;
  }
</style>