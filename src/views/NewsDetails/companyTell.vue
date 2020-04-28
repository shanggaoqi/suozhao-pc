<template>
  <b-container style="paddingTop:80px"  >
    <!-- 面包屑导航 -->
    <b-breadcrumb class="bg-transparent p-0 m-0" :items="items"></b-breadcrumb>
    <section>
      <header>西安星云宇博数据科技有限公司关于近期网络谣言的声明函</header>
      <nav>敬启者:</nav>
      <aside>西安星云宇博数据科技有限公司就近期在各大网络平台上诽谤本企业和法人声誉的文章，特发表声明如下:</aside>
      <aside>近期，西安星云宇博数据科技有限公司发现在百度网站上出现部分针对我公司的恶意谣言信息。这些信息以耸人听闻的标题或内容，捏造了一篇内容为西安星云宇博数据科技有限公司欠薪的新闻，杜撰所谓的揭露黑幕的文字，企图蒙蔽广大投资者和网民视听。表面信誓旦旦、言之凿凿，实质胡编乱造、用心险恶，企图恶意抹黑、贬损我公司声誉，此行为已经构成名誉侵权。目前我公司已经向企业所在的高新区人民法院提起上诉，维护自身公正和合法权益。</aside>
      <aside>为此，西安星云宇博数据科技有限公司特发表本声明：任何散播、编辑、制作诽谤我公司及其法人和员工的虚假信息的行为，均属于严重的信息网络侵权违法行为，相关人员应依法承担相应民事、行政和刑事法律责任。我公司将对涉嫌侵权行为保留诉诸法律的权利。我们也希望社会公众能够向西安星云宇博数据科技有限公司或国家相关部门依法举报该等制作、传播虚假信息的行为。</aside>
      <aside class="py-5">西安星云宇博数据科技有限公司</aside>
      <article>2020-01-01</article>
    </section>
    
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
          text:'企业动态',
          to:{name:"news"},
          active:false
        },
        {
          text:'公司公告',
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
  .container>section{
    width: 100%;
    padding:3rem 0 ;
  }
  .container>section>header{
    width:100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 2rem;
    text-align: center;
  }
  .container>section>aside{
    width:100%;
    text-indent: 2em;
    padding-bottom: .5rem;
  }
  .container>section>article{
    width: 100%;
    padding-left: 90%;
  }
</style>