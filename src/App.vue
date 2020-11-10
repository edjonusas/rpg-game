<template>
  <div class="main">
    <div class="money">
      {{ getMoney }}
      <span v-if="getError">truksta pinigu</span>
    </div>
    <div class="container">
      <div v-for="item of getItems" :key="item.id" class="card">
        <img :src="item.image" alt="item" />
        <h4>{{ item.name }} {{ item.id }}</h4>
        <span>{{ item.price }}</span>
        <button @click="buyItem(item.id)">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      personDataArr: [],
      personCount: {},
      sideBlockState: false,
    };
  },
  computed: {
    getItems() {
      return this.$store.getters.getItems;
    },
    getMoney() {
      return this.$store.getters.getMoney;
    },
    getError() {
      return this.$store.getters.getError;
    },
  },
  watch: {},
  methods: {
    jokes() {
      this.$store.dispatch("getJoke");
    },

    buyItem(id) {
      this.$store.commit("buyItem", id);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 300px;
}
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background-color: #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
