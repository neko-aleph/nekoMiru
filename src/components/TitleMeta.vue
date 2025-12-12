<script setup>
defineProps({
  season: String,
  format: String,
  status: String,
});
</script>

<template>
  <p>{{ season }}・{{ format }}・{{ status }}</p>
</template>

<style scoped>
p {
  text-align: center;
  margin: 0;
}

@media screen and (min-width: 1210px) {
  p {
    text-align: left;
  }
}
</style>