import './js/'
import './assets/scss/main.scss'

const Vue = require('vue')
const VueRouter = require('vue-router').default
Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: require('./components/Example.vue').default
  }
]

const router = new VueRouter({ routes })
const app = new Vue({ router }).$mount('#app')