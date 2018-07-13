<template>
  <button @click="incrementCount">increment (+)</button>
</template>

<script>
export default {
  name: "Decrementor",
  methods: {
    incrementCount() {
      this.$emit("increment-count");
    }
  }
};
</script>

