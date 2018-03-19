import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import './common/stylus/index.styl'
/* v-lazy 替代指令:src  */
Vue.use(VueLazyLoad, {
  loading: require('./common/image/default.png')
})
/* 处理300m的延迟 */
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
