<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
})
</script>

<template>
  <button
    :class="[$style.button, $style[variant], $style[size]]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: var(--radius-control, 0.5rem);
  font: inherit;
  font-weight: 600;
  line-height: 1.25;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease;
}

.button:focus-visible {
  outline: 2px solid var(--color-primary, #556b45);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.primary {
  color: var(--color-on-primary, #fff);
  background: var(--color-primary, #556b45);
}

.primary:hover:not(:disabled) {
  background: var(--color-primary-hover, #465a38);
}

.secondary {
  color: var(--color-text, #25261f);
  border-color: var(--color-border, #d9d9d2);
  background: var(--color-surface, #fff);
}

.secondary:hover:not(:disabled) {
  background: var(--color-surface-hover, #f5f5f1);
}

.ghost {
  color: var(--color-text, #25261f);
  background: transparent;
}

.ghost:hover:not(:disabled) {
  background: var(--color-surface-hover, #f5f5f1);
}

.sm { min-height: 2rem; padding: 0.375rem 0.625rem; font-size: 0.875rem; }
.md { min-height: 2.5rem; padding: 0.5625rem 0.875rem; font-size: 0.9375rem; }
.lg { min-height: 3rem; padding: 0.75rem 1.125rem; font-size: 1rem; }
</style>
