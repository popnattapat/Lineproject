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
          <!--          <li class="nav-item" @click="$store.commit('toggleDarkMode')">-->
          <!--            <nuxt-link to="#" class="text">Darkmode Demo</nuxt-link>-->
          <!--          </li>-->
          <li class="nav-item" @click="$store.commit('toggleDarkMode')">
            <nuxt-link to="#">
              <div class="toggle">
                <i class="indicator"></i>
              </div>
            </nuxt-link>
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
  padding-top: 1px;
  display:flex;
  color: black;

  .dark & {
    color: white;
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


.toggle {
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  transition: 0.5s;
  cursor: pointer;
  background-color: #FFFFFF;
  box-shadow: inset 0 2px 60px rgba(0, 0, 0, 0.1),
  inset 0 2px 8px rgba(0, 0, 0, 0.1),
  inset 0 -4px 8px rgba(0, 0, 0, 0.05);
}

.indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: scale(0.9);
  background: linear-gradient(to bottom, #eaeaea, #f9f9f9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5),
  inset 0 4px 4px rgba(255, 255, 255, 0.2),
  inset 0 -4px 4px rgba(255, 255, 255, 0.2);
  transition: 0.5s;
}

.indicator {
  .dark & {
    left: 20px;
    background: linear-gradient(to bottom, #444, #222);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.75),
    inset 0 4px 4px rgba(255, 255, 255, 0.2),
    inset 0 -4px 4px rgba(255, 255, 255, 0.2);
  }
}

.toggle {
  .dark {
    background-color: #FFFFFF;
    box-shadow: inset 0 2px 60px rgba(0, 0, 0, 0.1),
    inset 0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 -4px 8px rgba(0, 0, 0, 0.05);
  }
}


</style>
