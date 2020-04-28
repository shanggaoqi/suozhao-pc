<template>
<div id="head">
    <b-container>
        <b-row class="m-0">
            <b-col cols='4' class="p-0">
                <img src="../assets/logo.png" alt="西安星云宇博数据科技有限公司">
            </b-col>
            <b-col cols="8" class="p-0">
                <b-nav>
                    <b-nav-item :to="{path:'/'}"  @mouseenter="enterone()">首页
                    </b-nav-item>
                    <b-nav-item :to="{name:'product'}" @mouseenter="enter1()" >产品中心</b-nav-item>
                    <b-nav-item :to="{name:'solution'}" @mouseenter="enter2()">解决方案</b-nav-item>
                    <b-nav-item :to="{name:'technology'}" @mouseenter="enter3()">技术服务</b-nav-item>
                    <b-nav-item :to="{name:'news'}"  @mouseenter="enter4()">企业动态</b-nav-item>
                    <b-nav-item target="_blank" href="http://111.229.130.120/" @mouseenter="enter5()">案例展示</b-nav-item>
                    <b-nav-item :to="{name:'company'}" @mouseenter="enter6()">关于索兆</b-nav-item>
                </b-nav>
            </b-col>
        </b-row>
    </b-container>
    <!-- 产品中心样式 -->
    <div id="nav1" @mouseleave="leave1()">
       <aside>
           <header>
               <nav>
                   <div @click="jumpto()">综合运维管理平台</div>
               </nav>
           </header>
       </aside>
    </div>
    <div id="nav2" @mouseleave="leave2()">
        <aside class="d-flex justify-content-between">
            <header>
                <section>行业解决方案</section>
                <article></article>
                <nav class="pb-2 d-flex flex-row flex-nowrap">
                    <div @click="jump1()">政府单位</div>
                    <div @click="jump2()" style="padding-left:70px;">金融行业</div>
                </nav>
                <nav class="pb-2 d-flex flex-row flex-nowrap ">
                    <div @click="jump3()">交通行业</div>
                    <div @click="jump4()" style="padding-left:70px;">企业IT部门</div>
                </nav>
                <nav class=" d-flex flex-row flex-nowrap ">
                    <div @click="jump5()">电力行业</div>    
                    <div @click="jump6()" style="padding-left:70px;">制造业</div>
                </nav>  
            </header>
            <header>
                <section>应用解决方案</section>
                <article></article>
                <nav class="pb-2 d-flex flex-row flex-nowrap ">
                    <div @click="link1()">网络安全</div>
                    <div @click="link2()" style="padding-left:67px;">国产化应用</div>
                 </nav>
                 <nav class="pb-2 d-flex flex-row flex-nowrap ">
                    <div @click="link3()">设备管控</div>
                    <div @click="link4()" style="padding-left:67px;">网络运维</div>
                 </nav>
                <nav class="pb-2 d-flex flex-row flex-nowrap ">
                    <div @click="link5()">自动化拓扑</div>
                    <div @click="link6()" style="padding-left:55px;">业务控制</div>
                </nav>
                <nav class="d-flex flex-row flex-nowrap ">
                    <div @click="link7()">等级保护建设</div>
                    <div></div>
                </nav>
            </header>
        </aside>
    </div>
    <div id="nav4" @mouseleave="leave4()">
        <aside>
           <header>
               <nav>
                   <div @click="jump4_1()">公司公告</div>
                   <div @click="jump4_2()">新闻动态</div>
               </nav>
           </header>
       </aside>
    </div>
    <div id="nav5" @mouseleave="leave5()">
        <aside>
           <header>
               <nav>
                   <div>
                       <a href="http://111.229.130.120/" target="_blank">中心网络安全预警和态势感知系统</a>
                   </div>
               </nav>
           </header>
       </aside>
    </div>
