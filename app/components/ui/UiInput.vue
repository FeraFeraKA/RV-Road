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
  min-height: 2.5rem;
  padding: 0.5625rem 0.75rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control, 0.5rem);
  color: var(--color-text);
  background: var(--color-surface);
  font: inherit;
}

.sm {
  min-height: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 0.8125rem;
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
  outline: 2px solid color-mix(in srgb, var(--color-accent) 25%, transparent);
  outline-offset: 1px;
}

.input:disabled {
  color: var(--color-muted);
  background: var(--color-surface-raised);
  cursor: not-allowed;
}
</style>
