<script setup>
const modelValue = defineModel();
</script>

<template>
  <div class="wrapper">
    <select v-model="modelValue">
      <slot />
    </select>
    <span class="material-symbols-outlined dropdown-icon">keyboard_arrow_down</span>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  height: 50px;
  width: 310px;
  cursor: pointer;
}

select {
  height: 50px;
  width: 310px;
  padding: 15px 45px 15px 15px;
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  background: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-text-color);
  appearance: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--neko-theme-text-color);
  font-size: 20px;
}
</style>