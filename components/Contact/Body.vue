<template>
  <div>
    <div>
      <p class="contactlist">Contact List</p>
      <p class="p">Find a list of all the users who have contacted you. You can manage details of those users here to help promote continued communication.</p>
    </div>
    <div class="alert">
      <div class="alertbox">
        <div class="alertbox_t1">
          <i class="icon icon-c-warning" style="font-size: 18px;"></i>
          <p style="margin-left: 2px">Important</p>
        </div>
        <div class="alertbox_t2">
          <p>The " Type " coloumn shows contacts who haven't added your account as a friend yet as"chat visitors". You can only reply to these visitors within 7 days of
            their last message. </p>
          <p>If you want to continue messaging them, we suggest asking them to friend your account.</p>
        </div>
      </div>
    </div>
    <div style="display:flex">
      <div>
        <div @click="changeAccountType('user')" class="linkbtn" :class="{'is-active': currentList === 'user' }" style="margin-left:0;">Users</div>
      </div>
      <div>
        <div @click="changeAccountType('group')" class="linkbtn" :class="{'is-active': currentList === 'group' }">Groups</div>
      </div>
      <div style="flex:1">
      </div>

      <div style="display: flex; flex-direction: row-reverse">
        <div class="clear" @click="search = ''"> Clear</div>
        <input id=searchbar type="search" placeholder="Search ..." v-model="search">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  data() {
    return {
      search: '',
      currentList: 'user',
    }
  },
  methods: {
    changeAccountType(type) {
      this.$store.commit('contacts/changeActiveList', type);
      this.currentList = type;
    },
  },
  watch: {
    search(value) {
      this.$store.commit('contacts/setFilteredContact', this.$store.state.contacts.contact_lists[this.$store.state.contacts.active_list].filter(contact => {
        return contact[(this.$store.state.contacts.active_list === 'user') ? 'lineName' : 'name'].toLowerCase().includes(value.toLowerCase())
      }));
    },
  },
}
</script>

<style lang="scss" scoped>

.contactlist {
  font-size: 30px;
  margin-bottom: 10px;
  color: #353A40;
}

.p {
  font-size: 15px;
  padding-bottom: 18px;
  color: #353A40;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgb(222, 226, 230);
}

.alert {
  box-sizing: border-box;
  width: 960px;
  height: 142px;
  padding: 0 0 16px 0;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgb(222, 226, 230);
}

.alertbox {
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  background-color: #EDEEF0;
  margin-top: 16px;
  width: 960px;
  height: 122px;
  padding: 12px 20px;
}

.alertbox_t1 {
  font-size: 18.75px;
  color: #666F86;
  margin-bottom: 8px;
  display: flex
}

.alertbox_t2 {
  font-size: 15px;
  color: #666F86;
  line-height: 22px;
}

.icon {
  font-size: 18px;
  padding-top: 1px
}

#searchbar {
  width: 150px;
  box-sizing: border-box;
  margin: 15px 0 15px 0;
}

.clear {
  cursor: pointer;
  box-sizing: border-box;
  width: 60px;
  height: 36px;
  background-color: #CFD4DA;
  border-radius: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 15px 0 15px 10px;
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

.linkbtn {
  cursor: pointer;
  width: 60px;
  height: 36px;
  border-style: solid;
  border-color: rgb(207, 212, 218);
  border-radius: 5px;
  background: transparent;
  border-width: 1px;
  color: black;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 13px;
  margin: 15px 0 15px 10px;

  &.is-active {
    background-color: #EDEEF0;
  }
}

.linkbtn:hover {
  background-color: #EDEEF0;
}
</style>
