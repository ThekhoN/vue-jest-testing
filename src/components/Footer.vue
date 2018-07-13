<template>
  <footer class="footer">
     Date: {{date}}
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  computed: mapState({
    date: state => state.ui.date
  })
};
</script>

<style>
.footer {
  /* position: absolute; */
  width: 100%;
  background: slategrey;
  color: white;
  padding: 0.3rem 0;
  bottom: 0;
}
</style>


