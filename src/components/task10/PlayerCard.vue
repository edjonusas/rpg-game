<template>
  <div class="container">
    <div class="name">{{ player.name }}</div>
    <div class="portrait">
      <img class="player" :src="player.img" alt="char" />
      <img
        class="active-spell-icon"
        v-if="spells[3].active"
        :src="spells[3].img"
        :alt="spells[3].name"
      />
      <img
        class="active-spell-icon"
        v-if="spells[2].active"
        :src="spells[2].img"
        :alt="spells[2].name"
      />
    </div>
    <div class="hp">
      <div class="health-bar">
        <div :style="healthBar" class="health-bar-fill"></div>
      </div>
      <div class="mana-bar">
        <div :style="manaBar" class="mana-bar-fill"></div>
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
    <div class="spell-block">
      <img
        class="spell"
        v-for="spell of spells"
        :class="{ 'spell-active': spell.active }"
        :key="spell.id"
        :src="spell.img"
        :alt="spell.name"
        @click="useSpell(spell.id)"
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
    spells: Array,
  },
  computed: {
    healthBar() {
      return (
        "width: " +
        this.barWidht(this.player.fullHealth, this.player.health) +
        "%;"
      );
    },
    manaBar() {
      return (
        "width: " + this.barWidht(this.player.fullMana, this.player.mana) + "%;"
      );
    },
  },
  methods: {
    use(id) {
      this.$store.commit("selectWeapon", id);
    },
    useSpell(id) {
      this.$store.commit("useSpell", id);
      console.log(id);
    },
    barWidht(full, current) {
      return (100 / full) * current;
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

.portrait {
  position: relative;
}

.active-spell-icon {
  margin: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 50px;
}

.hp {
  margin: 10px auto;
  box-sizing: border-box;
}
.mana-bar,
.health-bar {
  border-radius: 5px;
  position: relative;
  width: 100%;
  background-color: rgb(221, 221, 221);
  height: 20px;
}

.mana-bar {
  margin-top: 8px;
}

.mana-bar-fill,
.health-bar-fill {
  border-radius: 5px;
  position: absolute;
  background-color: #ff7f3b;
  background-image: linear-gradient(20deg, #ff7f3b 0%, #ae2323 67%);
  transition-duration: 1s;
  height: 100%;
}

.mana-bar-fill {
  background-color: #483bff;
  background-image: linear-gradient(20deg, #483bff 0%, #232cae 67%);
}

.spell-blcok,
.weapon-block {
  margin: 10px 0;
}

.spell,
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

.spell-active {
  border: #8c85ca 3px solid;
}

.gold {
  color: #dddddd;
  font-size: 18px;
  font-weight: 600;
  margin: 20px;
}
</style>