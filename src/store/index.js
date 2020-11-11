import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      game: null,
      player: {
        name: "Player",
        gold: 0,
        img: require("@/assets/heroes/hero2.jpg"),
        health: 100,
        fullHealth: 100,
        maxDamage: 10,
      },
      playerPortrait: [
        { img: require("@/assets/heroes/hero1.jpg"), id: 0, select: false },
        { img: require("@/assets/heroes/hero2.jpg"), id: 1, select: false },
        { img: require("@/assets/heroes/hero3.jpg"), id: 2, select: false },
      ],
      monsterCounter: 0,
      monsters: [
        {
          name: "Goblin",
          img: require("@/assets/monsters/monster1.jpg"),
          health: 100,
          fullHealth: 100,
          maxDamage: 12,
        },
        {
          name: "Troll",
          img: require("@/assets/monsters/monster2.jpg"),
          health: 120,
          fullHealth: 120,
          maxDamage: 8,
        },
        {
          name: "Witch",
          img: require("@/assets/monsters/monster3.jpg"),
          health: 80,
          fullHealth: 80,
          maxDamage: 15,
        },
      ],

      weapons: [
        {
          id: 0,
          item: "sword",

          img: require("@/assets/weapons/shortsword.png"),
          damage: 10,
          effect: "gives player 25% chance to dodge enemy attacks",
          active: true,
        },
        {
          id: 1,
          item: "magic wand",
          img: require("@/assets/weapons/staff.png"),
          damage: 12,
          effect: "heals player on every enemy hit from 0 to 5 hit points",
          active: false,
        },
        {
          id: 2,
          item: "bow",
          img: require("@/assets/weapons/shortbow.png"),
          damage: 7,
          effect: "has a 50% chance to hit enemy two times in a row",
          active: false,
        },
      ],
      item: {
        id: 0,
        goldMsg: false,
        price: 50,
        item: "health potion",
        img: require("@/assets/weapons/potion.png"),
        info:
          "can be bought from shop for 50 coins, recovers player health when bought",
      },
    };
  },
  getters: {
    playerPortrait: (state) => state.playerPortrait,
    game: (state) => state.game,
    monsters: (state) => state.monsters,
    monsterCounter: (state) => state.monsterCounter,
    weapons: (state) => state.weapons,
    item: (state) => state.item,
    player: (state) => state.player,
    monsterHealth: (state) => state.monsters[state.monsterCounter].health,
    playerHealth: (state) => state.player.health,
  },
  mutations: {
    selectChar: (state, idx) => {
      state.playerPortrait.map((portrait) => (portrait.select = false));
      console.log("paspaude", idx);
      state.playerPortrait.map((portrait) => {
        if (portrait.id === idx) {
          console.log("paspaude ant", idx);
          state.player.img = portrait.img;
          portrait.select = true;
        }
      });
    },

    submitName: (state, name) => {
      if (name.length !== 0) {
        state.player.name = name;
      }
    },

    selectWeapon: (state, id) => {
      state.weapons.map((weapon) => (weapon.active = false));
      state.weapons[id].active = true;
      state.player.maxDamage = state.weapons[id].damage;
    },

    playerAttack: (state, id) => {
      function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      if (state.monsters[id].health > 0 && state.player.health > 0) {
        // player Attack
        state.monsters[id].health -= randomValue(1, state.player.maxDamage);
        state.weapons.map((weapon) => {
          if (weapon.active === true) {
            //weapon sword
            if (weapon.id === 0) {
              console.log("sword");
              const dodge = randomValue(1, 5);
              //effect dodge
              if (dodge === 1) {
                console.log("Enemy missed");
              } else {
                state.player.health -= randomValue(
                  1,
                  state.monsters[id].maxDamage
                );
              }
            }
            //weapon staff
            if (weapon.id === 1) {
              console.log("staff");
              //effect heal
              state.player.health -= randomValue(
                1,
                state.monsters[id].maxDamage
              );
              state.player.health += randomValue(0, 5);
            }
            //weapon bow
            if (weapon.id === 2) {
              console.log("bow");
              const secondHit = randomValue(0, 2);
              console.log(secondHit);
              // effect second hit
              if (secondHit === 1) {
                console.log("second hit");
                state.monsters[id].health -= randomValue(
                  1,
                  state.player.maxDamage
                );
              }
              state.player.health -= randomValue(
                1,
                state.monsters[id].maxDamage
              );
            }
          }
        });
        state.player.gold += randomValue(0, 10);
        console.log("monster health:", state.monsters[id].health);
      }
    },

    nextMonster: (state) => {
      if (state.monsterCounter < state.monsters.length - 1) {
        state.monsterCounter++;
      } else {
        state.game = "You win";
        state.monsters[state.monsterCounter].img =
          "https://i.imgur.com/rrpzN1Z.jpg";
      }
    },

    usePotion: (state) => {
      if (state.player.gold >= state.item.price) {
        state.player.gold -= state.item.price;
        state.player.health = state.player.fullHealth;
      } else {
        state.item.goldMsg = true;
      }
    },

    gameOver: (state) => {
      state.game = "You are Dead";
      state.player.img =
        "https://ih1.redbubble.net/image.551572154.5735/flat,750x1000,075,f.u2.jpg";
    },
  },
  actions: {},
});

export default store;
