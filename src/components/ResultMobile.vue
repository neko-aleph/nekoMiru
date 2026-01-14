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
    <div class="label">
      <div class="text-container">
        <span class="text">{{ title }}</span>
      </div>
      <div class="after">
        <span class="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 100%;
  min-width: 310px;
  max-width: 620px;
  height: 70px;
  border-radius: 12px;
  background-color: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-text-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  border: 1px solid var(--neko-theme-quinary-bg-color);
  gap: 0;
  overflow: hidden;
}

img {
  height: 70px;
  width: 48px;
  object-fit: cover;
  border-right: 1px solid var(--neko-theme-quinary-bg-color);
  background-color: var(--neko-theme-secondary-bg-color);
  box-sizing: border-box;
  min-width: 48px;
}

.label {
  width: 100%;
  height: 70px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

text-container {
  height: 40px;
  display: flex;
  align-items: center;
  padding-right: 5px;
}

.text {
  max-width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.after {
  color: var(--neko-theme-text-color);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.material-symbols-outlined {
  font-size: 16px;
  vertical-align: middle;
}
</style>