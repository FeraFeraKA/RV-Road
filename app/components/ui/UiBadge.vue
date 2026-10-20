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
  gap: 0.375rem;
  min-height: 1.375rem;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-muted);
  background: var(--color-surface-raised);
  font-size: 0.75rem;
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
  color: #6bb8ff;
  border-color: #1b3d5b;
  background: #0c1924;
}
</style>
