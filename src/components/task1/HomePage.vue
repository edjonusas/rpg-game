<template>
  <h1>Labas vakaras mano vardas {{ firstName }} {{ lastName }}</h1>
  <div class="text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
    consectetur vitae unde quis distinctio nostrum eos et, quam fuga deserunt
    veritatis voluptatum totam aperiam modi? Commodi officiis cum pariatur
    placeat.
  </div>
</template>

<script>
export default {
  name: "Homepage",
  props: {
    firstName: String,
    lastName: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
template {
  background-color: antiquewhite;
}
.text {
  color: darkblue;
}
</style>