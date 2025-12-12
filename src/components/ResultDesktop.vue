<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  id: Number,
  title: String,
  image: String,
});

const router = useRouter();
</script>

<template>
  <div class="title" @click="router.push(`/title/${props.id}`);">
    <img :src="image">
    <span class="text">{{ title }}</span>
  </div>
</template>

<style scoped>
.title {
  width: 210px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: start;
  cursor: pointer;
}

img {
  object-fit: cover;
  background-color: var(--neko-theme-secondary-bg-color);
  border-radius: 12px;
  width: 210px;
  height: 310px;
}

.text {
  max-width: 210px;
  height: 40px;
  max-height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;    
  line-clamp: 2;
  overflow: hidden;
}
</style>