import Vue from 'vue';
import Vuex from 'vuex';
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    jsonObj: '',
  },
})