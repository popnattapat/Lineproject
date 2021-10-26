<template>
  <div>
    <div class="sidenav-backdrop">
      You can't send messages to this group chat because you aren't given an authority.
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.sidenav-backdrop {
  width: calc(100vw - 360px - 360px - 60px);
  height: 118px;
  background-color: #00000080;
  opacity: 90%;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  color: white;
  font-size: 15px;
  position: fixed;
  margin-left: 420px;
  margin-top: calc(100vh - 118px);
}
</style>
