<template>
  <div class="container">
    <div class="name">{{ player.name }}</div>
    <img class="player" :src="player.img" alt="char" />
    <div class="hp">
      <div class="health-bar">
        <div :style="healthBar" class="health-bar-fill"></div>
      </div>
    </div>
    <div class="weapon-block">
      <img
        class="weapon"
        v-for="weapon of weapons"
        :class="{ 'weapon-active': weapon.active }"
        :key="weapon.id"
        :src="weapon.img"
        :alt="weapon.item"
        @click="use(weapon.id)"
      />
    </div>
    <div class="gold">
      <span>GOLD: {{ player.gold }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesCard",
  props: {
    player: Object,
    weapons: Array,
  },
  computed: {
    healthBar() {
      console.log(this.health(this.player.fullHealth, this.player.health));
      return (
        "width: " +
        this.health(this.player.fullHealth, this.player.health) +
        "%;"
      );
    },
  },
  methods: {
    use(id) {
      this.$store.commit("selectWeapon", id);
      console.log(id);
    },
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
  /* border: gray solid 1px; */
}
.name {
  color: #dddddd;
  margin: 20px 0;
  font-weight: 600;
  font-size: 20px;
}
.container .player {
  object-fit: cover;
  width: 400px;
  height: 530px;
}

.hp {
  margin: 10px auto;
  box-sizing: border-box;
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
.weapon-block {
  margin: 10px 0;
}
.weapon {
  cursor: pointer;
  box-sizing: border-box;
  object-fit: cover;
  margin: 10px;
  height: 80px;
  width: 80px;
}
.weapon-active {
  border: #ca8588 3px solid;
}
.gold {
  color: #dddddd;
  font-size: 18px;
  font-weight: 600;
  margin: 20px;
}
</style>