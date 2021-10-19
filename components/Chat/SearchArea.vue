<template>
  <div class="searcharea">
    <div style="display:flex">
      <div class="drawer-toggle">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div style="text-align: left; margin: 10px 0px 10px 0; cursor: pointer; color:#353A40 ">
        All
      </div>
      <div class="spacer"></div>
      <div>
        <div>
          <input id=searchbar type="search" style="width:150px" placeholder="Search ...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// export default {
//   props: {
//     show: {
//       type: Boolean,
//       default: false
//     }
//   }
// };

</script>


<style lang="scss">
.searcharea {
  display: block;
  box-sizing: border-box;
  width: 360px;
  height: 53.5px;
  background-color: white;
  border-width: 0 0 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  padding: 8px;
  margin: 0 0 0 0;
}

#searchbar {
  padding: 5px 0 5px 7px;
  border-color: rgb(207, 212, 218);
  border-style: solid;
  border-width: 1px 1px;
  text-align: left;
  align-content: center;
  justify-content: center;
  font-size: 15px;
  color: rgb(73, 80, 87);
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: row-reverse;
  /*outline: none*/
}

.search:active {
}

#searchbar:focus {
  outline: none !important;
}

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

.spacer{
  flex:1;
}



</style>
