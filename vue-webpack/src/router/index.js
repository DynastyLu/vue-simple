import Vue from 'vue'
import Router from 'vue-router'
import Home from "view/home/index";

Vue.use(Router)
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path:"/home",
        name:"home",
        component:Home
    }
]
const router = new Router({
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//         if (sessionStorage.getItem('islogin')) { //判断本地是否存在access_token
//             next();
//         } else {
//             if (to.name == "shop") {
//                 next({
//                     path: `/login?from=${to.name}`
//                 })
//             }
//         }
//     } else {
//         next();
//     }
//     /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//     if (to.fullPath == "/login") {
//         if (sessionStorage.getItem('islogin')) {
//             next({
//                 path: from.fullPath
//             });
//         } else {
//             next();
//         }
//     }
// });

export default router