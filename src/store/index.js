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
        mana: 100,
        fullMana: 100,
        maxDamage: 10,
        critical: 1,
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
      spells: [
        {
          id: 0,
          name: "Heal",
          img: require("@/assets/spells/heal.png"),
          effect:
            "Heals player randomly from 10 to 50 points, cost 25 mana points",
          active: false,
          magicDuration: 0,
          mana: 25,
        },
        {
          id: 1,
          name: "Fire Ball",
          img: require("@/assets/spells/fireball.png"),
          effect:
            "Do damage to enemy: does damage from 0 to 35, costs 30 mana points",
          active: false,
          magicDuration: 0,
          mana: 30,
        },
        {
          id: 2,
          name: "Dmg Buff",
          img: require("@/assets/spells/critical.png"),
          effect:
            "adds 15% critical chance for every user hit for 10 moves (dmg X3), cost 50mana points",
          active: false,
          magicDuration: 0,
          mana: 50,
        },
        {
          id: 3,
          name: "Summon",
          img: require("@/assets/spells/summon.png"),
          effect:
            "Summons companion, which takes damage and does random damage (0-10) to enemy for 5 rounds",
          active: false,
          magicDuration: 0,
          mana: 50,
        },
      ],

      items: [
        {
          id: 0,
          goldMsg: false,
          price: 50,
          item: "health potion",
          img: require("@/assets/weapons/potion.png"),
          info:
            "can be bought from shop for 50 coins, recovers player health when bought",
        },
        {
          id: 1,
          goldMsg: false,
          price: 50,
          item: "Mana potion",
          img: require("@/assets/weapons/potion2.png"),
          info:
            "can be bought from shop for 50 coins, recovers player health when bought",
        },
      ],
    };
  },
  getters: {
    playerPortrait: (state) => state.playerPortrait,
    game: (state) => state.game,
    monsters: (state) => state.monsters,
    monsterCounter: (state) => state.monsterCounter,
    weapons: (state) => state.weapons,
    spells: (state) => state.spells,
    items: (state) => state.items,
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

    useSpell: (state, id) => {
      function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      //health spell
      if (id === 0 && state.spells[id].mana <= state.player.mana) {
        state.player.mana -= state.spells[id].mana;
        state.spells.map((spell) => (spell.active = false));
        state.spells[id].active = true;
        state.player.health += randomValue(10, 50);
        setTimeout(function() {
          state.spells[id].active = false;
        }, 1000);
        if (state.player.health > state.player.fullHealth) {
          state.player.health = state.player.fullHealth;
        }
        state.player.health -= randomValue(
          1,
          state.monsters[state.monsterCounter].maxDamage
        );
      }
      //Fire ball
      if (id === 1 && state.spells[id].mana <= state.player.mana) {
        state.player.mana -= state.spells[id].mana;
        state.spells.map((spell) => (spell.active = false));
        state.spells[id].active = true;
        state.monsters[state.monsterCounter].health -= randomValue(1, 35);
        state.player.gold += randomValue(0, 10);
        setTimeout(function() {
          state.spells[id].active = false;
        }, 1000);
        state.player.health -= randomValue(
          1,
          state.monsters[state.monsterCounter].maxDamage
        );
      }
      //Dmg Buff
      if (id === 2 && state.spells[id].mana <= state.player.mana) {
        state.player.mana -= state.spells[id].mana;
        state.spells.map((spell) => (spell.active = false));
        state.spells[id].active = true;
        state.spells[id].magicDuration = 10;
        state.player.health -= randomValue(
          1,
          state.monsters[state.monsterCounter].maxDamage
        );
      }
      //Summon
      if (id === 3 && state.spells[id].mana <= state.player.mana) {
        state.player.mana -= state.spells[id].mana;
        state.spells.map((spell) => (spell.active = false));
        state.spells[id].active = true;
        state.spells[id].magicDuration = 5;
        state.player.health -= randomValue(
          1,
          state.monsters[state.monsterCounter].maxDamage
        );
      }
    },

    playerAttack: (state, id) => {
      function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      state.player.critical = 1;

      if (state.monsters[id].health > 0 && state.player.health > 0) {
        //summon attack
        if (state.spells[3].active === true) {
          console.log("summon hit");
          state.monsters[state.monsterCounter].health -= randomValue(1, 10);
          state.spells[3].magicDuration--;
          if (state.spells[3].magicDuration === 0) {
            state.spells[3].active = false;
          }
        }
        //"adds 15% critical chance for every user hit for 10 moves (dmg X3), cost 50mana points",
        if (state.spells[2].active === true) {
          state.spells[2].magicDuration--;
          if (state.spells[2].magicDuration === 0) {
            state.spells[2].active = false;
          }
          if (randomValue(1, 7) === 1) {
            state.player.critical = 3;
            console.log("critical hit jeeeeeee");
          }
        }
        // player Attack

        state.monsters[id].health -= randomValue(
          1 * state.player.critical,
          state.player.maxDamage * state.player.critical
        );
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
                  1 * state.player.critical,
                  state.player.maxDamage * state.player.critical
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
      if (state.player.gold >= state.items[0].price) {
        state.player.gold -= state.items[0].price;
        state.player.health = state.player.fullHealth;
      } else {
        state.item.goldMsg = true;
        setTimeout(function() {
          state.items[0].goldMsg = false;
        }, 1000);
      }
    },

    useMana: (state) => {
      if (state.player.gold >= state.items[1].price) {
        state.player.gold -= state.items[1].price;
        state.player.mana = state.player.fullMana;
      } else {
        state.items[1].goldMsg = true;
        setTimeout(function() {
          state.items[1].goldMsg = false;
        }, 1000);
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
