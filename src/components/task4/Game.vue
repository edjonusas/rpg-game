<template>
  <h2>{{ name }}</h2>
  <span>{{ points }}</span>
  <button @click="shop">To Shop</button>
  <div class="container">
    <div @click="cookie" class="cookie"></div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: {
    name: String,
    points: Number,
  },
  data() {
    return {};
  },
  methods: {
    shop() {
      this.$emit("shop", 3);
    },
    cookie() {
      this.$emit("add");
    },
  },
};
</script>
<style>
.container {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

.cookie {
  background-color: brown;
  border-radius: 50%;
  height: 250px;
  width: 250px;
}
</style>