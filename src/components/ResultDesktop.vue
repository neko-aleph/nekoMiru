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
    <div class="wrapper">
      <img :src="image">
    </div>
    <span class="text">{{ title }}</span>
  </div>
</template>

<style scoped>
.title {
  width: 180px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: start;
  cursor: pointer;
}

.wrapper {
  position: relative;
  background-color: var(--neko-theme-secondary-bg-color);
  border-radius: 12px;
  width: 180px;
  height: 265px;
  transition: transform .25s ease-in-out;
}

.wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0 solid var(--neko-theme-quinary-bg-color);
  border-radius: 12px;
  transition: border 0.25s ease-in-out, box-shadow .25s ease-in-out;
  pointer-events: none;
}

img {
  object-fit: cover;
  background-color: var(--neko-theme-secondary-bg-color);
  border-radius: 12px;
  width: 180px;
  height: 265px;
  border: 1px solid var(--neko-theme-quinary-bg-color);
  box-sizing: border-box;
}

.wrapper:hover::after {
  border: 2px solid var(--neko-theme-button-color);
  box-shadow: 0 0 10px var(--neko-theme-shadow-color);
}

.wrapper:hover {
  transform: translate(0, -5px);
}

.text {
  max-width: 180px;
  height: 40px;
  max-height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;    
  line-clamp: 2;
  overflow: hidden;
}
</style>