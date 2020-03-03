import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import App from './App.vue'
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
];

const router = new VueRouter({
  routes
});
axios.interceptors.request.use(
    config => {
      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
      }
      return config
    },
    error => {
      // console.log(error);
      Promise.reject(error)
    }
);




new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
