<template>
  <h2>Shop</h2>
  <span>{{ points }}</span>
  <button @click="toGame">To Game</button>
  <h3>Buy Now</h3>
  <div>
    <div>
      <button @click="upgradeClick(3, 100)" v-if="points > 100">
        Cost 100 points
      </button>
      <button v-if="points < 100" disabled>Cost 100 points</button>
      <span>add 3 points on click</span>
    </div>
    <div>
      <button @click="upgradeClick(10, 500)" v-if="points > 500">
        Cost 500 points
      </button>
      <button v-if="points < 500" disabled>Cost 500 points</button>
      <span>add 10 points on click</span>
    </div>
    <div>
      <button @click="upgradeClick(50, 1500)" v-if="points > 1500">
        Cost 1500 points
      </button>
      <button v-if="points < 1500" disabled>Cost 1500 points</button>
      <span>add 50 points on click</span>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
</style>