</div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        leave1(){
            $("#nav1").removeClass('add'); 
        },
        enter1(){
            $("#nav1").addClass('add');
            $("#nav2").removeClass('add'); 
            $("#nav5").removeClass('add');
            $("#nav4").removeClass('add'); 
        },
        leave2(){
            $("#nav2").removeClass('add'); 
        },
        enter2(){
            $("#nav2").addClass('add');
            $("#nav1").removeClass('add');
            $("#nav5").removeClass('add');
            $("#nav4").removeClass('add'); 
        },
        // 解决鼠标悬停时页面占据的问题
        enterone(){
            $("#nav1").removeClass('add'); 
            $("#nav2").removeClass('add'); 
            $("#nav5").removeClass('add');
            $("#nav4").removeClass('add'); 
        },
        enter3(){
            $("#nav1").removeClass('add'); 
            $("#nav2").removeClass('add'); 
            $("#nav5").removeClass('add');
            $("#nav4").removeClass('add'); 
        },
        enter4(){
            $("#nav1").removeClass('add'); 
            $("#nav2").removeClass('add'); 
            $("#nav5").removeClass('add');
            $("#nav4").addClass('add');
        },
        leave4(){
            $("#nav4").removeClass('add'); 
        },
        enter5(){
            $("#nav1").removeClass('add'); 
            $("#nav2").removeClass('add'); 
            $("#nav4").removeClass('add'); 
            $("#nav5").addClass('add'); 
        },
        leave5(){
            $("#nav5").removeClass('add'); 
        },
        enter6(){
            $("#nav1").removeClass('add'); 
            $("#nav2").removeClass('add'); 
            $("#nav5").removeClass('add');
            $("#nav4").removeClass('add'); 
        },
        //产品中心导航栏跳转
        jumpto(){
            this.$router.push({name:'product'});
            
        },
        //企业动态导航栏调专
        // jump4_1(){
        //     this.$router.push({name:'news_tell'});
        //     $("#nav4").removeClass('add'); 
        // },
        jump4_2(){
            this.$router.push({name:'news'});
            $("#nav4").removeClass('add'); 
        },
        //行业解决方案导航栏跳转详情页
        jump1(){
            this.$router.push({name:'solution_one'});
            $("#nav2").removeClass('add');
        },
        jump2(){
            this.$router.push({name:'solution_two'});
            $("#nav2").removeClass('add');
        },
        jump3(){
            this.$router.push({name:'solution_three'});
            $("#nav2").removeClass('add');
        },
        jump4(){
            this.$router.push({name:'solution_four'});
            $("#nav2").removeClass('add');
        },
        jump5(){
            this.$router.push({name:'solution_five'});
            $("#nav2").removeClass('add');
        },
        jump6(){
            this.$router.push({name:'solution_six'});
            $("#nav2").removeClass('add');
        },
        //应用解决方案导航栏跳转详情页
        link1(){
           this.$router.push({name:'solution_one1'}); 
            $("#nav2").removeClass('add');
        },
        link2(){
           this.$router.push({name:'solution_two1'}); 
            $("#nav2").removeClass('add');
        },
        link3(){
            this.$router.push({name:'solution_three1'}); 
             $("#nav2").removeClass('add');
        },
        link4(){
            this.$router.push({name:'solution_four1'}); 
             $("#nav2").removeClass('add');
        },
        link5(){
            this.$router.push({name:'solution_five1'});
             $("#nav2").removeClass('add');
        },
        link6(){
            this.$router.push({name:'solution_six1'});
             $("#nav2").removeClass('add');
        },
        link7(){
            this.$router.push({name:'solution_seven1'});
             $("#nav2").removeClass('add');
        }
    } 
}
</script>

<style scoped>
    #head{
        position: absolute;
        z-index: 10;
        width: 100%;
    }
    .container{
        max-width: 1920px;
        background: #2F3A4A;
        padding:.5rem 15% 1rem;
    }
    .container>.row>.col-4>img{
        object-fit: contain;
    }
    .container>.row>.col-8>.nav{
        justify-content: space-between;
        padding-top: .8rem;
    }
    .container>.row>.col-8>.nav>.nav-item>.nav-link{
        padding: 0;
        color: #ffffff;
    }
    .container>.row>.col-8>.nav>.nav-item>.nav-link:hover{
        border-bottom: 2px solid #2CDAFF;
        color: #2CDAFF; 
    }
    
    /* 鼠标悬停时出现折叠导航栏 */
    .add{
        display: block !important;
    }
    /* 产品中心样式修改 */
    #nav1{
        display:none;
        width: 9%;
        background:rgba(47,58,74,.6);
        float: right; 
        margin-right: 49.3%;
        color: #fff;
    }
    #nav1>aside{
        width:100%;
        padding: .7rem 0px;
    }
    #nav1>aside>header{
        width: 100%;
    }
    #nav1>aside>header>nav{
        width: 100%;
    }
    #nav1>aside>header>nav>div{
       font-size: .8rem;
       cursor: pointer;
       text-align: center;
    }
    #nav4{
        display:none;
        width: 10%;
        background:rgba(47,58,74,.6);
        float: right; 
        margin-right:26.5%;
        color: #fff;
    }
    #nav4>aside{
        width:100%;
        padding: .7rem .7rem;
    }
    #nav4>aside>header{
        width: 100%;
    }
    #nav4>aside>header>nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    #nav4>aside>header>nav>div{
       font-size: .8rem;
       cursor: pointer;
    }
    #nav5{
        display:none;
        width: 15.8%;
        background:rgba(47,58,74,.6);
        float: right; 
        margin-right: 15%;
        color: rgb(36, 35, 35);
    }
    #nav5>aside{
        width:100%;
        padding: .7rem 0px;
    }
    #nav5>aside>header{
        width: 100%;
    }
    #nav5>aside>header>nav{
        width: 100%;
    }
    #nav5>aside>header>nav>div{
       text-align: center;
    }
    #nav5>aside>header>nav>div>a{
       font-size: .8rem;
       cursor: pointer;
       text-align: center;
       text-decoration: none;
       color: #fff;
    }
    /* 解决方案样式修改 */
    #nav2{
        display:none;
        width: 30%;
        background:rgba(47,58,74,.6);
        /* opacity:.7; */
        float: right;
        margin-right: 30%;
        color: #fff;
    }
    #nav2>aside{
        width:100%;
        padding: .7rem 1rem;
    }
    #nav2>aside>header{
        width: 49.5%;
    }
    #nav2>aside>header>section{
        font-size:1rem;
        width: 100%;
        text-align: center;
    }
    #nav2>aside>header>article{
        width:100%;
        border-bottom: 2px solid #00BAFF;
        margin:1rem 0;
    }
    #nav2>aside>header>nav{
        width: 100%;
    }
    #nav2>aside>header>nav>div{
        font-size: .8rem;
        cursor: pointer;
    }
    
    /* #nav2>aside>header>nav>div:last-child{
        padding-left: 70px;
    }  */
</style>