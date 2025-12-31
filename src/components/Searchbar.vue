<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import KeyCapIcon from "./KeyCapIcon.vue";

const router = useRouter();
const route = useRoute();

const query = ref(route.params.query);
const inputRef = ref(null);

const search = () => {
  if (!query.value) return;
  router.push(`/search/${encodeURIComponent(query.value)}`);
};

const onKeyDown = (e) => {
  if (e.key === "/" && !e.shiftKey && document.activeElement !== inputRef.value) {
    e.preventDefault();
    inputRef.value.focus();
  }

  if (e.key === "Escape" && document.activeElement === inputRef.value) {
    inputRef.value.blur();
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeyDown);
});
</script>

<template>
  <div class="wrapper">
    <input ref="inputRef" v-model="query" type="text" placeholder="..." @keyup.enter="search()">
    <KeyCapIcon class="icon">/</KeyCapIcon>
  </div>
</template>

<style scoped>
input {
  font-family: "Geist", sans-serif;
  font-weight: 400;
  font-size: 16px;
  height: 50px;
  width: 310px;
  border-radius: 12px;
  background-color: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-text-color);
  padding: 15px;
  padding-right: 44px;
  text-transform: capitalize;
  outline: none;
  box-sizing: border-box;
  border: 1px solid var(--neko-theme-quinary-bg-color);
  transition: padding .25s ease-in-out, border .25s ease-in-out, box-shadow .25s ease-in-out;
}

input:focus {
  padding: 14px;
  padding-right: 43px;
  border: 2px solid var(--neko-theme-button-color);
  box-shadow: 0 0 10px var(--neko-theme-shadow-color);
}

.wrapper {
  position: relative;
  width: 310px;
}

.icon {
  position: absolute;
  top: 13px;
  right: 15px;
}
</style>