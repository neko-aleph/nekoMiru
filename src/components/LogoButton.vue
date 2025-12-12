<script setup>
import { useDark } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();

const isDark = useDark();
</script>

<template>
  <div class="logo" @click="router.push('/')">
    <img src="../assets/logo.svg" :class="{'drop-shadow': !isDark}">
    <b>nekoMiru</b>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.drop-shadow {
  filter: drop-shadow(0 0 20px #bbbbbb);
}
</style>