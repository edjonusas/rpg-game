<template>
  <h1>Shop</h1>
  <span>Player points: {{ points }}</span>
  <button @click="toGame">To Game</button>
  <h3>Buy Now</h3>
  <div class="container">
    <div>
      <button @click="upgradeClick(3, 100)" v-if="points >= 100">
        Cost 100 points
      </button>
      <button v-if="points < 100" disabled>Cost 100 points</button>
      <span>add 3 points on click</span>
    </div>
    <div>
      <button @click="upgradeClick(10, 500)" v-if="points >= 500">
        Cost 500 points
      </button>
      <button v-if="points < 500" disabled>Cost 500 points</button>
      <span>add 10 points on click</span>
    </div>
    <div>
      <button @click="upgradeClick(50, 1500)" v-if="points >= 1500">
        Cost 1500 points
      </button>
      <button v-if="points < 1500" disabled>Cost 1500 points</button>
      <span>add 50 points on click</span>
    </div>
    <div>
      <button @click="addclicker(1, 2000)" v-if="points >= 2000">
        Cost 2000 points
      </button>
      <button v-if="points < 2000" disabled>Cost 2000 points</button>
      <span>add 1 point every second</span>
    </div>
    <div>
      <button @click="changeCookie(500)" v-if="points >= 500">
        Cost 500 points
      </button>
      <button v-if="points < 500" disabled>Cost 500 points</button>
      <span>Change Cookie style</span>
    </div>
  </div>
</template>

<script>
// ADD load game (localstorage) to START GAME MENU WINDOW, also think of how and when to save game progress

// ADD One more room for time chalange - max clicks per 20 sec. Add high scores table to it

// High scores table should have user name, date, time, score
export default {
  name: "Shop",
  props: {
    points: Number,
  },
  data() {
    return {};
  },
  methods: {
    toGame() {
      this.$emit("game", 2);
    },
    upgradeClick(bonus, points) {
      this.$emit("click-value", { bonus: bonus, points: points });
    },
    addclicker(bonus, points) {
      this.$emit("clicker", { bonus: bonus, points: points });
    },
    changeCookie(points) {
      this.$emit("change-cookie", { points: points });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.container div {
  margin: 20px 0;
}

span {
  margin: 0 20px;
}
</style>