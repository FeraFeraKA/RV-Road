<script setup lang="ts">
defineProps<{
  modelValue?: string | number;
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  size?: 'sm' | 'md';
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <input
    :class="[$style.input, $style[size ?? 'md']]"
    :type="type ?? 'text'"
    :value="modelValue"
    :disabled="disabled"
    v-bind="$attrs"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style module>
.input {
  box-sizing: border-box;
  width: 100%;
  min-height: var(--control-height-md);
  padding: var(--space-sm) var(--space-md);
  border: var(--border-width) solid var(--color-border-strong);
  border-radius: var(--radius-control);
  color: var(--color-text);
  background: var(--color-surface);
  font: inherit;
  font-size: var(--font-size-md);
  line-height: 1.25;
}

.sm {
  min-height: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: var(--font-size-sm);
}

.sm:focus-visible {
  border-color: transparent;
  outline: 0;
}

.input::placeholder {
  color: var(--color-muted);
}

.input:focus-visible {
  border-color: var(--color-accent);
  outline: var(--focus-width) solid color-mix(in srgb, var(--color-accent) 25%, transparent);
  outline-offset: var(--focus-offset);
}

.input:disabled {
  color: var(--color-muted);
  background: var(--color-surface-raised);
  cursor: not-allowed;
}
</style>
