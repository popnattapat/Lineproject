<template>
  <ul class="nav-menu-button">
    <nuxt-link :to="url">
      <i :class="icon"></i>
    </nuxt-link>
  </ul>
</template>
<script>
export default {
  name: 'Child',
  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>


.left-bar {
  .icon {
    color: #666f8640;
    font-size: 28px;
    text-align: center;
  }

  .icon:hover{
    color: #aaaaaa;
  }

 .nuxt-link-active{
   .icon {
     color: #888888;
   }
   .icon:hover{
     color: #aaaaaa;
   }
 }
}

li {
  list-style-type: none;
}

.nav-menu-button {
  display: flex;
  width: 60px;
  height: 60px;
  align-content: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  vertical-align: middle;
  margin-bottom: 5px;
  padding-top: 10px;
  text-align: center;
}

</style>
