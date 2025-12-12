<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <div v-html="text" />
</template>

<style scoped>
p {
  margin: 0;
}

div {
  width: 310px;
}

@media screen and (min-width: 1210px) {
  div {
    width: 100%;
  }
}
</style>