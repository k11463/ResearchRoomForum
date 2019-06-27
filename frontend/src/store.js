import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageNotFound: false
  },
  mutations: {
    PageNotFound(state) {
      state.pageNotFound = !state.pageNotFound;
    }
  },
  actions: {

  }
});
