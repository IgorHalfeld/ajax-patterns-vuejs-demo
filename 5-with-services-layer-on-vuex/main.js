import Vue from 'vue'
import App from './App';
import services from './services';
import store from './store';

Vue.prototype.$services = services;

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})