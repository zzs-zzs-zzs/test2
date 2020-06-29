import VueRouter from 'vue-router'
import user from "./user.vue"
import app from "./app.vue"
import first from "./first.vue"



var router = new VueRouter({
    routes: [
      {path:'/',redirect:'/app'},
      {path:'/app',component:app},
      {path:'/user',component:user},
      {path:'/first',component:first}
    ]
  })

export default router




