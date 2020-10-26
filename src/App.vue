<template>
  <Start @name="addName" v-if="viewTrigger === 1" />
  <Game
    @shop="shop"
    @add="add"
    :name="name"
    :points="points"
    v-if="viewTrigger === 2"
  />
  <Shop
    @game="game"
    @click-value="upgradeClick"
    :points="points"
    v-if="viewTrigger === 3"
  />
</template>

<script>
import Start from "./components/task4/Start";
import Game from "./components/task4/Game";
import Shop from "./components/task4/Shop";

export default {
  name: "App",
  components: {
    Start,
    Game,
    Shop,
  },
  data() {
    return {
      name: "",
      points: 0,
      clickValue: 1,
      viewTrigger: 1,
    };
  },
  methods: {
    inputData(data) {
      this.user = data;
    },
    addName(data) {
      this.name = data;
      this.viewTrigger = 2;
    },
    shop(data) {
      this.viewTrigger = data;
    },
    game(data) {
      this.viewTrigger = data;
    },
    add() {
      this.points += this.clickValue;
    },
    upgradeClick(data) {
      this.clickValue = data.bonus;
      this.points -= data.points;
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
