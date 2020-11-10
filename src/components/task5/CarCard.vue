<template>
  <div class="card">
    <img :src="carImg" :alt="carModel" />
    <div class="card-info">
      <h2>{{ carModel }}</h2>
      <span>{{ price }} eur</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    carImg: String,
    carModel: String,
    price: String,
  },
};
</script>

<style scoped>
.card {
  gap: 5%;
  width: 30%;
}

img {
  object-fit: cover;
  width: 100%;
  height: 350px;
}

.card-info {
  padding: 10px;
}

span {
  font-size: 1.1rem;
  font-weight: 700;
}
</style>