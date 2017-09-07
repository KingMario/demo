import Vue from 'vue'
import 'iview/dist/iview.min.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueResource from 'vue-resource'
import App from './components/App'

// 使用插件
Vue.use(VueResource)
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //render: h => h(App)
  // render: (h, params) => {
  //   return h('span', {
  //
  //   }, params.row.email.replace("test", '<span style="background: #ffff00;">test</span>'));
  // }
  render:(function (h) {
  return h(App);
})

})
