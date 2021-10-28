<template>
  <div class="emptyloading">
    <div style="text-align: center">
      <div style="margin-top: -90px; margin-left: -50px">
        <loader></loader>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.emptyloading{
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  .dark & {
    background-color: #282828;
    border-width: 0
  }
}
</style>
