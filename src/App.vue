<template>
  <ToolBar />
  <AddNumber v-for="number of numbersArr" :key="number" :addNumber="number" />
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import AddNumber from "./components/task2/AddNumber";

export default {
  name: "App",
  components: {
    ToolBar,
    AddNumber,
  },
  data() {
    return {
      numbersArr: [5, 15, 30, 60],
    };
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
