import Vue from 'vue'
import App from './App.vue'
// 默认引入一个文件夹下名称为 index/index.js/index.json 的文件
import router from './router/index.js' // 1.从其他文件引入了router

// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router, // 2.使用了router
  render: h => h(App)
}).$mount('#app')
