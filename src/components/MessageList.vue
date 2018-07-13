<template>
    <ul>
        <Message v-for="(message, index) in messages" :key="index"  :message="message"/>
    </ul>
</template>

<script>
import Message from "./Message";
export default {
  name: "MessageList",
  props: ["messages"],
  components: {
    Message
  }
};
</script>

