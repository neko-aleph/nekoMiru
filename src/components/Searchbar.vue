<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const query = ref(route.params.query);

const search = () => {
  if (!query.value) return;
  router.push(`/search/${encodeURIComponent(query.value)}`);
};
</script>

<template>
  <input v-model="query" type="text" placeholder="..." @keyup.enter="search()">
</template>

<style scoped>
input {
  font-family: "Geist", sans-serif;
  font-weight: 400;
  font-size: 16px;
  height: 50px;
  width: 310px;
  border-radius: 12px;
  background-color: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-text-color);
  padding: 15px;
  text-transform: capitalize;
  border: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid var(--neko-theme-quinary-bg-color);
  transition: border .1s ease-in-out, box-shadow .25s ease-in-out;
}

input:focus {
  border: 2px solid var(--neko-theme-button-color);
  box-shadow: 0 0 10px var(--neko-theme-shadow-color);
}
</style>