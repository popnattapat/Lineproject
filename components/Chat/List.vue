<template>
  <div class="chatlist" style="overflow-y: scroll;" id="list">
    <div v-for="(chat, index) in $store.state.chats.list_filtered" :key="index"
         @click="$store.dispatch('chats/fetchChatMessage', {'lineId': chat.lineId, 'type':chat.type, 'avatar': chat.avatar,'displayName': chat.displayName})">
      <div class="chatbox" :class="{'is-active': $store.state.chats.active_room.displayName === chat.displayName}" id="">
        <div class="chatbox2-image"><img :src="chat.avatar" alt="" class="avatar"></div>
        <div class="chatbox2-texts">
          <div class="chatbox2-texts_n">{{ chat.displayName }}</div>
          <div class="chatbox2-texts_m" style="text-overflow: ellipsis;white-space: nowrap; overflow: hidden;">{{ chat.message.text }}</div>
        </div>
        <div class="chatbox2-time">{{ $moment(chat.message.time).format('H:mm') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    if (this.$store.state.chats.is_pending){
      let contact = this.$store.state.chats.pending;
      console.log(contact);
      this.$store.dispatch('chats/fetchChatMessage', {'lineId': contact.contact.lineId, 'type':contact.type, 'avatar': contact.contact.avatar,'displayName': contact.contact.lineName || contact.contact.name})
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('chats/fetchChatList');
  },
  function: {},
}

</script>

<style lang="scss" scoped>
.avatar {
  width: 48px;
  height: 48px;
  align-content: center;
  border-radius: 50px;

}

.chatbox {
  width: 360px;
  height: 90px;
  background-color: white;
  border-width: 0 0 0 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  padding: 12px 20px 12px 20px;
  display: flex;
  box-sizing: border-box;
  cursor: pointer;

  &.is-active {
    background-color: #edeff0;
  }
}


.chatbox:hover {
  background-color: rgb(248, 249, 250);
}

.chatbox:active {
  background-color: #edeff0;
}

.chatbox2-image {
  width: 130px;
  height: 63px;
  background-color: transparent;
  border-width: 1px 1px;
  border-color: transparent;
  border-style: solid;
  display: flex;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
}

.chatbox2-texts {
  width: 130px;
  height: 60px;
  flex: 5;
  text-align: left;
  box-sizing: border-box;
}

.chatbox2-time {
  width: 30px;
  height: 60px;
  font-size: 12px;
  color: #ADB5AD;
  text-align: left;
  margin: 0 0 0 2px;
  line-height: 20px;
}

.chatbox2-texts_n {
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-width: 1px 1px;
  border-color: transparent;
  border-style: solid;
  flex: 5;
  line-height: 40px;
  margin: 0 0 0 3px;
  padding: 0 0 0 6px;
  font-size: 14px;
}

.chatbox2-texts_m {
  width: 100%;
  height: 40px;
  flex: 5;
  line-height: 22px;
  margin: -8px 0 0 3px;
  padding: 0 0 0 7px;
  font-size: 12px;
  color: #ADB5AD;
}

.chatlist {
  display: block;
  width: 100%;
  height: calc(100vh - 60px - 53.5px);
  background-color: white;
  border-width: 0 0 0 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  text-align: center;
  align-items: center;
  padding: 0.5px 0 0 0;
  position: center;
}
</style>
