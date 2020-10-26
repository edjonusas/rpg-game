<template>
  <h1>{{ name }}</h1>
  <h2>{{ counter }}</h2>
  <button @click="add()">Add one</button>
</template>

<script>
export default {
  name: "test",

  props: {
    name: String,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
  },
};
</script>

<style scoped>
</style>