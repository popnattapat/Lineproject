<template>
  <div class="mainchat">
    <div v-if="($store.state.chats.active_room.avatar)">
      <ChatHeader/>
      <ChatBody/>
      <div class="mainchat-function"></div>
      <ChatInput/>
<!--      All of the above is used for mock data in order to initiate template background-->
    </div>
    <div v-else style="background-color: #fafafa; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
      <p style="color: #ADB5AD">Click a chat to start talking!</p>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {}
  },

  mounted() {
  },
}

</script>

<style lang="scss" scoped>
.mainchat {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  align-items: center;
  position: center;
  border-width: 0 0 0 1px;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  //.dark & {
  //  border-color: rgba(255, 255, 255, 0.1);
  //}
}

.mainchat-function {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-width: 0 0 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  background-color: rgb(248, 249, 250);
  //.dark & {
  //  border-color: rgba(255, 255, 255, 0.1);
  //}
}

</style>

<!--<template>-->
<!--  <div> test-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->
