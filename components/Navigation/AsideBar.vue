<template>

  <li class="left-bar">
    <NavigationChild url="/chats" icon="icon icon-f-comment"></NavigationChild>
    <NavigationChild url="/contact" icon="icon icon-contacts-2"></NavigationChild>
    <NavigationChild url="/messagemultipleusers" icon="icon icon-antenna"></NavigationChild>
    <NavigationChild url="/settings" icon="icon icon-gear"></NavigationChild>
    <NavigationChild url="/test" icon="icon icon-gear"></NavigationChild>
    <NavigationChild url="/test" icon="icon icon-e-add"></NavigationChild>
  </li>
</template>

<script>

export default {
  name: "AsideBar",
}
</script>

<style lang="scss" scoped>

li{
  list-style-type: none;
}

.left-bar {
  background-color: rgb(248, 249, 250);
  border-color: rgb(222, 226, 230);
  border-style: solid;
  border-width: 0 1px 1px 0;
  width: 60px;
  height: calc(100vh - 60px);
  text-align: center;
  box-sizing: border-box;

}

.nav.menu-button-opacity {
  display: flex;
  width: 60px;
  height: 60px;
  align-content: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  vertical-align: middle;
  margin-bottom: 10px;
  opacity: 0.5;
}

</style>
