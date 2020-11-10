<template>
  <div class="container">
    <div v-if="personData !== null">
      <img :src="personData.picture" alt="portrait" />
      <div>{{ personData.firstName }}</div>
      <div>{{ personData.lastName }}</div>
      <div>{{ personData.phone }}</div>
      <div>{{ personData.gender }}</div>
      <div>{{ personData.age }}</div>
      <textarea
        v-model="personData.info"
        placeholder="Your text there"
      ></textarea>
      <div>
        <button @click="addCard">Add</button>
        <button @click="fetchData">Skip</button>
      </div>
    </div>

    <p v-if="errorMsg !== null">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  emits: ["user"],
  name: "SideBlock",
  data() {
    return {
      errorMsg: null,
      personData: null,
    };
  },
  methods: {
    fetchData() {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          const person = data.results[0];
          if (person.dob.age >= 25) {
            this.personData = {
              fistName: person.name.first,
              lastName: person.name.last,
              phone: person.phone,
              picture: person.picture.large,
              gender: person.gender,
              age: person.dob.age,
              info: "",
              id: person.id,
            };
          } else {
            this.errorMsg = "Person under 25 year age";
          }
        });
    },
    addCard() {
      this.$emit("user", this.personData);
      this.fetchData();
    },
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const person = data.results[0];
        if (person.dob.age >= 25) {
          this.personData = {
            fistName: person.name.first,
            lastName: person.name.last,
            phone: person.phone,
            picture: person.picture.large,
            gender: person.gender,
            age: person.dob.age,
            info: "",
          };
        } else {
          this.errorMsg = "Person under 25 year age";
        }
      });
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
  background: cornsilk;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
}
</style>