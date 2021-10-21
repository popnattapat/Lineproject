<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
<!--        <transition name="slide-side">-->
    <div v-if="show" class="dropdown">
      <div class="nav-list" @click="$emit('close')">
        <div class="item"  @click="changeChatMessageType('all')" :class="{'is-active': currentType !== 'user' && currentType !==  'group' }">
          <i class=" icon icon-f-comment"></i>
          <div class="dropdown_item">All</div>
        </div>
        <div class="seperator"></div>
        <div class="item"  @click="changeChatMessageType('user')" :class="{'is-active': currentType === 'user' }">
          <i class=" icon icon-user"></i>
          <div class="dropdown_item">Users</div>
        </div>
        <div class="item" @click="changeChatMessageType('group')" :class="{'is-active': currentType === 'group' }">
          <i class=" icon icon-multiple-19"></i>
          <div class="dropdown_item">Groups</div>
        </div>
      </div>
    </div>
<!--        </transition>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentType: 'user'
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
  /*background-color: rgba(0, 0, 0, 0.7);*/
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
  padding-top: 10px
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
  }
}

.item:hover {
  background-color: #edeff0;
}


.icon {
  color: #aaaaaa;
  opacity: 50%;
  font-size: 18px;
  margin-right: 10px;
}

.seperator {
  display: block;
  border-width: 1px 0 0 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  margin: 8px 0;
}

.dropdown_item {
  font-size: 15px;
}


.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}

.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;

}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}

</style>
