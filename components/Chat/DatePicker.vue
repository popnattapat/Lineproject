<template>
  <div style="display: flex">
    <date-picker
      v-model="time"
      type="date"
      placeholder="Select datetime range"
      range
      :show-time-panel="showTimeRangePanel"
      :minute-step="10"
      format="D MMMM YYYY"
      :disabled-date="notAfterToday"
      value='timestamp'
      :shortcuts="shortcuts"
      :default-value="new Date()"
      value-type="timestamp"
      @close="handleRangeClose">
<!--      <template v-slot:footer>-->
<!--        <button class="mx-btn mx-btn-text" @click="toggleTimeRangePanel">-->
<!--          {{ showTimeRangePanel ? 'select date' : 'select time' }}-->
<!--        </button>-->
<!--      </template>-->
    </date-picker>
    <div class="button" @click="$store.dispatch('chats/fetchChatMessageSearch')">
      <!--    <div class="button" @click="setAdvanceSearch()">-->
      <div>
        <NavigationJustIcon icon="icon icon-zoom"></NavigationJustIcon>
      </div>
      <div style="margin-left: 5px"> Search</div>
    </div>
  </div>


</template>


<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {DatePicker},
  data() {
    return {
      // momentFormat: {
      //   ISO: (value2) => {
      //     return value2 ? this.$moment(value2).format() : ''
      //   }
      // },
      showTimePanel: false,
      showTimeRangePanel: false,
      shortcuts: [
        {
          text: '1 day ago',
          onClick() {
            const start = new Date();
            const end = new Date();
            end.setTime(end.getTime() - 24 * 3600 * 1000);
            const date = [end, start];
            return date;
          },
        },
        {
          text: '3 days ago',
          onClick() {
            const start = new Date();
            const end = new Date();
            end.setTime(end.getTime() - 3 * 24 * 3600 * 1000);
            const date = [end, start];
            return date;
          },
        },
        {
          text: '1 week ago',
          onClick() {
            const start = new Date();
            const end = new Date();
            end.setTime(end.getTime() - 7 * 24 * 3600 * 1000);
            const date = [end, start];
            return date;
          },
        },
        {
          text: '1 month ago',
          onClick(here) {
            const start = new Date();
            const end = new Date();
            end.setTime(end.getTime() - 31 * 24 * 3600 * 1000);
            const date = [end, start];
            return date;
          },
        }
      ],
    };
  },

  computed: {
    time: {
      get: function () {
        return this.$store.state.chats.time;
      },
      set: function (time) {
        this.$store.commit('chats/setSearchTime', time);
      },
    }
  },

  methods: {
    // toggleTimePanel() {
    //   this.showTimePanel = !this.showTimePanel;
    // },
    // toggleTimeRangePanel() {
    //   this.showTimeRangePanel = !this.showTimeRangePanel;
    // },
    handleOpenChange() {
      this.showTimePanel = false;
    },
    handleRangeClose() {
      this.showTimeRangePanel = false;
    },
    notAfterToday(date) {
      return date > new Date(new Date().setHours(0, 0, 0, 0));
    },
    // setAdvanceSearch() {
    // this.$store.dispatch('chats/setAdvanceSearch',)
    // console.log('value2', this.value2);
    // }
  },
  watch: {}
  // watch: {
  //   message(newValue, oldValue) {
  //     if (this.message.length === (this.message.replace(/[^\n]/g, '').length)) {
  //       this.message = '';
  //     }
  //   }
  // },
}
</script>

<style lang="scss">
.button {
  display: flex;
  box-sizing: border-box;
  border-color: rgb(204, 204, 204);
  border-radius: 10%;
  border-width: 1px;
  border-style: solid;
  padding: 4px 8px;
  margin: 0 0 0 20px;
  cursor: pointer;
  color: rgb(102, 111, 134);
  font-size: 13px;
  justify-content: center;
  align-items: center;

  .dark & {
    background-color: #FFFFFF;
  }
}

.button:hover {
  color: #666f86;
  background-color: rgba(102, 111, 134, 0.1);

  .dark & {
    background-color: #CFD4DA;
  }
}

</style>
