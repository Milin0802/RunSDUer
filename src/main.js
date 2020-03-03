import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import App from './App.vue'
// import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test";
import PostsView from "@/components/PostsView";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vant);
Vue.use(VueAxios, axios);


const routes = [
  {path: '/', component: PostsView},
  {path: '/test', component: Test},
  // {path: '/ta/:cid', component: TaExpList},
  // {path: '/ta/:cid/submits/:eid', component: TaExpSubmit},
  // {path: '/ta/:cid/edit/:eid', component: TaExpEdit},
  // {path: '/student', component: StudentIndex},
  // {path: '/student/:cid', component: StudentExpList},

];
//https://blog.csdn.net/deaidai/article/details/81102966
const router = new VueRouter({
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
});
axios.interceptors.request.use(
    config => {
      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
      }
      return config
    },
    error => {
      // console.log(error); //TODO
      Promise.reject(error)
    }
);




new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
