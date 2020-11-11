<template>
  <div class="container">
    <div class="name">{{ monster.name }}</div>
    <img :src="`${monster.img}`" alt="char" />
    <div>
      <div class="health-bar">
        <div :style="healthBar" class="health-bar-fill"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesCard",
  props: {
    monster: Object,
  },
  computed: {
    healthBar() {
      return (
        "width: " +
        this.health(this.monster.fullHealth, this.monster.health) +
        "%;"
      );
    },
  },
  methods: {
    health(fullHp, currentHp) {
      return (100 / fullHp) * currentHp;
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 400px;
}
.name {
  color: #dddddd;
  margin: 20px 0;
  font-weight: 600;
  font-size: 20px;
}
.container img {
  margin-bottom: 10px;
  object-fit: cover;
  width: 400px;
  height: 530px;
}
.health-bar {
  border-radius: 5px;
  position: relative;
  width: 100%;
  background-color: rgb(221, 221, 221);
  height: 20px;
}
.health-bar-fill {
  border-radius: 5px;
  position: absolute;
  background-color: #ff7f3b;
  background-image: linear-gradient(20deg, #ff7f3b 0%, #ae2323 67%);
  transition-duration: 1s;
  height: 100%;
}
</style>