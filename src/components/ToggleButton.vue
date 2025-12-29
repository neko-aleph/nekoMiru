<script setup>
const isActive = defineModel()
</script>

<template>
  <button @click="isActive = !isActive">
    <slot />
  </button>
</template>

<style scoped>
button {
  border: none;
  outline: none;
  background: none;
  color: var(--neko-theme-text-color);
  font-family: "Geist", sans-serif;
  font-size: 16px;
  padding: 0;
  margin: 5px;
  cursor: pointer;
}
</style>