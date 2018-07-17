import Vue from "vue";
import Vuex from "vuex";
import {
  state as initialState,
  actions,
  mutations,
  getUpdatedCount
} from "@/vuex/modules/count";
import moxios from "moxios";

const fetchCountSuccessResponseData = [
  { id: "1", createdAt: 1495629470, count: -1 }
];

const fetchCountFailureResponseData = [];

Vue.use(Vuex);
describe("Count actions", () => {
  let store = {};
  beforeEach(() => {
    store = new Vuex.Store({
      state: initialState,
      mutations,
      actions: {
        updateCountAsync: actions.updateCountAsync,
        fetchCountAsync: actions.fetchCountAsync
      }
    });
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("updates loading and count on success", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchCountSuccessResponseData
      });
    });
    return store.dispatch("fetchCountAsync").then(() => {
      expect(store.state.loading).toBe(true);
      store.commit({
        type: "updateCount",
        payload: fetchCountSuccessResponseData[0].count
      });
      expect(store.state.count).toBe(-1);
      store.commit({
        type: "updateLoading",
        payload: false
      });
      expect(store.state.loading).toBe(false);
    });
  });

  it("updates loading and error on failure", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: fetchCountFailureResponseData
      });
    });
    return store.dispatch("fetchCountAsync").then(() => {
      expect(store.state.loading).toBe(true);
      store.commit({
        type: "updateError",
        payload: "updateError ERROR"
      });
      expect(store.state.error).toBe("updateError ERROR");
      store.commit({
        type: "updateLoading",
        payload: false
      });
      expect(store.state.loading).toBe(false);
    });
  });
});

describe("Count util - getUpdatedCount", () => {
  it("increments when type is INCREMENT", () => {
    const updatedCount = getUpdatedCount(0, "INCREMENT");
    expect(updatedCount).toBe(1);
  });
  it("decrements when type is INCREMENT", () => {
    const updatedCount = getUpdatedCount(0, "DECREMENT");
    expect(updatedCount).toBe(-1);
  });
  it("resets when type is RESET", () => {
    const updatedCount = getUpdatedCount(0, "RESET");
    expect(updatedCount).toBe(0);
  });
});
