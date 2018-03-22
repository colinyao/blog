import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'login',
        component: function(resolve) {
            require(['../container/Login.vue'], resolve)
        },
        meta: {
            'notKeepAlive': true
        }
      },{
          path: '/manage',
          name: 'manage',
          component: function(resolve) {
              require(['../container/Manage.vue'], resolve)
          },
          meta: {
              'notKeepAlive': true
          },
          children:[
            {
              path: '/',
              name: 'listSort',
              component: function(resolve) {
                  require(['../container/manage/ListSort.vue'], resolve)
              },
              meta: {
                  'notKeepAlive': true
              }
            },
            {
              path: 'edit',
              name: 'edit',
              component: function(resolve) {
                  require(['../container/manage/Edit.vue'], resolve)
              },
              meta: {
                  'notKeepAlive': true
              }
            }
          ]
        },{
          path: '/example',
          name: 'login',
          component: function(resolve) {
              require(['../container/example.vue'], resolve)
          },
          meta: {
              'notKeepAlive': true
          }
        }]
})
export default router
