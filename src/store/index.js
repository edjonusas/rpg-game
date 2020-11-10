import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      items: [
        {
          image:
            "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
          name: "Leather Tool Roll Up Pouch",
          price: 30.9,
          id: 0,
        },
        {
          image:
            "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
          name: "Hand Forged Viking Axe",
          price: 132.48,
          id: 1,
        },
        {
          image:
            "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
          name: "Leather Cabinet Pulls",
          price: 5.68,
          id: 2,
        },
        {
          image:
            "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
          name: "Unicorn Papercraft, 3D Papercraft",
          price: 14.52,
          id: 3,
        },
        {
          image:
            "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
          name: "Chicken Coop Plans",
          price: 18.11,
          id: 4,
        },
      ],
      money: 150,
      error: false,
    };
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getMoney(state) {
      return state.money;
    },
    getError(state) {
      return state.error;
    },
  },
  mutations: {
    setJoke(state, data) {
      state.joke = data;
    },
    setName(state, data) {
      state.name = data;
    },
    setCity(state, data) {
      state.city = data;
    },
    setMoney(state, data) {
      state.money = data;
    },
    setItems(state, data) {
      state.items = data;
    },
    setError(state, data) {
      state.error = data;
    },

    buyItem(state, idx) {
      const targetItem = state.items.filter((item) => idx === item.id);
      console.log(targetItem);
      if (targetItem[0].price < state.money) {
        const moneyLeft = state.money - targetItem[0].price;
        const moneyLeftRound = Math.round(moneyLeft * 100) / 100;
        state.money = moneyLeftRound;
        // state.money -= targetItem[0].price;
        state.items = state.items.filter((item) => idx !== item.id);
        state.error = false;
      } else {
        state.error = true;
      }
    },
  },
  actions: {
    // buyItem({ commit, state }, idx) {
    //   console.log(idx);
    //   let item =
    //   if (state.items..price < state.money) {
    //     commit("setMoney", (state.money -= state.items[idx].price));
    //     let left = state.items.filter((item) => idx !== item.id);
    //     console.log(left);
    //     commit("setItems", left);
    //     commit("setError", "");
    //   } else {
    //     commit("setError", "not enough money");
    //   }
    // },
  },
});
export default store;
