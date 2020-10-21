<template>
  <ToolBar />
  <AddNumber
    v-for="card of numberCards"
    :key="card"
    :addNumber="card.numberAdd"
    :showLine="card.showLine"
  />
  <div>
    <button @click="hide(0)">Show/Hide</button>
    <button @click="hide(1)">Show/Hide</button>
    <button @click="hide(2)">Show/Hide</button>
    <button @click="hide(3)">Show/Hide</button>
    <button @click="hide(4)">Show/Hide</button>
  </div>
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
      numberCards: [
        {
          numberAdd: 5,
          showLine: true,
        },
        {
          numberAdd: 15,
          showLine: true,
        },
        {
          numberAdd: 30,
          showLine: true,
        },
        {
          numberAdd: 50,
          showLine: true,
        },
        {
          numberAdd: 100,
          showLine: true,
        },
      ],
    };
  },
  methods: {
    hide(id) {
      this.numberCards[id].showLine = !this.numberCards[id].showLine;
    },
  },
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
