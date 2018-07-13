<template>
  <div id="app">
     <!-- {{messages}} -->
     <MessageList :messages="messages"/>
  </div>
</template>

<script>
import MessageList from "./components/MessageList";
export default {
  name: "App",
  data: () => ({
    messages: ["Same old story...", "Where are we going with this, again?"]
  }),
  components: {
    MessageList
  }
};
</script>

