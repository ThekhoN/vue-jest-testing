import axios from "axios";
import { FETCH_URL, PUT_URL } from "../../../utils/url";

const state = {
  count: 0,
  loading: false,
  error: ""
};

// these mutate the state
const mutations = {
  updateCount(state, { payload }) {
    state.count = payload;
  },
  updateLoading(state, { payload }) {
    state.loading = payload;
  },
  updateError(state, { payload }) {
    state.error = payload;
  }
};

const getUpdatedCount = (count, type) => {
  if (type === "INCREMENT") {
    return count + 1;
  } else if (type === "DECREMENT") {
    return count - 1;
  } else {
    return 0; // INCASE OF "RESET"
  }
};

// these cause side effects
const actions = {
  updateCountAsync: ({ commit, state }, { type }) => {
    const count = state.count;
    const updatedCount = getUpdatedCount(count, type);
    commit({
      type: "updateLoading",
      payload: true
    });
    axios({
      method: "PUT",
      url: PUT_URL,
      data: {
        count: updatedCount
      }
    })
      .then(response => {
        const updatedCountFromResponse = response.data.count;
        commit({
          type: "updateCount",
          payload: updatedCountFromResponse
        });
        commit({
          type: "updateLoading",
          payload: false
        });
      })
      .catch(err => {
        const errorMessage = `updateCountAsync: ${err.response.data} ${
          err.response.status
        }`;
        commit({
          type: "updateError",
          payload: errorMessage
        });
        commit({
          type: "updateLoading",
          payload: false
        });
      });
  },
  fetchCountAsync: ({ commit /*, state*/ }) => {
    commit({
      type: "updateLoading",
      payload: true
    });
    axios({
      method: "GET",
      url: FETCH_URL
    })
      .then(res => {
        const count = res.data[0].count;
        commit({
          type: "updateCount",
          payload: count
        });
        commit({
          type: "updateLoading",
          payload: false
        });
      })
      .catch(err => {
        const errorMessage = `fetchCountAsync: ${err.response.data} ${
          err.response.status
        }`;
        commit({
          type: "updateError",
          payload: errorMessage
        });
        commit({
          type: "updateLoading",
          payload: false
        });
      });
  }
};

// getters
const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? "even" : "odd")
};

const counter = {
  state,
  mutations,
  actions,
  getters
};

export default counter;
