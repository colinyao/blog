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
        },
        children:[{
        path: '/view1',
        name: 'login',
        component: function(reslove) {
            require(['../container/View1.vue'], reslove)
        },
        meta: {
            'notKeepAlive': true
        }
    },{
        path: '/view2',
        name: 'login',
        component: function(reslove) {
            require(['../container/View2.vue'], reslove)
        },
        meta: {
            'notKeepAlive': true
        }
    },{
        path: '/view3',
        name: 'login',
        component: function(reslove) {
            require(['../container/View3.vue'], reslove)
        },
        meta: {
            'notKeepAlive': true
        }
    }]
    }]
})
export default router

