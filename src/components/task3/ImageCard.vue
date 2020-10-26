<template>
  <img :src="animals[imgId]" alt="cats" />
  <button @click="changePhoto(false)">prev</button>
  <button @click="changePhoto(true)">next</button>
  <button @click="emit('cats')">Get cats</button>
  <button @click="emit('dogs')">Get dogs</button>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    animals: Array,
  },
  data() {
    return {
      imgId: 0,
    };
  },
  methods: {
    /**
     * galery photo direction
     */
    changePhoto(direction) {
      //next img
      if (direction) {
        if (this.imgId < this.animals.length - 1) {
          this.imgId++;
        } else {
          this.imgId = 0;
        }
        // prev img
      } else {
        if (this.imgId > 0) {
          this.imgId--;
        } else {
          this.imgId = this.animals.length - 1;
        }
      }
    },
    emit(value) {
      this.$emit("img-type", value);
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
  height: 300px;
  width: 300px;
}
</style>