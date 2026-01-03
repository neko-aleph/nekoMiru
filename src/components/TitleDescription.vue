<script setup>
import { ref, onMounted } from "vue";
import { useMediaQuery } from "@vueuse/core";
import ToggleButton from "./ToggleButton.vue";

defineProps({
  text: String,
});

const isMobile = useMediaQuery("(max-width: 1209px)");
const descriptionRef = ref(null);
const isExpanded = ref(false)

onMounted(() => {
  if (descriptionRef.value.scrollHeight <= descriptionRef.value.clientHeight) {
    isExpanded.value = true;
  }
});
</script>

<template>
  <div :class="['description', { expanded: isExpanded }]" ref="descriptionRef">
    <div v-html="text" />
    <div v-if="!isExpanded && !isMobile" class="shadow">
      <ToggleButton v-model="isExpanded">Read more</ToggleButton>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}

.description {
  width: 310px;
}

@media screen and (min-width: 1210px) {
  .description {
    width: 100%;
    height: 1px;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative;
  }

  .shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, var(--neko-theme-bg-color) 0%, var(--neko-theme-shadow-gradient-color) 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .expanded {
    height: auto;
  }
}
</style>