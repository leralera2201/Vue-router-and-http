import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from "./routes";
import {store} from "./store/store";

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = 'https://vue-todos-e22ee.firebaseio.com/'

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
