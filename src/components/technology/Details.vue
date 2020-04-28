<template>
  <b-container>
    <header>开发集成</header>
    <aside class="one">
      提供众多可复用可扩展的框架模块以及深入代码级的开发模式，在原有通用功能的基础上对平台进行扩展开发，使其完全贴合用户个性化的使用需求。同时避免客户开从头开发所面临的‘高投入，高成本，高风险’问题，真正做到“多、快、好、省”的开发模式。 
    </aside>
    <header>开发需求</header>
    <aside class="two">
      全面满足用户设备扩展、功能扩展以及开发集成的需求。 
    </aside>
    <nav>
      <img src="../../assets/technology/pc_kfxq.png" alt="西安星云宇博数据科技有限公司">
    </nav>
  </b-container>
</template>

<script>
export default {
  name:'Details'
}
</script>

<style scoped>
  .container{
    padding: 2rem 15%;
    color: #333333;
  }
  .container>header{
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
  .container>aside{
    width: 100%;
    text-indent: 2em;
    text-align: center;
    
  }
  .container>.one{
    padding: 2rem 0 4rem;
  } 
  .container>.two{
    padding: 0 0 3rem;
  }
  .container>nav{
    width:100%;
  }
  .container>nav>img{
    width: 100%;
  }
</style>