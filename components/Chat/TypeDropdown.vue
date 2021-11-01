<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <div v-if="show" class="dropdown">
      <div class="nav-list" @click="$emit('close')">
        <div class="item" @click="changeChatMessageType('all')" :class="{'is-active': currentType !== 'user' && currentType !==  'group' }">
          <i class=" icon icon-f-comment"></i>
          <div class="dropdown_item">All</div>
        </div>
        <div class="seperator"></div>
        <div class="item" @click="changeChatMessageType('user')" :class="{'is-active': currentType === 'user' }">
          <i class=" icon icon-user"></i>
          <div class="dropdown_item">Users</div>
        </div>
        <div class="item" @click="changeChatMessageType('group')" :class="{'is-active': currentType === 'group' }">
          <i class=" icon icon-multiple-19"></i>
          <div class="dropdown_item">Groups</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentType: 'all'
    }
  }
  ,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeChatMessageType(type) {
      this.$store.commit('chats/changeMessageType', type);
      this.currentType = type;
    }
  }
};
</script>


<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.dropdown {
  height: 128px;
  width: 160px;
  background-color: white;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  margin: 100px 0 0 68px;
  border-width: 1px;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  padding-top: 10px;

  .dark & {
    background-color: #282828;
    border-color: #606060;
  }
}


.item {
  cursor: pointer;
  padding: 4px 24px;
  width: 158px;
  height: 30px;
  display: flex;
  color: rgb(121, 117, 117);
  align-items: center;

  &.is-active {
    background-color: #edeff0;

    .dark & {
      background-color: #454545;
    }
  }
}

.item:hover {
  background-color: #edeff0;
  .dark & {
    background-color: #353535;
  }
}


.icon {
  color: #aaaaaa;
  opacity: 50%;
  font-size: 18px;
  margin-right: 10px;
  .dark & {
    color: white
  }
}

.seperator {
  display: block;
  border-width: 1px 0 0 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  margin: 8px 0;
  .dark & {
    border-color: #606060;
  }
}

.dropdown_item {
  font-size: 15px;
  .dark & {
    color: white
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>
