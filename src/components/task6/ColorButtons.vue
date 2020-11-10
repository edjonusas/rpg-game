<template>
  <div class="container" :style="boxColor">
    <h2>{{ text }}</h2>
    <button
      v-for="(color, index) of colors"
      @click="change(color)"
      :key="index"
    >
      {{ color }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    text: String,
  },
  data() {
    return {
      boxColor: {
        backgroundColor: "#dac4f5",
      },
    };
  },
  methods: {
    change(color) {
      this.boxColor.backgroundColor = color;
      console.log(color);
      this.$emit("bg-color", color);
    },
  },
};
</script>

<style>
.container {
  padding: 40px 0;
}
</style>