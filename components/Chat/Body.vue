<template>
  <div class="chat-body">
    <Loader v-if="$store.state.chats.chat_loading"></Loader>
    <transition name="fade">
      <div class="chat-text-customer" style="overflow-y: scroll; padding: 16px 16px 0 16px;">
<!--      <div class="chat-text-customer" style="overflow-y: scroll; padding: 16px 16px 0 16px;  width: calc(100vw - 360px - 360px - 60px);">-->
        <div v-if="!$store.state.chats.chat_loading" v-for="(chat, index) in $store.state.chats.chat_messages" :key="index"
             :class="{'is_admin': chat.lineId == admin_lineId,'no-avatar':  chat.user_avatar == ($store.state.chats.chat_messages[index+1]? $store.state.chats.chat_messages[index+1].user_avatar: null) }"
             class="chat-container">
          <div class="avatar-container">
            <img :src="chat.user_avatar" alt="" class="avatar">
          </div>
          <div class="chat-triangle"></div>
          <div class="chat-content">
            <div class="text-container" style="display: flex; flex-direction: column;">
              <div class="admin_name">{{ chat.user }}</div>
              <div class="display-name">{{ chat.user_displayName }}</div>
              <div style="display: flex;" class="chat-text">
                <div class="ctc-text" style="white-space: pre-line; word-wrap: break-word; max-width: calc((100vw - 360px - 360px - 60px - 36px - 16px - 16px) * 75 / 100)">{{ chat.text }}</div>
                <div class="ctc-time">{{ $moment(chat.time).format('H:mm') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: "test",
  data() {
    return {
      admin_lineId: 'aa',
      chat_titles: [],
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
</style>
