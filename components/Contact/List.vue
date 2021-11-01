<template>
  <div style="">
    <table style="width:100%" cellspacing="0">
      <thead>
      <tr style="text-align: left">
        <th class="tableheader" style="cursor: pointer;">
          <div>
            <div style="display: flex" @click="sortBy('name')">
              <div style="display:flex; justify-content: center; align-items: center">Name</div>
              <div style="flex:1"></div>
              <div>
                <div style="margin-top: -1px"><i class="icon icon-keyboard_arrow_up"></i></div>
                <div style="margin-top: -7px"><i class="icon icon-keyboard_arrow_down"></i></div>
              </div>
            </div>
          </div>
        </th>
        <th class="tableheader" style="width: 200px">Active status</th>
        <th class="tableheader" style="width: 200px; cursor: pointer;">
          <div>
            <div style="display: flex" @click="sortBy('created_at')">
              <div style="display:flex; justify-content: center; align-items: center">Created At</div>
              <div style="flex:1"></div>
              <div style="margin-right: 40px">
                <div style="margin-top: -1px"><i class="icon icon-keyboard_arrow_up"></i></div>
                <div style="margin-top: -7px"><i class="icon icon-keyboard_arrow_down"></i></div>
              </div>
            </div>
          </div>
        </th>
        <th class="tableheader" style="width: 220px">Last messaged</th>
      </tr>
      </thead>
      <tbody v-show="!$store.state.contacts.loading" style="overflow: auto;">
      <tr v-for="(chat, index) in $store.state.contacts.contact_lists_filtered" :key="index">
        <td class="tablebody">
          <div style="color: #353A40; display: flex">
            <img :src="chat.avatar" alt="" class="avatar">
            <div class="chatnamecolor">{{ chat.lineName || chat.name }}</div>
          </div>
        </td>
        <td class="tablebody">{{ chat.is_active }}</td>
        <td class="tablebody">{{ $moment(chat.created_at).format('D/M/Y') }}</td>
        <td class="tablebody">
          <div style="display: flex; justify-content: space-between">
            <div style="display: flex;justify-content: center; align-items: center">{{ $moment(chat.updated_at).format('D/M/Y') }}</div>
            <nuxt-link :to="{path:'/chats/'}" @click.native="setPending(chat)" style="text-decoration: none;color: inherit">
              <div class="chatlink">
                <i class="icon icon-comment"></i>
                Chat
              </div>
            </nuxt-link>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <Loader v-if="$store.state.contacts.loading" style="padding-top: 50px;"></Loader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sort: {
        name: 'desc',
        lineName: 'desc',
        created_at: 'desc',
      }
    }
  },
  methods: {
    setPending(contact) {
      this.$store.commit('chats/setPending', {contact, 'type': this.$store.state.contacts.active_list});
    },
    sortBy(orderBy) {
      switch (this.$store.state.contacts.active_list) {
        case 'user':
          if (orderBy === 'name') {
            orderBy = 'lineName'
          }
          this.$store.dispatch('contacts/fetchUser', {'orderBy': orderBy, 'order': this.sort[orderBy]});
          if (this.sort[orderBy] === 'asc') {
            this.sort[orderBy] = 'desc';
          } else {
            this.sort[orderBy] = 'asc';
          }
          break;
        case 'group':
          this.$store.dispatch('contacts/fetchGroup', {'orderBy': orderBy, 'order': this.sort[orderBy]});
          if (this.sort[orderBy] === 'asc') {
            this.sort[orderBy] = 'desc';
          } else {
            this.sort[orderBy] = 'asc';
          }
          break;
      }
    }
  },
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
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  font-size: 16px;
  .dark & {
    background-color: #383838;
    color: antiquewhite;
    font-weight: 500;
    border-color: rgba(255, 255, 255, 0.1);
  }
}
.chatnamecolor {
  color: black;
  margin: 10px 0 0 10px;
  .dark & {
    color: #ADB5AD;
  }
}

.tablebody {
  box-sizing: border-box;
  height: 61px;
  padding: 12px;
  color: #666F86;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  .dark & {
    color: #ADB5AD;
    border-color: rgba(255, 255, 255, 0.3);
  }
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
  .dark & {
    background-color: #3a3b3c;
    border-color: black;
    color: white
  }
}
.chatlink:hover {
  background-color: rgba(188, 231, 188, 0.69);
  .dark & {
    background-color: #666666;
  }
}

.icon {
  font-size: 13px;
  margin-right: 5px;
  text-decoration: none;
}


</style>
