// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import {AlertPlugin,ToastMPlugin} from './component/cele/index.js'
import MetaInfo from 'vue-meta-info'
Vue.use(AlertPlugin)
Vue.use(ToastMPlugin)
Vue.use(MetaInfo)
<<<<<<< Updated upstream
// // for Vue 2.0
// //import VueLazyload from 'vue-lazyload'
import store from './store'
//Vue.use(VueLazyload, {
//error: 'https://test-iobs02.pingan.com.cn/download/pamap-gr-dmz-dev/3d06e8d9edc743ef9537af392df2481bS?e=1492167771&token=CCV9dFVIDF2Y0D22YI6KJDYWdCCIIFF0:SDIEg-owgO91G9pJTCjpHbp55qg=',
//loading: 'https://test-iobs02.pingan.com.cn/download/pamap-gr-dmz-dev/3d06e8d9edc743ef9537af392df2481bS?e=1492167771&token=CCV9dFVIDF2Y0D22YI6KJDYWdCCIIFF0:SDIEg-owgO91G9pJTCjpHbp55qg=',
//try: 1 // default 1
//})
=======
// for Vue 2.0
//import VueLazyload from 'vue-lazyload'
import store from './store'
// Vue.use(VueLazyload, {
// error: 'https://test-iobs02.pingan.com.cn/download/pamap-gr-dmz-dev/3d06e8d9edc743ef9537af392df2481bS?e=1492167771&token=CCV9dFVIDF2Y0D22YI6KJDYWdCCIIFF0:SDIEg-owgO91G9pJTCjpHbp55qg=',
// loading: 'https://test-iobs02.pingan.com.cn/download/pamap-gr-dmz-dev/3d06e8d9edc743ef9537af392df2481bS?e=1492167771&token=CCV9dFVIDF2Y0D22YI6KJDYWdCCIIFF0:SDIEg-owgO91G9pJTCjpHbp55qg=',
// try: 1 // default 1
// })
>>>>>>> Stashed changes




FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
