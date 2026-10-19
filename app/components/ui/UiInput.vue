<script setup lang="ts">
defineProps<{
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url'
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    :class="$style.input"
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
  border: 1px solid var(--color-border, #d9d9d2);
  border-radius: var(--radius-control, 0.5rem);
  color: var(--color-text, #25261f);
  background: var(--color-surface, #fff);
  font: inherit;
}

.input::placeholder {
  color: var(--color-muted, #85867d);
}

.input:focus-visible {
  border-color: var(--color-primary, #556b45);
  outline: 2px solid color-mix(in srgb, var(--color-primary, #556b45) 25%, transparent);
  outline-offset: 1px;
}

.input:disabled {
  color: var(--color-muted, #85867d);
  background: var(--color-surface-muted, #f5f5f1);
  cursor: not-allowed;
}
</style>
