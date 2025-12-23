<script setup>
const modelValue = defineModel({ type: Number, default: 0 });

defineProps({
  episodes: Array,
});

function select(index) {
  modelValue.value = index;  
}
</script>

<template>
  <div class="sidebar">
    <button
      v-for="(episode, index) in episodes"
      :key="episode.id"
      @click="select(index)"
      :class="['episode', { active: modelValue === index }]"
    >
      Ep. {{ index + 1 }}
    </button>
  </div>
</template>

<style scoped>
.sidebar {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-height: 400px;
  width: 310px;
  background-color: var(--neko-theme-secondary-bg-color);
  border-radius: 12px;
  overflow-y: auto;
  border: 1px solid var(--neko-theme-quinary-bg-color);
}

.episode {
  border: none;
  border-radius: 12px;
  background-color: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-text-color);
  cursor: pointer;
  flex: 0 0 auto;
  height: 50px;
  width: 310px;
  font-family: "Geist", sans-serif;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  box-sizing: border-box;
}

.episode:hover {
  color: var(--neko-theme-text-color);
  background-color: var(--neko-theme-tertiary-bg-color);
  font-weight: 400;
}

.active {
  background-color: var(--neko-theme-button-color);
  color: var(--neko-theme-button-text-color);
  font-weight: 600;
}

.active:hover {
  background-color: var(--neko-theme-button-color);
  color: var(--neko-theme-button-text-color);
  font-weight: 600;
}
</style>