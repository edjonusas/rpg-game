<template>
  <Start @name="addName" v-if="viewTrigger === 1" />
  <Game
    @shop="goToPage"
    @add="add"
    :imgNumber="cookieImg"
    :name="name"
    :points="points"
    v-if="viewTrigger === 2"
  />
  <Challange
    :imgNumber="cookieImg"
    :name="name"
    @shop="goToPage"
    v-if="viewTrigger === 4"
  />
  <Shop
    @game="goToPage"
    @click-value="upgradeClick"
    @clicker="addClicker"
    @change-cookie="changeCookie"
    :points="points"
    v-if="viewTrigger === 3"
  />
</template>

<script>
import Start from "./components/task4/Start";
import Game from "./components/task4/Game";
import Challange from "./components/task4/Challange";
import Shop from "./components/task4/Shop";

export default {
  name: "App",
  components: {
    Start,
    Game,
    Challange,
    Shop,
  },
  data() {
    return {
      name: "",
      points: 0,
      clickValue: 100,
      viewTrigger: 1,
      cookieImg: 1,
    };
  },
  methods: {
    // add player name and go to game
    addName(data) {
      this.name = data;
      this.viewTrigger = 2;
    },
    // go to Shop / Game page
    goToPage(data) {
      this.viewTrigger = data;
    },
    // add points
    add() {
      this.points += this.clickValue;
    },
    // buy and update click value
    upgradeClick(data) {
      this.clickValue = data.bonus;
      this.points -= data.points;
    },
    // add point every second
    addClicker(data) {
      this.points -= data.points;
      setInterval(() => {
        this.points++;
      }, 1000);
    },
    // img number generator
    changeCookie(data) {
      this.points -= data.points;
      if (this.cookieImg < 3) {
        this.cookieImg++;
      } else {
        this.cookieImg = 1;
      }
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

button {
  margin: 0 5px;
  font-weight: 700;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: cadetblue;
  color: #fff;
}

button:disabled {
  background-color: #899595;
  color: #b6b6b6;
}
</style>
