import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import("../src/page/home")
    },
    {
        path: '/relatedInformation',
        name: 'RelatedInformation',
        component: () => import("../src/page/relatedInformation")
    },
]

const createRouter = () => new VueRouter({
    mode: 'history',
    routes: routes
})
const router = createRouter()

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router
