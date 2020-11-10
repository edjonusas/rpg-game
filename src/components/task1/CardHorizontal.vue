<template>
  <div>
    <img :src="img" alt="img" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "CardHorizontal",
  props: {
    text: String,
    img: String,
  },
};
</script>

<style>
div {
  background-color: gold;
}
</style>