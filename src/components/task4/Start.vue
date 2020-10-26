<template>
  <h2>Your name : {{ name }}</h2>
  <input v-model="name" type="text" placeholder="Enter Your Name" />
  <button @click="addName">Start Game</button>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addName() {
      this.$emit("name", this.name);
    },
  },
};
</script>

<style>
</style>