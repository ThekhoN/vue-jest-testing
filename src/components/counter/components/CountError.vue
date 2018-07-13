<template>
  <h2 class="error">{{error}}</h2>
</template>

<script>
export default {
  name: "CountError",
  props: {
    error: {
      type: String,
      default: "Error in Service..."
    }
  }
};
</script>

