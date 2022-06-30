import { createApp } from 'vue'
import App from './App.vue'
// import './styles/base.css'
// import './styles/index.css'

// import {createRouter,createWebHashHistory} from 'vue-router'
// 1. 按需导入要用到的路由方法
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    // vue 3 路由重定向
    { path: '/:pathMatch(.*)',redirect: '/home' },
    { path: '/login', component: ()=>import ('./view/login.vue') },
    { path: '/home', component: ()=>import ('./view/home.vue') },
]

const router =createRouter({
  history:createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
