<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string;
    active?: boolean;
  }>(),
  {
    active: false,
  },
);
</script>

<template>
  <NuxtLink :to="to" :class="[$style.item, { [$style.active]: active }]">
    <span v-if="$slots.icon" :class="$style.icon" aria-hidden="true"><slot name="icon" /></span>
    <span :class="$style.label"><slot /></span>
  </NuxtLink>
</template>

<style module>
.item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  min-height: var(--nav-item-height);
  padding: 0 var(--space-md);
  border-radius: var(--radius-md);
  color: var(--color-muted);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition:
    color 120ms ease,
    background-color 120ms ease;
}

.item:hover,
.active {
  color: var(--color-text);
  background: var(--color-surface-hover);
}

.active {
  font-weight: 550;
}

.icon {
  display: grid;
  width: var(--icon-size);
  height: var(--icon-size);
  place-items: center;
  color: var(--color-muted);
}

@media (max-width: 700px) {
  .item {
    justify-content: center;
    padding: 0;
  }
  .label {
    display: none;
  }
}
</style>
