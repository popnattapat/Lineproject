<template>
  <div class="mainchat-textarea">
    <div>
      <textarea class="text-input" placeholder="Enter your message here" v-model="message"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  data() {
    return {
      message: null,
    }
  },

  mounted() {
    window.addEventListener("keypress", this.keyPress);
  },

  watch: {
    message(newValue, oldValue) {
      if (this.message.length === (this.message.replace(/[^\n]/g, '').length)) {
        this.message = '';
      }
    }
  },

  methods: {
    sendMessage() {
      if (this.message) {
        let message_obj = {
          'lineId': 'aa',
          'user_avatar': 'https://profile.line-scdn.net/0h4BVOtthya217Nn1uPLkVEgtmaAdYRzJ_UVh0D0wxNV1ABCQ-AgIiDEswYA5CBn4-XlMhChszM1h3JRwLZWCXWXwGNVpGDy49X1ghiA/preview',
          'user_displayName': 'Pop',
          'message_type': 'text',
          'user': 'Admin Name',
          'text': this.message,
          'time': this.$moment().toISOString(),
        }
        this.message = '';
        this.$store.commit('chats/sendMessage', message_obj);
      } else {
        this.message = '';
      }
    },
    keyPress(event) {
      if (event.which === 13 && !event.shiftKey) {
        if (this.message) {
          if (this.message.length === (this.message.replace(/[^\s]/g, '').length)) {
            this.message = '';
          }else{
            this.sendMessage();
          }
        }
      }
    }
    // async sendMessage() {
    //   await this.sendMessage()
    //     .then ((response) => (this.message.reset('')
    //     ))

  }
}
</script>

<style lang="scss" scoped>
form {
  height: 80px;
  border-color: rgb(222, 226, 230);
  border-style: solid;
  border-width: 0 0 1px 0;
}

.mainchat-textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: white;
  text-align: left;
}

.text-input {
  width: 100%;
  height: 80px;
  padding: 10px 10px 0 10px;
  border: none;
  margin: 0;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;

}

.text-input:focus {
  outline: none !important;
}

.button {
  padding: 5px;
  border-radius: 10px;
  border-color: rgb(102, 111, 134);
  border-style: solid;
  color: rgb(102, 111, 134);
  cursor: pointer;
  font-size: 13px;
  border-width: 1px;
  visibility: hidden;
}

</style>
