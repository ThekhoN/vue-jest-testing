import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {
  state as initialState,
  actions,
  mutations
} from "@/vuex/modules/count";

describe("Count actions", () => {
  let store, setDataMock;
  beforeEach(() => {
    setDataMock = jest.fn();
    store = new Vuex.Store({
      state: initialState,
      mutations,
      actions
    });
  });

  it("mocks an ajax calling using axios", () => {
    return store
      .dispatch("updateCountAsync", { type: "DECREMENT" })
      .then(() => {
        console.log("store: ", store);
        console.log("store.state: ", store.state);
        expect(store.state.data).toEqual({ title: "Mock with Jest" });
      });
  });
});
