<template>
  <div class="mainchat-header">
    <div class="mch-l" style="flex:1">
      <div style="display:flex">
        <div class="mch-l-avatar">
          <img :src="$store.state.chats.active_room.avatar" alt="" class="avatar">
        </div>
        <div class="mch-l-name">{{ $store.state.chats.active_room.displayName }}</div>
        <div class="mch-l-muted">
          <NavigationJustIcon icon="icon icon-volume-off"></NavigationJustIcon>
        </div>

      </div>
    </div>
    <div class="mch-r" style="flex:1;flex-direction: row-reverse;">
      <div class="button">

        <div>
          <NavigationJustIcon icon="icon icon-zoom"></NavigationJustIcon>
        </div>
        <div style="margin-left: 5px"> Search</div>
      </div>

      <div style="margin-right: 15px">
        <ChatDatePicker/>
      </div>

<!--      <ChatDatePicker/>-->

<!--      <div class="button">-->
<!--        <div style="padding-top:1px">-->
<!--          <NavigationJustIcon icon="icon icon-s-check"></NavigationJustIcon>-->
<!--        </div>-->
<!--        <div style="margin-left: 5px">Resolve</div>-->
<!--      </div>-->

<!--      <div class="button">-->
<!--        <div>-->
<!--          <NavigationJustIcon icon="icon icon-b-comment"></NavigationJustIcon>-->
<!--        </div>-->
<!--        <div style="margin-left: 7px"> Follow up</div>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>

.mainchat-header {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 53.5px;
  border-width: 0 0 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  align-content: center;
  align-items: center;
}

.mch-l {
  text-align: left;
  display: flex;
  height: 35.5px;
}

.mch-l-avatar {
  margin: 0 0 0 10px;
}

.mch-l-name {
  padding: 0 0 0 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.mch-l-muted {
  color: rgb(102, 111, 134);
  padding: 10px 0 0 14px;

}

.mch-r {
  display: flex;
}

.button {
  display: flex;
  box-sizing: border-box;
  border-color: rgb(204, 204, 204);
  border-radius: 10%;
  border-width: 1px;
  border-style: solid;
  padding: 4px 8px;
  margin: 0 10px 0 0;
  cursor: pointer;
  color: rgb(102, 111, 134);
  font-size: 13px;
  justify-content: center;
  align-items: center;
}

.button:hover {
  color: #666f86;
  background-color: rgba(102, 111, 134, 0.1)
}

.avatar {
  width: 36px;
  height: 36px;
  align-content: center;
  border-radius: 36px;
}

</style>
