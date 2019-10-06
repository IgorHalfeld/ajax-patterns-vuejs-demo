import Vue from 'vue'
import App from './App';
import services from './services';


Vue.prototype.$services = services;

new Vue({
  el: '#app',
  render: h => h(App),
})