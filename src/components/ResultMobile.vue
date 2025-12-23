<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  id: Number,
  title: String,
});

const router = useRouter();
</script>

<template>
  <div class="title" @click="router.push(`/title/${props.id}`);">
    <span class="text">{{ title }}</span>
    <div class="after">
      <span class="material-symbols-outlined">arrow_forward</span>
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 100%;
  min-width: 310px;
  max-width: 620px;
  height: 50px;
  border-radius: 12px;
  background-color: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-text-color);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid var(--neko-theme-quinary-bg-color);
}

.text {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
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