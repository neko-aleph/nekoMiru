<template>
  <div class="keycap">
    <slot />
  </div>
</template>

<style scoped>
.keycap {
  height: 24px;
  width: 24px;
  background-color: var(--neko-theme-tertiary-bg-color);
  border: 1px solid var(--neko-theme-quinary-bg-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 12px;
}
</style>