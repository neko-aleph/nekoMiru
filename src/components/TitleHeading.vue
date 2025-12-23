<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin: 0;
  }

  @media screen and (min-width: 1210px) {
    h1 {
      text-align: left;
    }
  }
</style>