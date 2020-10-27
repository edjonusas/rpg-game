<template>
  <h1>Cookie clicker</h1>
  <h2>Your name : {{ name }}</h2>
  <div class="container">
    <input v-model="name" type="text" placeholder="Enter Your Name" />
    <button @click="addName">Start Game</button>
  </div>
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

<style scoped>
.container {
  margin: 50px 0;
}
input {
  outline: none;
  border: none;
  border-radius: 4px;
  background: #f1f1f1;
  font-weight: 700;
  padding: 10px 15px;
  margin-right: 10px;
}
</style>