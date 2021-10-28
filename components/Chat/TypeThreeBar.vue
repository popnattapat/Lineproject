<template>
  <div role="button" style="display: flex">
    <div class="drawer-toggle">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.bar {
  width: 15px;
  height: 2px;
  background-color: rgb(121, 117, 117);
  padding: 0;
  margin-top: 3px;
  .dark & {
  background-color: white;
}

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
