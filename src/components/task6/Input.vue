<template>
  <div class="container" :style="color">
    <input v-model="text" type="text" placeholder="Some text" />
    {{ emit() }}
  </div>
</template>

<script>
export default {
  props: {
    color: Object,
  },
  data() {
    return {
      boxColor: {
        backgroundColor: this.color,
      },
      text: "",
    };
  },
  methods: {
    emit() {
      console.log(this.text);
      this.$emit("get-text", this.text);
    },
  },
};
</script>

<style>
.container {
  padding: 40px 0;
}
input {
  font-size: 20px;
  padding: 10px 20px;
}
</style>