<template>
  <div class="beforeloading">
    <div style="text-align: center">
      <div style="margin: -40px 10px 0 0">
        <i class="icon icon-f-comment" style="color: #ADB5BD; font-size: 150px; opacity: 40%"></i>
      </div>
      <div style="margin: 20px 0 0 0">
        <p style="color: #ADB5BD">Click a chat to start talking!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.beforeloading {
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
    border-width: 0 0 0 1px;
    border-color: rgba(255, 255, 255, 0.1);
  }
}

</style>
