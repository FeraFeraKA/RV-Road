<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
  },
);
</script>

<template>
  <button :class="[$style.button, $style[variant], $style[size]]" :type="type" :disabled="disabled">
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
  transition:
    background-color 150ms ease,
    border-color 150ms ease,
    color 150ms ease;
}

.button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.primary {
  color: var(--color-on-accent, #07130e);
  background: var(--color-accent);
}

.primary:hover:not(:disabled) {
  background: var(--color-accent-strong);
}

.secondary {
  color: var(--color-text);
  border-color: var(--color-border-strong);
  background: var(--color-surface-raised);
}

.secondary:hover:not(:disabled) {
  background: var(--color-surface-hover);
}

.ghost {
  color: var(--color-text);
  background: transparent;
}

.ghost:hover:not(:disabled) {
  background: var(--color-surface-hover);
}

.danger {
  color: #fff;
  background: #d92d20;
}

.danger:hover:not(:disabled) {
  background: #b42318;
}

.sm {
  min-height: 2rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
}
.md {
  min-height: 2.5rem;
  padding: 0.5625rem 0.875rem;
  font-size: 0.9375rem;
}
.lg {
  min-height: 3rem;
  padding: 0.75rem 1.125rem;
  font-size: 1rem;
}
</style>
