import Vue from 'vue';
import Vuex from 'vuex';
import services from './services';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    api(_, { entity, action, payload }) {
      return services[entity][action](payload)
    }
  }
});