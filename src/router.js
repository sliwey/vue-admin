import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from './pages/layout/layout';
import Login from './pages/login/login';
import Home from './pages/home/home';
import User from './pages/user/user';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Layout,
      children: [
        { path: 'home', component: Home, alias: '' },
        { path: 'user', component: User }
      ]
    },
    { path: '/login', component: Login }
  ]
})