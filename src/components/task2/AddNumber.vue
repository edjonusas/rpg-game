<template>
  <div class="number">{{ number }}</div>
  <button @click="add">add {{ plus }}</button>
  <div v-if="showLine" class="line"></div>
</template>

<script>
export default {
  name: "AddNumber",
  props: {
    addNumber: Number,
    showLine: Boolean,
  },
  data() {
    return {
      boolean: true,
      number: 0,
      plus: this.addNumber,
    };
  },
  methods: {
    add() {
      this.number += this.addNumber;
    },
  },
};
</script>

<style scoped>
.line {
  height: 10px;
  background-color: steelblue;
}

.number {
  margin: 10px;
}

button {
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  background-color: #552677;
  color: white;
  padding: 15px 25px;
  margin: 5px;
  outline: none;
}
</style>