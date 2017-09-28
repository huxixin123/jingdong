import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/index.vue"
import Home from "../components/home.vue"
import Add from "../components/add.vue"
import Cover from "../components/cover.vue"
import Shopcar from "../components/shopcar.vue"
import My from "../components/my.vue"
Vue.use(Router)

export default new Router({
  // linkActiveClass:"active",
  routes: [
      {
      	name:"index",
      	path:"/",
      	component:Index
      },
      {
        name:"home",
        path:"/home",
        component:Home,
     },{
        name:"add",
        path:"/add",
        component:Add,
     },{
        name:"cover",
        path:"/cover",
        component:Cover,
     },{
        name:"shopcar",
        path:"/shopcar",
        component:Shopcar,
     },{
        name:"my",
        path:"/my",
        component:My,
       },
       {
        path:"/",
        redirect:Index
       }
  ]
})
