<template>
    <div class="counter">
    <Decrementor @decrement-count="decrementCount"></Decrementor>
    <template v-if="error">
        <CountError :error="error"></CountError>  
    </template>
    <template v-else>
        <Loading v-if="loading" content="loading..."></Loading>
        <CountDisplay :count="count" v-else></CountDisplay>   
    </template> 
    <Incrementor @increment-count="incrementCount"></Incrementor>
    <Resetor @reset-count="resetCount"></Resetor>
    <h2>countType: {{evenOrOdd}}</h2>
    </div>
</template>

<script>
import Loading from "../../components/Loading";
import Resetor from "./components/Resetor";
import CountError from "./components/CountError";
import Decrementor from "./components/Decrementor";
import Incrementor from "./components/Incrementor";
import CountDisplay from "./components/CountDisplay";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Counter",
  mounted() {
    this.fetchCountAsync();
  },
  methods: {
    ...mapActions(["fetchCountAsync", "updateCountAsync"]),
    decrementCount() {
      // store.dispatch("updateCountAsync", { type: "DECREMENT" }); // previously
      this.updateCountAsync({ type: "DECREMENT" });
    },
    incrementCount() {
      this.updateCountAsync({ type: "INCREMENT" });
    },
    resetCount() {
      this.updateCountAsync({ type: "RESET" });
    }
  },
  computed: {
    ...mapGetters(["evenOrOdd"]),
    ...mapState({
      count: state => state.count.count,
      loading: state => state.count.loading,
      error: state => state.count.error
    })
  },
  components: {
    Resetor,
    CountError,
    Decrementor,
    Incrementor,
    CountDisplay,
    Loading
  }
};
</script>

<style>
.counter {
  padding: 1rem 0;
}
</style>


