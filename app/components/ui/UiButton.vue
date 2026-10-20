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
  gap: var(--space-sm);
  border: var(--border-width) solid transparent;
  border-radius: var(--radius-control);
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
  outline: var(--focus-width) solid var(--color-accent);
  outline-offset: var(--focus-offset);
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
  min-height: var(--control-height-sm);
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--font-size-md);
}
.md {
  min-height: var(--control-height-md);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-md);
}
.lg {
  min-height: var(--control-height-lg);
  padding: var(--space-md) var(--space-lg);
  font-size: var(--font-size-lg);
}
</style>
