<template>
  <div class="chatnote">
        <div class="chatnote-1">
            <div class="note">Notes</div>
            <div>
              <NavigationButtonAdd url="/test" icon="icon icon-e-add" class="plus"></NavigationButtonAdd>
            </div>
        </div>
    <div class="chatnote-2">
      <div style="padding: 120px 48px 0 48px">No notes found.</div>
      <div style="padding: 7px 0 0 0">Click "+" in the top right to create one.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.chatnote {
  box-sizing: border-box;
  width: 360px;
  height: calc(100vh - 60px - 370px);
  background-color: white;
  border-width: 0 1px 1px 0;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  margin: 0 0 0 0;
  padding: 16px 0 0 16px;
  justify-content: space-between;
  overflow-y: scroll;
  .dark & {
    background-color: #282828;
    border-color: #282828;
  }
}

.note {
  box-sizing: border-box;
  text-align: left;
  margin: 0;
  color: #353A40;
  font-size: 17px;
  .dark & {
    color: #FFFFFF;
  }
}

.chatnote-1 {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
}

.chatnote-2 {
  display: block;
  justify-content: center;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 15px;
  color: #ADB5AD;
}

</style>
