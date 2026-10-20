<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
  }>(),
  {
    as: 'div',
    padding: 'md',
  },
);
</script>

<template>
  <component :is="as" :class="[$style.box, $style[padding]]">
    <slot />
  </component>
</template>

<style module>
.box {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 0.75rem);
  background: var(--color-surface);
}

.none {
  padding: 0;
}
.sm {
  padding: 0.75rem;
}
.md {
  padding: 1rem;
}
.lg {
  padding: 1.5rem;
}
</style>
