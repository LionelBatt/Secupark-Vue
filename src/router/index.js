import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import UserDashboard from '../views/UserDashboard.vue'
import newCarGuest from '../views/NewCarGuest.vue'
import newCar from '../views/Car.vue'
import AdminDashboard from '../views/AdminDashboard'
import History2 from "@/views/History2";
import forgotPassword from '../views/ForgotPassword'
import ResetPassword from "../views/resetPassword";

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component: login
  },
  {
    path:'/UserDashboard',
    name:'UserDashboard',
    component: UserDashboard
  },
  {
    path:'/AdminDashboard',
    name:'AdminDashboard',
    component: AdminDashboard
  },
  {
    path:'/newCar',
    name:'car',
    component: newCar
  },
    {
      path:'/History2',
      name:'History2',
      component: History2
    },
  {
    path:'/carGuest',
    name:'carGuest',
    component: newCarGuest
  },
    {
      path:'/forgotPassword',
      name:'ForgotPassword',
      component: forgotPassword
    },
    {
      path: '/resetPassword',
      component: ResetPassword,
      params: {
        token: ''
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/home', '/login','/forgotPassword','/resetPassword'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/home');
  } else {
    next();
  }
});
