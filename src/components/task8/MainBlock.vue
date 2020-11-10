<template>
  <div class="container">
    <div class="top-bar">
      <div>male: {{ personCount.male }}</div>
      <div>female: {{ personCount.female }}</div>
      <button @click="addMeniu">{{ button ? "Add Person" : "Close" }}</button>
    </div>
    <div class="card-container">
      <div v-for="person of personDataArr" :key="person.id" class="card">
        <img :src="person.picture" alt="portrait" />
        <div>{{ person.firsName }} {{ person.lastName }} {{ person.age }}</div>
        <div>{{ person.gender }}</div>
        <div>{{ person.phone }}</div>
        <div>{{ person.info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["change"],
  name: "MainBlock",
  data() {
    return {
      button: true,
    };
  },
  props: {
    computed: {},
    personDataArr: Array,
    personCount: Object,
  },
  methods: {
    maleFemaleCount() {},
    addMeniu() {
      this.button = !this.button;
      this.$emit("change");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background: #a3adf8;
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  justify-content: center;
}

.top-bar div,
.top-bar button {
  padding: 15px 30px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 20px 10px;
}
</style>