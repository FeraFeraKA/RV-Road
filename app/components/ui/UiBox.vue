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
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-surface);
}

.none {
  padding: 0;
}
.sm {
  padding: var(--space-md);
}
.md {
  padding: var(--space-lg);
}
.lg {
  padding: var(--space-xl);
}
</style>
