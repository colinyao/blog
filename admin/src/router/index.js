import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: function(reslove) {
            require(['../container/Login.vue'], reslove)
        },
        meta: {
            'notKeepAlive': true
        }
    }]
})
export default router

