<template>
  <button @click="resetCount">RESET</button>
</template>

<script>
export default {
  name: "Resetor",
  methods: {
    resetCount() {
      this.$emit("reset-count");
    }
  }
};
</script>

