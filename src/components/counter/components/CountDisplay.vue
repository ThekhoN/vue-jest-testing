<template>
  <h2>{{count}}</h2>
</template>

<script>
export default {
  name: "CountDisplay",
  props: {
    count: {
      default: 0,
      type: Number
    }
  }
};
</script>

