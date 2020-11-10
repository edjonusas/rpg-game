<template>
  <h2>Car info</h2>
  <div>
    <img :src="carData.photo" :alt="carData.model" />
    <h2>{{ carData.model }}</h2>
    <span>{{ carData.year }}</span>
    <span>{{ carData.price }}</span>
  </div>
  <button @click="view(1)">Back</button>
</template>

<script>
export default {
  name: "CarInfo",
  props: {
    carData: Object,
  },
  methods: {
    view(num) {
      this.$emit("set-view", num);
    },
  },
};
</script>

<style>
button {
  margin: 40px auto;
  padding: 10px;
  width: 150px;
}
</style>