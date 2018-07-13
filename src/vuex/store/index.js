import Vue from "vue";
import Vuex from "vuex";
import count from "../modules/count";
import ui from "../modules/ui";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    count,
    ui
  }
});

export default store;
