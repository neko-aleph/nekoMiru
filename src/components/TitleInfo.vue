<script setup>
import TitleDescription from "./TitleDescription.vue";
import TitleHeading from "./TitleHeading.vue";
import TitleMeta from "./TitleMeta.vue";

defineProps({
  title: String,
  season: String,
  format: String,
  status: String,
  description: String,
});
</script>

<template>
  <div class="info">
    <TitleHeading :title="title" />
    <TitleMeta :season="season" :format="format" :status="status" />
    <TitleDescription :text="description" />
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 310px;
  align-items: center;
}

@media screen and (min-width: 1210px) {
  .info {
    width: 100%;
    align-items: start;
  }
}
</style>