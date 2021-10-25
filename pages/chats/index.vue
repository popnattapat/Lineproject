<template>
  <div style="display: flex; width: 100%;">
    <div>
      <ChatSearchArea/>
      <ChatList/>
    </div>

    <div style="width: 100%;">
      <ChatDisplay v-if="($store.state.chats.chat_messages)"/>
      <ChatEmptyLoading v-if="$store.state.chats.chat_loading"/>
      <ChatEmpty v-else />
    </div>
  </div>

</template>

<script>
</script>

<style scoped>


@media (min-width: 360px) {
  .col-side {
    /*position:fixed;*/
    width: 360px;
  }

}
</style>
