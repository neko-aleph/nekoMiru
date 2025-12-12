<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <RouterView :key="route.fullPath"/>
</template>

<style>
body {
  background: var(--neko-theme-bg-color);
  color: var(--neko-theme-text-color);
}
</style>