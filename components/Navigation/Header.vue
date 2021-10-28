<template>
  <div class="header-container">
    <header class="the-header">
      <div class="logo">
        <nuxt-link to="/" class="text">LINE OFFICIAL ACCOUNT MANAGER</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/posts" class="text">Username</nuxt-link>
          </li>
          <li class="nav-item" @click="$store.commit('toggleDarkMode')">
            <nuxt-link to="#" class="text">Darkmode Demo</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>
.header-container {
  height: 60px;
}
.text {
  color:black;
  .dark & {
    color:white;
  }
}

.the-header {
  width: 100%;
  /*position: fixed;*/
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: solid 1px rgb(222, 226, 230);

  .dark & {
    background-color: #444444;
    border-color: rgba(255, 255, 255, 0.1);
  }
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;

}

.logo a {
  text-decoration: none;
  color: black;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: black;
}

.nav-item a:hover,
.nav-item a:active, {
  color: #797575;
  .dark & {
    color: white;
  }
}
.nav-item a.nuxt-link-active {
  color: black;
  .dark & {
    color: white;
  }
}

</style>
