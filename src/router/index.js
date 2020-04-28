import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
//以下是网页内容切换的页面
import Index from '../views/Index'
import ProductCenter from '../views/ProductCenter'
import DetailsOne from '../views/product_details/DetailsOne'
//引入公司简介路由
import CompanyProfile from '../views/CompanyProfile'
//引入新闻动态路由
import News from '../views/News'
//引入公司公告路由
import companyTell from '../views/NewsDetails/companyTell'
//引入每个新闻接口路由one
import NewsOne from '../views/NewsDetails/NewsOne'
//引入每个新闻接口路由two
import NewsTwo from '../views/NewsDetails/NewsTwo'
//引入每个新闻接口路由three
import NewsThree from '../views/NewsDetails/NewsThree'
//引入每个新闻接口路由four
import NewsFour from '../views/NewsDetails/NewsFour'
//引入每个新闻接口路由five
import NewsFive from '../views/NewsDetails/NewsFive'
//引入每个新闻接口路由six
import NewsSix from '../views/NewsDetails/NewsSix'
//引入技术服务接口路由
import TechnologyService from '../views/TechnologyService.vue'
//引入解决方案接口路由
import Solution from '../views/Solution'
//引入行业解决方案
//引入政府单位路由one
import SolutionOne from '../views/SolutionDetails/SolutionOne'
//引入金融行业组件two
import SolutionTwo from '../views/SolutionDetails/SolutionTwo'
//引入交通行业组件three
import SolutionThree from '../views/SolutionDetails/SolutionThree'
//引入企业IT部门行业组件four
import SolutionFour from '../views/SolutionDetails/SolutionFour'
//引入电力行业组件five
import SolutionFive from '../views/SolutionDetails/SolutionFive'
//引入制造行业组件six
import SolutionSix from '../views/SolutionDetails/SolutionSix'
//引入应用解决方案
//引入政府单位路由one
import SolutionOne1 from '../views/SolutionDetailsTwo/SolutionOne1'
//引入金融行业组件two
import SolutionTwo1 from '../views/SolutionDetailsTwo/SolutionTwo1'
//引入交通行业组件three
import SolutionThree1 from '../views/SolutionDetailsTwo/SolutionThree1'
//引入企业IT部门行业组件four
import SolutionFour1 from '../views/SolutionDetailsTwo/SolutionFour1'
//引入电力行业组件five
import SolutionFive1 from '../views/SolutionDetailsTwo/SolutionFive1'
//引入制造行业组件six
import SolutionSix1 from '../views/SolutionDetailsTwo/SolutionSix1'
//引入等保建设组件seven
import SolutionSeven1 from '../views/SolutionDetailsTwo/SolutionSeven1'
const routes = [
  //首页接口
  {
    path: "/",
    name: "index",
    component:  Index
  },
  //产品中心接口
  {
    path: "/product",
    name: "product",
    component:ProductCenter
  },
  //产品中心小轮播图中产品详情接口
  {
    path:'/product/one',
    name:'details_one',
    component:DetailsOne
  },
  // 公司简介(关于我们)路由接口
  {
    path:'/company',
    name:'company',
    component:CompanyProfile
  },
  //新闻动态News接口
  {
    path:'/news',
    name:'news',
    component:News
  },
  {
    path:'/news/tell',
    name:'news_tell',
    component:companyTell
  },
  //引入新闻接口中的每个详情接口one
  {
    path:'/news/one',
    name:'news_one',
    component:NewsOne
  },
  //引入新闻接口中的每个详情接口two
  {
    path:'/news/two',
    name:'news_two',
    component:NewsTwo
  },
  //引入新闻接口中的每个详情接口three
  {
    path:'/news/three',
    name:'news_three',
    component:NewsThree
  },
  //引入新闻接口中的每个详情接口three
  {
    path:'/news/four',
    name:'news_four',
    component:NewsFour
  },
  //引入新闻接口中的每个详情接口three
  {
    path:'/news/five',
    name:'news_five',
    component:NewsFive
  },
  //引入新闻接口中的每个详情接口three
  {
    path:'/news/six',
    name:'news_six',
    component:NewsSix
  },
  //引入技术服务组件
  {
    path:'/technology',
    name:'technology',
    component:TechnologyService
  },
  //引入解决方案组件
  {
    path:'/solution',
    name:'solution',
    component:Solution
  },
  //引入行业解决方案
  //引入政府单位组件one
  {
    path:'/solution/one',
    name:'solution_one',
    component:SolutionOne
  },
  //引入金融行业组件two
  {
    path:'/solution/two',
    name:'solution_two',
    component:SolutionTwo
  },
  //引入交通行业组件three
  {
    path:'/solution/three',
    name:'solution_three',
    component:SolutionThree
  },
  //引入企业IT部门行业组件four
  {
    path:'/solution/four',
    name:'solution_four',
    component:SolutionFour
  },
  //引入电力行业组件five
  {
    path:'/solution/five',
    name:'solution_five',
    component:SolutionFive
  },
  //引入制造行业组件six
  {
    path:'/solution/six',
    name:'solution_six',
    component:SolutionSix
  },
  //引入应用解决方案
  //引入网络安全组件one1
  {
    path:'/solution/one1',
    name:'solution_one1',
    component:SolutionOne1
  },
  //引入国产化应用组件two1
  {
    path:'/solution/two1',
    name:'solution_two1',
    component:SolutionTwo1
  },
  //引入设备管控组件three1
  {
    path:'/solution/three1',
    name:'solution_three1',
    component:SolutionThree1
  },
  //引入网络运维组件four1
  {
    path:'/solution/four1',
    name:'solution_four1',
    component:SolutionFour1
  },
  //引入自动化拓扑组件five1
  {
    path:'/solution/five1',
    name:'solution_five1',
    component:SolutionFive1
  },
  //引入业务控制组件six1
  {
    path:'/solution/six1',
    name:'solution_six1',
    component:SolutionSix1
  },
  //引入等保建设组件seven1
  {
    path:'/solution/seven1',
    name:'solution_seven1',
    component:SolutionSeven1
  }
]

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
})

export default router
