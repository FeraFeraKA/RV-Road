<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  }>(),
  {
    tone: 'neutral',
  },
);
</script>

<template>
  <span :class="[$style.badge, $style[tone]]"><slot /></span>
</template>

<style module>
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  min-height: var(--badge-height);
  padding: var(--space-2xs) var(--space-sm);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-muted);
  background: var(--color-surface-raised);
  font-size: var(--font-size-xs);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
}

.success {
  color: #50e3a4;
  border-color: #194d38;
  background: #0d2119;
}
.warning {
  color: #f5c451;
  border-color: #55421b;
  background: #211a0c;
}
.danger {
  color: #ff6b6b;
  border-color: #5a2525;
  background: #241010;
}
.info {
  color: var(--color-accent);
  border-color: color-mix(in srgb, var(--color-accent) 35%, transparent);
  background: var(--color-accent-soft);
}
</style>
