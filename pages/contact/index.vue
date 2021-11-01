<template>
  <div class="body" style="overflow: scroll; !important;">
    <div style="width: 960px;">
      <ContactBody/>
      <ContactList/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('contacts/fetchContact')
    // this.$store.dispatch('chats/fetchContact')
  }
}

</script>


<style lang="scss" scoped>
.body {
  padding: 48px;
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  .dark & {
    background-color: #181818;
  }
}


</style>
