<script setup>
import { useMediaQuery } from "@vueuse/core";

defineProps({
  image: String,
});

const isMobile = useMediaQuery("(max-width: 1209px)");
</script>

<template>
  <div v-if="isMobile" class="center">
    <img :src="image" class="cover">
  </div>
  <img v-else :src="image" class="cover">
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.cover {
  width: 270px;
  height: 400px;
  border-radius: 12px;
  object-fit: cover;
  background-color: var(--neko-theme-secondary-bg-color);
}

@media screen and (min-width: 1210px) {
  .cover {
    width: 162px;
    height: 240px;
  }
}
</style>