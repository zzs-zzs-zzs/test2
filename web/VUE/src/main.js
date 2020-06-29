

import Vue from 'vue'

import VueRouter from 'vue-router'
//安装
Vue.use(VueRouter)
import first from './first.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router.js'



const vm=new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(first),
    router

})



