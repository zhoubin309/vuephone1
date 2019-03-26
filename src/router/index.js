import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  label: '首页',
  nav: '首页',
  component: resolve => require(["../pages/home"], resolve)
}]

export default new Router({
  routes
})