<!--<template>-->
<!--  <div class="about-page">-->
<!--    <h1>Setting Page</h1>-->
<!--    </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.about-page {-->
<!--  text-align: center;-->
<!--  margin-left: 30px-->
<!--}-->
<!--</style>-->
<template>
  <div>
  <button class="ui button toggle" @click="toggle">OFF</button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
}

}
</script>



<style scoped>

</style>
