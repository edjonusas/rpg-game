<template>
  <div v-if="charCount < 20">box1</div>
  <div v-else>box2</div>
</template>

<script>
export default {
  name: "Boxes",
  props: {
    charCount: Number,
  },
};
</script>

<style>
</style>