<template>
  <div>
    <table style="width:100%" cellspacing="0">
      <thead>
      <tr style="text-align: left">
        <th class="tableheader" style="width: 10%">Name</th>
        <th class="tableheader" style="width: 15%">Active status</th>
        <th class="tableheader" style="width: 30%">LineID</th>
        <th class="tableheader" style="width: 25%">Last messaged</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(chat, index) in $store.state.chats.chat_rooms" :key="index" @click="$store.commit('chats/fetchUser', {'id': chat.lineId})">
        <td class="tablebody">
          <div style="color: #353A40; display: flex">
            <img :src="chat.avatar" alt="" class="avatar">
            <div style="margin: 10px 0 0 10px">{{ chat.lineName }}</div>
          </div>
        </td>
        <td class="tablebody">{{ chat.is_active }}</td>
        <td class="tablebody">{{ $moment(chat.created_at).format('D/M/Y') }}</td>
        <td class="tablebody">
          <div style="display: flex; justify-content: space-between">
            <div style="display: flex;justify-content: center; align-items: center">{{ $moment(chat.updated_at).format('D/M/Y') }}</div>
            <div class="chatlink">
              <nuxt-link to="/"><i class="icon icon-comment"></i>Chat</nuxt-link>

            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>

.icon {
  font-size: 18px;
  padding-top: 1px
}


.tableheader {
  box-sizing: border-box;
  height: 47px;
  padding: 12px;
  background-color: #edeff0;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  font-size: 16px;
}

.tablebody {
  box-sizing: border-box;
  height: 61px;
  padding: 12px;
  color: #666F86;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: rgb(222, 226, 230)
}

.avatar {
  width: 36px;
  height: 36px;
  align-content: center;
  border-radius: 36px;
}

.chatlink {
  width: 62px;
  height: 29px;
  border-style: solid;
  border-color: #00B900;
  background: transparent;
  border-width: 1px;
  color: #00B900;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 13px;
}

.chatlink a {
  text-decoration: none;
  color: inherit;
}

.icon {
  font-size: 13px;
  margin-right: 5px;
  text-decoration: none;
}


</style>
