<template>
  <div class="chatprofile">
    <div v-for="(chat, index) in chat_titles" :key="index">
      <div class="chatbox2-image"><img :src="$store.state.chats.active_room.avatar" alt="" class="avatar"></div>
      <div>
        <div style="display:flex; justify-content: center; margin-top: 30px">
        <p class="chatprofile-name">{{ $store.state.chats.active_room.displayName }}</p>
<!--          <div style="display:flex;align-items: center">-->
<!--            <i class="icon icon-f-comment" style="color: #ADB5BD; font-size: 20px; opacity: 40%"></i>-->
<!--          </div>-->
        </div>
<!--          <p class="chatprofile-addtags"> + Add tags</p>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHistory",
  data() {
    return {
      chat_titles: [
        {
          avatar: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          name: 'chat-name',
        },
      ]
    }
  }
}

</script>

<style scoped>

.chatprofile {
  display: block;
  width: 360px;
  height: 370px;
  background-color: white;
  border-width: 0 1px 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  text-align: center;
  align-items: center;
  padding: 48px 16px;
  box-sizing: border-box;
}

.chatbox2-image {
  align-content: center;
}

.chatprofile-name {
  font-size: 22.5px;
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.chatprofile-addtags {
  font-size: 15px;
  color: #00B900;
  line-height: 2;
  margin-top: 3px;
}
.avatar {
  width: 192px;
  height: 192px;
  align-content: center;
  border-radius: 192px;
}

.image05 {
  width: 16.88px;
  height: 17px;
  align-content: center;
  margin: 5px 0 0 5px;
}

</style>

<!--<template>-->
<!--  <div> test-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->
