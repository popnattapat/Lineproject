<template>

  <div class="mainchat-body" style="padding: 16px;">


    <!--    <div>-->
    <!--      <input class="searchbar" placeholder="Search" v-model="search"/>-->
    <!--    </div>-->


    <div class="chat-text-customer">
      <div v-for="(chat, index) in chat_titles" :key="index" :class="{'is_admin': chat.lineId == admin_lineId}" class="chat-container">
        <div class="avatar-container">
          <img :src="chat.avatar" alt="" class="avatar">
        </div>
        <div class="chat-triangle"></div>
        <div class="chat-content">
          <div class="text-container">
            <div class="admin_name">pop</div>
            <div class="ctc-text">{{ chat.data }}</div>
          </div>
          <div class="ctc-time">{{ chat.time }}</div>
        </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "test",
  data() {
    return {
      search: '',
      admin_lineId: 'aa',
      chat_titles: [
        {
          avatar: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          name: 'chat-name',
          data: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          time: '10.00',
          lineId: 'sdjlkjsaldfjsdf',
        },
        {
          avatar: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          name: 'chat-name',
          data: 'Hello world',
          time: '10.00',
          lineId: 'dfaa',
        },
        {
          avatar: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          name: 'chat-name',
          data: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/previewhttps://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          time: '10.00',
          lineId: 'sdjlkjsaldfjsdf',
        },
        {
          avatar: 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          name: 'chat-name',
          data: 'Hello world',
          time: '10.00',
          lineId: 'aa',
        },
      ],
      chat_data: [],
      filteredChat: [],
    }
  },
  mounted() {
    this.chat_data = [
      {
        'lineId': 'aksdlfjalsdkjfklasjdfklad',
        'avatar': 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
        'display_name': 'Pop',
        'message_type': 'text',
        'data': 'Hello world',
        'time': '14:45',
      },
      // {
      //   'lineId': 'aksdlfjalsdkjfklasjdfklad',
      //   'avatar': 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
      //   'display_name': 'Pop',
      //   'message_type': 'text',
      //   'data': 'Hello world',
      //   'time': '14:45',
      // },
      // {
      //   'lineId': 'aksdlfjalsdkjfklasjdfklad',
      //   'avatar': 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
      //   'display_name': 'Pop',
      //   'message_type': 'text',
      //   'data': 'Hello world',
      //   'time': '14:45',
      // }
    ]
  },
  computed: {
    filteredChat () {
      return this.chat_titles.filter((chat, index) => chat.data.includes(this.search))
    }
  }
}
</script>

<style lang="scss" scoped>

.mainchat-body {
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 60px - 53.5px - 80px - 38px);
  border-width: 0 0 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  overflow-y: scroll;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 18px;
}

.chat-text-customer {
  background-color: white;
  display: block;
  width: 100%;
  margin: 0 0 10px 0;
}


.chat-content {
  display: flex;
  max-width: 75%;
}

.ctc-text {
  padding: 8px 12px;
  border-radius: 16px;
  background-color: #f2f3f5;

}

.ctc-time {
  padding-left: 6px;
  font-size: 11.2px;
  color: rgb(134, 142, 150);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}

.avatar-container {
  margin-right: 10px;
}

.chat-container {
  display: flex;
  margin-bottom: 10px;
}

.ctc-text {
  margin-left: -2px;
}

.is_admin {

  .avatar-container {
    display: none;
  }

  .chat-content {
    flex-direction: row-reverse;
  }

  .ctc-time {
    padding-right: 6px;
  }

  .ctc-text {
    background-color: #d1dcf5;
    margin-right: -2px;
  }

  .chat-triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 11px 11px 0 0;
    border-color: #d1dcf5 transparent transparent transparent;
    margin-top: 33px;
  }
}

.chat-container.is_admin {
  flex-direction: row-reverse;
}

.admin_name {
  text-align: right;
  width: 100%;
  margin-bottom: 5px;
  color: #888888;
}

.chat-container:not(.is_admin) {
  .admin_name {
    display: none;
  }
}

.chat-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 11px 11px 0;
  border-color: transparent #f2f3f5 transparent transparent;
  margin-top: 15px;
}

.searchbar {
  height: 50px;
  width: 100%;
  margin-bottom: 50px;
}
</style>
