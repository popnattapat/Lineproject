<template>
  <div>
    <!--    <date-picker v-model="time1" valueType="format"></date-picker>-->
    <!--    <date-picker v-model="time2" type="datetime"></date-picker>-->
    <!--    <date-picker v-model="time3" range></date-picker>-->
    <!--    <date-picker v-model="value2" type="datetime" range placeholder="Select datetime - Select datetime"></date-picker>-->
    <date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select datetime range"
      range
      :show-time-panel="showTimeRangePanel"
      :minute-step="10"
      format="DD-MM-YYYY HH:mm"
      :disabled-date="notAfterToday"
      @close="handleRangeClose">
      <template v-slot:footer>
        <button class="mx-btn mx-btn-text" @click="toggleTimeRangePanel">
          {{ showTimeRangePanel ? 'select date' : 'select time' }}
        </button>
      </template>
    </date-picker>
  </div>
</template>


<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {DatePicker},
  data() {
    return {
      value2: [],
      showTimePanel: false,
      showTimeRangePanel: false,
    };
  },
  methods: {
    // toggleTimePanel() {
    //   this.showTimePanel = !this.showTimePanel;
    // },
    toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    handleOpenChange() {
      this.showTimePanel = false;
    },
    handleRangeClose() {
      this.showTimeRangePanel = false;
    },
    notAfterToday(date) {
      return date > new Date(new Date().setHours(0, 0, 0, 0));
    },
  },
};
</script>

<style></style>

