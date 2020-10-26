<template>
  <input v-model="user.firstname" type="text" placeholder="name" />
  <input v-model="user.lastname" type="text" placeholder="last name" />
  <input v-model="user.phone" type="text" />
  <button @click="gettingData">submit</button>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        phone: "",
      },
    };
  },
  methods: {
    gettingData() {
      this.$emit("user-obj", this.user);
    },
  },
};
</script>

<style>
input {
  outline: none;
  padding: 10px 20px;
}
</style>