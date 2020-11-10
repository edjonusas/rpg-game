<template>
  <div>Joke name</div>
  <input v-model="userName" type="text" placeholder="user name" />
  <button @click="getData">Get data</button>
</template>

<script>
export default {
  emits: ["emit"],
  data() {
    return {
      userName: "",
      jokeData: null,
    };
  },
  computed: {},
  methods: {
    async getData() {
      // GET request using fetch with async/await
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      data.userName = this.userName;
      this.jokeData = data;
      this.$emit("emit", this.jokeData);
    },
  },
};
</script>

<style>
</style>