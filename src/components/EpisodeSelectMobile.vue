<script setup>
import BaseSelect from "./BaseSelect.vue";

const modelValue = defineModel({ type: Number, default: 0 });

defineProps({
  episodes: Array,
});
</script>

<template>
  <BaseSelect v-model="modelValue">
    <option 
      v-for="(episode, index) in episodes" 
      :key="episode.id" 
      :value="index"
    >
      Ep. {{ index + 1 }}
    </option>
  </BaseSelect>
</template>