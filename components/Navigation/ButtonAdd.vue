<template>
  <ul>
    <nuxt-link :to="url">
      <i :class="icon"></i>
    </nuxt-link>
  </ul>
</template>
<script>
export default {
  name: 'ButtonAdd',
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


  .icon {
    color: #00B900;
    font-size: 23px;
    margin-right: 25px;
      .dark & {
        color: #FFFFFF;
      }
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

li {
  list-style-type: none;
}

</style>
