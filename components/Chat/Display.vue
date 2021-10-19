<template>
<div style="display: flex">
  <div style="display:flex; flex-direction: column;border-width: 0 1px 1px 1px ;width: calc(100vw - 360px - 360px - 60px);
  border-color: rgb(222, 226, 230);
  border-style: solid;">

    <ChatHeader/>
    <ChatBody/>
    <div class="mainchat-function"></div>
    <ChatInput/>
  </div>
  <div>
  <ChatProfile/>
  <ChatNote/>
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

.mainchat-function {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-width: 1px 0 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  background-color: rgb(248, 249, 250);
}


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


.chatnote {
  box-sizing: border-box;
  width: 360px;
  height: calc(100vh - 60px - 370px);
  background-color: white;
  border-width: 0 1px 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  margin: 0 0 0 0;
  padding: 16px 0 0 16px;
  justify-content: space-between;
  overflow-y: scroll;
}

.note {
  box-sizing: border-box;
  text-align: left;
  margin: 0;
  color: #353A40;
  font-size: 17px;
}

.chatnote-1 {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
}

.chatnote-2 {
  display: block;
  justify-content: center;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 15px;
  color: #ADB5AD;
}
</style>


<!--<template>-->
<!--  <div> test-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->
