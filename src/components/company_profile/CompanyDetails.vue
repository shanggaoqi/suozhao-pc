<template>
  <b-container>
    <b-row class="p-0 m-0">
      <b-col cols="5" class="p-0 m-0">
        <img src="../../assets/company_profile/articel.jpg" alt="西安星云宇博数据科技有限公司">
      </b-col>
      <b-col cols="1" class="p-0 m-0"></b-col>
      <b-col cols="6" class="p-0 m-0">
        <article>
          <span class="d-inline-block"></span>
          <span>西安星云宇博数据科技有限公司</span>
        </article> 
        <section>西安星云宇博数据科技有限公司是一家从事软件产品研发、生产、销售、软件服务及咨询的高新技术企业，总部位于陕西西安高新区软件园，在北京、兰州和西宁三地分别设立了分公司及办事处，并拥有一大批高素质的国内行业领域优秀技术专家和软件工程师团队，他们以其富有创造性的产品研发和推广经验不断为客户提供高质量的产品。</section>
        <section> 目前公司旗下已拥有大数据流量分析运维管理平台、多源日志网络威胁态势、网络安全运行数据分析预警系统、信息运维综合监管系统、营销智能缴费管理平台、电商ERP系统、家政信用体系平台、人脸识别安全认证系统、系统运维支撑管理平台等外包产品。</section>
        <section>公司近年来不断加大研发投入，在技术和客户服务层面逐步不断提高。强化并打造以“研发、技术、创新"为主的核心竞争力，紧跟大数据、人工智能、物联网、云计算、区块链等技术的发展与用户的需求，不断为广大用户提供高性价比的产品与服务，帮助用户创造价值企业以“提升客户自身价值”为宗旨；以“尊重客户、尊重员工”为理念；以“融合、通用、标准”为目标，努力将自身打造成为最通用的IT服务提供商。</section>
      </b-col>
    </b-row>
    <article>公司业绩</article>
    <footer>
      <img width="100%" src="../../assets/company_profile/qualification.jpg" alt="西安星云宇博数据科技有限公司">
    </footer>
  </b-container>
</template>

<script>
export default {
  name:'CompanyDetails'
}
</script>

<style scoped>
  .container{
    padding:0 15%;
  }
  /* 给.col-4中的图片添加样式 */
  .container>.row>.col-5>img{
    width: 100%;
  }
  /* 给.col-7中的文字添加样式 */
  .container>.row>.col-6>article{
    font-size: 24px;
    padding: 0 0 1.2rem 0;
    font-weight: bold;
    color: #333333;
    line-height:22px;
  }
  .container>.row>.col-6>article>.d-inline-block{
    width:9px;
    height:19px;
    background:rgba(60,138,255,1);
    margin-right:1rem ;
  }
  .container>.row>.col-6>section{
    font-size: 12px;
    padding-bottom: .5rem;
    text-indent: 2em;
    color: #333333;
  }
  .container>.row>.col-6>section:last-child{
    padding: 0;
  }
  /* 给公司业绩标签设置样式 */
  .container>article{
    padding:3rem 0;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    line-height: 22px;
  }
  /* 给公司资质底部设置下内边距 */
  .container>footer{
    padding-bottom: 7rem;
  }
</style>