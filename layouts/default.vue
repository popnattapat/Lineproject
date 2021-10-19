<template>
  <div :class="{'dark': $store.state.dark_mode}" style="display: flex; flex-direction: column; width: 100vw; height: 100vh; overflow: hidden;">
    <NavigationHeader/>
    <div style="display: flex;">
      <NavigationAsideBar/>
      <nuxt/>
    </div>
  </div>

</template>

<script>

export default {}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
}

</style>





