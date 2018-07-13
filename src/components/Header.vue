<template>
  <div class="header">
      <h2>{{title}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: mapState({
    title: state => state.ui.title
  })
};
</script>

<style>
.header {
  background: lightcyan;
  padding: 0.3rem;
}
</style>


