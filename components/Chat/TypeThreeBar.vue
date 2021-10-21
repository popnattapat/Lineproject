<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script>

</script>

<style scoped>
.bar {
  width: 15px;
  height: 2px;
  background-color: rgb(121, 117, 117);
  padding: 0;
  margin-top: 3px

}

.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 10px 10px 5px;
}
</style>
