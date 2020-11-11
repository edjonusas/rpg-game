<template>
  <!-- meniu -->
  <div class="start-menu" v-if="!gameState">
    <div>
      <div class="name">
        <label for="name">Enter Your name</label>
        <input v-model="playerName" id="name" type="text" autocomplete="off" />
      </div>
      <h2 class="char">Choose Your Character</h2>
      <div class="portrait-block">
        <img
          v-for="portrait of playerPortrait"
          @click="selectHero(portrait.id)"
          :key="portrait.id"
          :class="{ 'active-char': portrait.select }"
          :src="portrait.img"
          alt="portrait"
        />
      </div>
      <div class="button">
        <button @click="start">Start The Game</button>
      </div>
    </div>
  </div>
  <!-- game -->
  <div v-else>
    <header>
      <div>
        <h2 class="game">{{ game }}</h2>
      </div>
    </header>
    <main>
      <div>
        <PlayerCard :player="player" :weapons="weapons" />
        <div><button @click="attack(monsterCounter)">Attack!</button></div>
        <MonsterCard :monster="monsters[monsterCounter]" />
      </div>
      <div class="item-container">
        <h3>Health Potion 50 gold</h3>
        <img @click="usePotion" :src="item.img" :alt="item.item" />
        <span class="msg" v-if="item.goldMsg">Not Enough Gold!!!</span>
      </div>
    </main>
  </div>
</template>

<script>
import MonsterCard from "./components/task10/MonsterCard";
import PlayerCard from "./components/task10/PlayerCard";
export default {
  name: "App",
  components: {
    MonsterCard,
    PlayerCard,
  },
  data() {
    return {
      gameState: false,
      playerName: "",
    };
  },
  watch: {
    monsterHealth: function (val) {
      if (val <= 0) {
        this.$store.commit("nextMonster");
      }
    },
    playerHealth: function (val) {
      if (val <= 0) {
        this.$store.commit("gameOver");
      }
    },
  },
  computed: {
    playerPortrait() {
      return this.$store.getters.playerPortrait;
    },
    game() {
      return this.$store.getters.game;
    },
    monsters() {
      return this.$store.getters.monsters;
    },
    monsterCounter() {
      return this.$store.getters.monsterCounter;
    },
    monsterHealth() {
      return this.$store.getters.monsterHealth;
    },
    playerHealth() {
      return this.$store.getters.playerHealth;
    },
    item() {
      return this.$store.getters.item;
    },
    weapons() {
      return this.$store.getters.weapons;
    },
    player() {
      return this.$store.getters.player;
    },
  },
  methods: {
    //DONE create a game where player fights against monster
    //DONE player and monster should both have health bars
    //DONE representing total health left (monsters have custom amount of health)
    //DONE game goes like this: player clicks button "hit" and hits enemy
    //DONE then enemy automatically hits player back
    //DONE when enemy is killed, second enemy appear with full health bar

    //DONE player should be able to change weapon he is equipped with
    //DONE each weapon will have it's own effect on player
    //DONE (player should have 3 weapons to choose, but can hold only one while fighting)
    //DONE on every hit player gets random amount of coins - from 0 to 10
    //DONE coins are needed to buy health potions, one potion costs 50 points
    //DONE health potions fully restores player health when bought
    selectHero(id) {
      this.$store.commit("selectChar", id);
      this.$store.commit("submitName", this.playerName);
    },
    start() {
      this.gameState = true;
    },
    attack(id) {
      this.$store.commit("playerAttack", id);
    },
    usePotion() {
      this.$store.commit("usePotion");
    },
  },
};
</script>

<style>
body {
  background: #000000 51%;
  background: linear-gradient(0deg, #000000 25%, #290000 40%, #140000 80%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 30px auto;
  min-height: 85vh;
  width: 1200px;
}

main > div {
  display: flex;
  justify-content: space-between;
}

.start-menu {
  min-height: 95vh;
}

.name {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name label {
  margin: 5px 0 25px;
  font-weight: 600;
  font-size: 24px;
  color: #dddddd;
}

.name input {
  box-sizing: border-box;
  height: 60px;
  outline: none;
  text-align: center;
  font-size: 24px;
  background: none;
  color: #dddddd;
  border: 2px solid #575757;
  padding: 10px 20px;
  transition-duration: 0.3s;
}

.name input:focus {
  border: 4px solid #bb8c8c;
}

.portrait-block {
  display: flex;
  justify-content: center;
}

.portrait-block img {
  box-sizing: border-box;
  object-fit: cover;
  width: 400px;
  height: 530px;
  cursor: pointer;
  margin: 10px;
}

.active-char {
  border: 3px solid #dddddd;
  transition-duration: 0.3s;
}
.char {
  text-align: center;
  color: #dddddd;
}

.button {
  text-align: center;
}

.button button {
  margin-top: 30px;
}

button {
  margin-top: 350px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #701010;
  color: #dddddd;
  font-weight: 600;
  font-size: 20px;
  padding: 15px 35px;
}
.game {
  color: #dddddd;
  margin: 0;
  text-align: center;
  font-size: 40px;
  transition-duration: 1s;
}

.item-container {
  color: #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-container img {
  cursor: pointer;
  width: 80px;
  height: 80px;
}

.msg {
  color: #dddddd;
  margin: 10px;
}
</style>
