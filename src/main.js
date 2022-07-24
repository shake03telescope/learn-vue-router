import Vue from 'vue'
import App from './App.vue'
// 默认引入一个文件夹下名称为 index/index.js/index.json 的文件
import router from './router/index.js' // 1.从其他文件引入了router

Vue.config.productionTip = false

new Vue({
  router, // 2.使用了router
  render: h => h(App)
}).$mount('#app')
