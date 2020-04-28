<template>
  <b-container>
    <div class="d-flex flex-row flex-nowrap justify-content-between">
      <div>
        <img class="pr-2" src="../../assets/index/tell.jpg" alt="西安星云宇博数据科技有限公司">
        <span>通告</span>
      </div>
      <!-- <div @click="jump()">
        <span>西安星云宇博数据科技有限公司关于近期网络谣言的声明函敬启者：西安星云宇博数据科技有限公司就近期在各大网络平台上诽谤本企业和法人声誉的文章，特发表声明如下：近期，西安星云宇博数据科技有限公司发现在百度网站上出现部分针对我公司的恶意谣言信息。这些信息以耸人听闻的标题或内容，捏造了一篇内容为西安星云宇博数据科技有限公司欠薪的新闻，杜撰所谓的揭露黑幕的文字，企图蒙蔽广大投资者和网民视听。表面信誓旦旦、言之凿凿，实质胡编乱造、用心险恶，企图恶意抹黑、贬损我公司声誉，此行为已经构成名誉侵权。目前我公司已经向企业所在的高新区人民法院提起上诉，维护自身公正和合法权益。为此，西安星云宇博数据科技有限公司特发表本声明：任何散播、编辑、制作诽谤我公司及其法人和员工的虚假信息的行为，均属于严重的信息网络侵权违法行为，相关人员应依法承担相应民事、行政和刑事法律责任。我公司将对涉嫌侵权行为保留诉诸法律的权利。我们也希望社会公众能够向西安星云宇博数据科技有限公司或国家相关部门依法举报该等制作、传播虚假信息的行为。西安星云宇博数据科技有限公司  2020-01-01</span>
      </div> -->
      <div>
          <span class="pr-2">西安疫情数据详情:</span>
          <span>确诊</span>
          <span style="color:red;" class="px-2">120</span>
          <span>死亡</span>
          <span style="color:gray;" class="px-2">3</span>
          <span>治愈</span>
          <span class="text-success px-2" >117</span>
      </div>
      <div @click="jump()">
        <span class="pr-1">更多</span>
        <span>>></span>
      </div>
    </div>
    <!-- <div id="myModal" class="modal">
      <div class="modal-content">
          <div class="modal-header">
              <div style="font-size:24px;font-wight:bold;padding-left:1rem;">西安星云宇博数据科技有限公司关于近期网络谣言的声明函</div>
              <span id="closeBtn" class="close" @click="out()">×</span>
          </div>
          <div class="modal-body py-0">
              <aside >敬启者:</aside>
              <section>西安星云宇博数据科技有限公司就近期在各大网络平台上诽谤本企业和法人声誉的文章，特发表声明如下:</section>
              <section>近期，西安星云宇博数据科技有限公司发现在百度网站上出现部分针对我公司的恶意谣言信息。这些信息以耸人听闻的标题或内容，捏造了一篇内容为西安星云宇博数据科技有限公司欠薪的新闻，杜撰所谓的揭露黑幕的文字，企图蒙蔽广大投资者和网民视听。表面信誓旦旦、言之凿凿，实质胡编乱造、用心险恶，企图恶意抹黑、贬损我公司声誉，此行为已经构成名誉侵权。目前我公司已经向企业所在的高新区人民法院提起上诉，维护自身公正和合法权益。</section>
              <section>为此，西安星云宇博数据科技有限公司特发表本声明：任何散播、编辑、制作诽谤我公司及其法人和员工的虚假信息的行为，均属于严重的信息网络侵权违法行为，相关人员应依法承担相应民事、行政和刑事法律责任。我公司将对涉嫌侵权行为保留诉诸法律的权利。我们也希望社会公众能够向西安星云宇博数据科技有限公司或国家相关部门依法举报该等制作、传播虚假信息的行为。</section>
              <section class="pt-3">西安星云宇博数据科技有限公司</section>
          </div>
          <div class="modal-footer py-0">
            <div style="font-weight:bold;">2020-01-01</div>
          </div>
      </div>
    </div> -->
  </b-container>
</template>

<script>
export default {
  name:'search',
  methods:{
    jump(){
       this.$router.push({name:'news'});
    },
    // out(){
    //   $("#myModal").addClass('add');
    // }
  }
}
</script>

<style scoped>
  .container{
    max-width: 1920px;
    background: #CCD0D6;
    padding: .5rem 15% !important;
  }
  /* .add{
    display:none !important;
  } */
  /* 弹出莫弹框样式 */
  /* .container>.modal{
    position:fixed;
    display: none;
    width:50%;
    top: 26%;
    left: 25%;
    opacity: .7;
    border-radius: 2%;  
  }
  .container>.modal>.modal-content>.modal-header>span:hover{
    color: red;
  }
  .container>.modal>.modal-content>.modal-header>span{
    cursor: pointer;
  }
  .container>.modal>.modal-content>.modal-body{
    font-size: .9rem;
  }
  .container>.modal>.modal-content>.modal-body>section{
    text-indent: 2em;
  } */
  /* 对搜索框进行样式设置 */
  .container>.d-flex>div:first-child{
    font-weight: bold;
    width: 7%;
  }
  .container>.d-flex>div:first-child>span{
    vertical-align: middle;
  }
  .container>.d-flex>div:nth-child(2){
     width: 83%;
     cursor: pointer;
   }
   .container>.d-flex>div:nth-child(2)>span{
    vertical-align: middle;
  }
  .container>.d-flex>div:last-child{
     cursor: pointer;
  }
  .container>.d-flex>div:last-child>span{
    vertical-align: middle;
  }
  /* 从左向右滑动内容 */
  /* .container>.d-flex>div:last-child{
    width: 90%;
    height: 25.67px; 
    line-height: 25.67px;
    cursor: pointer;
    font-size:.9rem;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    
  }
    .container>.d-flex>div:last-child>span{
      display: inline-block; 
      padding-left: 100%;  
      animation: marqueeTransform 120s linear infinite;
    }
    @keyframes marqueeTransform {
      0%   { transform: translate(0, 0); }
      100% { transform: translate(-100%, 0); }
    } */
</style>