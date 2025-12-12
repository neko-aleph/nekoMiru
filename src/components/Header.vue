<script setup>
import { useMediaQuery } from "@vueuse/core";
import LogoButton from "./LogoButton.vue";
import Searchbar from "./Searchbar.vue";

const isMobile = useMediaQuery("(max-width: 1209px)");
</script>

<template>
  <div class="header">
    <LogoButton v-if="!isMobile" />
    <Searchbar />
  </div>
</template>

<style scoped>
.header {
  width: 1130px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1209px) {
  .header {
    width: 100%;
    justify-content: center;
  }
}
</style>