<template>
  <div>
    <TypeThreeBar @toggle="$emit('sidenavToggle')"/>
  </div>
</template>

<script>
import TypeThreeBar from "./TypeThreeBar";

export default {
  components: {TypeThreeBar},
}
</script>

<style scoped>
.bar {
  width: 15px;
  height: 2px;
  background-color: rgb(121, 117, 117);
  padding: 0;
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
