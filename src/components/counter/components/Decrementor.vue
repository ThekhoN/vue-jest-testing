<template>
  <button @click="decrementCount">decrement (-)</button>
</template>

<script>
export default {
  name: "Decrementor",
  methods: {
    decrementCount() {
      this.$emit("decrement-count");
    }
  }
};
</script>

