<script setup>
import { useMediaQuery } from "@vueuse/core";
import AsciiArt from "../components/AsciiArt.vue";
import Header from "../components/Header.vue";
import FooterNotice from "../components/FooterNotice.vue";

const isMobile = useMediaQuery("(max-width: 1209px)");
</script>

<template>
  <div class="page">
    <Header />
    <AsciiArt v-if="!isMobile" />
    <FooterNotice />
  </div>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
</style>