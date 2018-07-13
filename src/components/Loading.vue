<template>
  <h2>{{content}}</h2>
</template>

<script>
export default {
  name: "Loading",
  props: {
    content: {
      type: String,
      default: "loading..."
    }
  }
};
</script>

