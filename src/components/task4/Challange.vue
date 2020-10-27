<template>
  <h1>Challange</h1>
  <h2>{{ name }}</h2>
  <span>Player points: {{ points }}</span>
  <button @click="goTo(3)">To Shop</button>
  <button @click="goTo(2)">To Game</button>
  <div class="container">
    <img @click="add" :src="img()" alt="cookie" />
  </div>
</template>

<script>
export default {
  name: "Challange",
  props: {
    name: String,
    imgNumber: Number,
  },
  data() {
    return {
      points: 0,
    };
  },
  methods: {
    //navigation to shop info
    goTo(data) {
      this.$emit("shop", data);
    },
    // click on cookie ads points
    add() {
      this.points++;
    },
    //load cookie img
    img() {
      return require(`@/assets/cookies${this.imgNumber}.png`);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 250px 0;
  display: flex;
  justify-content: center;
}

img {
  cursor: pointer;
  width: 256px;
  height: 256px;
}

span {
  margin: 0 20px;
}
</style>