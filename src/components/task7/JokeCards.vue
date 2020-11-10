<template>
  <div>Joke cards</div>
  <div class="card" v-for="joke of jokes" :key="joke.id">
    <div>{{ joke.userName }}</div>
    <div>{{ joke.created_at }}</div>
    <img :src="joke.icon_url" alt="icon" />
    <div>{{ joke.value }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    jokes: Array,
  },
};
</script>

<style>
.card {
  margin: 40px;
}
</style>