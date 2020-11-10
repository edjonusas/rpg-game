<template>
  <div class="container" :style="box">
    <button @click="radius('-')">prev</button>
    <div class="box" v-bind:style="{ borderRadius: deg[id] + 'px' }"></div>
    <button @click="radius('+')">next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deg: [5, 20, 40, 80, 100, 120, 140, 160],
      id: 0,
    };
  },
  methods: {
    radius(action) {
      if (action === "+") {
        if (this.id < this.deg.length - 1) {
          this.id++;
        }
      }
      if (action === "-") {
        if (this.id > 0) {
          this.id--;
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}
.box {
  margin: 20px;
  background-color: black;
  width: 300px;
  height: 300px;
}
button {
  height: 40px;
}
</style>