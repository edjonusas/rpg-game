<template>
  <div>
    <img :src="img" alt="img" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "CardVertical",
  props: {
    text: String,
    img: String,
  },
};
</script>

<style scoped>
div {
  background: gainsboro;
}
</style>