<template>
  <b-container style="paddingTop:80px" >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <!-- 顶部页面展示 -->
    <header>业务控制解决方案</header>
    <section>随着网络与自动化的建设，各个企业信息化程度已经达到了较高水平。信息技术在提高管理水平，促进业务创新，提升企业竞争力方面发挥着日益重要的作用。显而易见，基本上所有的业务系统都架设在网络之上以提供服务。然而，客户无法了解和预测网络架构的变化，网络故障对于业务的影响，也无法了解业务的变化如何影响网络基础设施。引入业务网络可视化管理解决方案将会提高业务性能和运营效率，从关键的投资中提供战略性价值。</section>
    <article>业务管控的需求</article>
    <aside>
      <div>
        <span></span>
        <span>业务管理：实现对业务的展示和管理功能。</span>
      </div>
      <div>
        <span></span>
        <span>业务拓扑：能够详尽的展示业务拓扑，展示业务流程中设计到的所有的设备之间的链路关系，流程方向。可以展示业务流程中各主要性能信息，当业务流程故障或者中断时能够及时通知运维人员，并精确定位具体故障位置，给出参考解决方案。让运维人员能够直观、简便、轻松的管理繁杂的业务，快速的解决业务故障。</span>
      </div>
      <div>
        <span></span>
        <span>业务列表：能够方便的管理业务，实现业务的增删改查等功能。管理员可以通过该功能在拓扑中直接新建业务，关联业务设备，配置业务流程，配置业务故障监视器、性能监视器；管理员也可以修改或删除业务参数、业务设备、业务流程、监视器；管理员还可以管理业务告警信息；系统对将过期或已过期业务进行提醒。系统提供权限模块，让系统管理员可以配置不同的业务管理员可以管理的业务视图。</span>
      </div>
      <div>
        <span></span>
        <span>业务管控：通过对设备进行相关配置，能够控制不同业务的优先级，控制不同业务的限速和带宽保障，绑定不同业务使用的端口，能够实现业务开关的控制等。</span>
      </div>
    </aside>
    <article>业务管控解决方案</article>
    <aside>
      <div>
        <span></span>
        <span>业务拓扑:基于图形显示方式，使用html5开发的b/s业务拓扑。能够精准的将业务拓扑的实际情况展示给管理人员。展示每个业务流程中的每台相关设备，支持设备逻辑视图和面板视图，展示拓扑中设备的链路关系以及业务流程方向，可以展示链路起止端口，链路时带宽流量等性能信息。并且能够直观的展示业务的通断情况，精确定位故障位置。</span>
      </div>
      <div>
        <span></span>
        <span>业务列表:基于列表显示方式，提供显示业务信息的列表界面，实现业务的增删改查管理。用户只需进行简单的选择操作就可以创建出新的业务并可以对已有业务进行修改、删除操作。用户可以按实际情况从屋里拓扑中选取设备添加到业务拓扑中，并配置设备间的路由关系表。配置业务的告警监视器，性能监视器等信息，系统会根据监视器信息自动创建监视任务，及时产生故障告警。</span>
      </div>
      <div>
        <span></span>
        <span>业务管控:通过友好、易于操作的界面使用SSH、Telenet等协议向路由器、交换机发送命令，配置设备的ACL、类、流行为策略等QOS信息，在物理层将不同的报文分类，并对不同分类的报文进行优先级排序、流量限速、带宽保障的操作，实现对业务的控制，并可以通过Ip-mac绑定等策略实现对不同业务的端口绑定，通过控制端口的开关，实现控制业务的通断。</span>
      </div>
      <div>
        <span></span>
        <span>业务告警:对业务流程中出现故障时及时告警，当业务流程故障或者中断时能够及时通知运维人员，并精确定位具体故障位置，给出参考解决方案。</span>
      </div>
      <div>
        <span></span>
        <span>通用网管功能:除了业务控制功能，平台还提供了全面的网管功能，如提供拓扑管理功能，并支持拓扑显示网络告警，支持拓扑完成各种网管操作；提供扩展功能，支持通过配置扩展支持的设备类型、资源类型、监视器任务；提供安全管控功能，通过对设备下发相关配置命令等多种方式实现对网络安全的管控。</span>
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
          text:'业务控制解决方案',
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