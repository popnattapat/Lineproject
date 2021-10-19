<template>
  <div>
      <p v-model="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "CurrentTime",
  data: () => ({
    time: '',
  }),
  methods: {
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
  },
  mounted: function () {
    this.time = this.printTime();
  },
};
</script>
