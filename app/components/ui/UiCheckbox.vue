<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
  }>(),
  {
    modelValue: false,
    indeterminate: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const input = ref<HTMLInputElement>();

watchEffect(() => {
  if (input.value) input.value.indeterminate = props.indeterminate;
});
</script>

<template>
  <label :class="[$style.checkbox, { [$style.disabled]: disabled }]">
    <input
      ref="input"
      :class="$style.control"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :aria-checked="indeterminate ? 'mixed' : undefined"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span v-if="$slots.default" :class="$style.label"><slot /></span>
  </label>
</template>

<style module>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text);
  font-size: var(--font-size-sm);
  line-height: 1.4;
  cursor: pointer;
}

.control {
  display: grid;
  flex: 0 0 var(--icon-size);
  width: var(--icon-size);
  height: var(--icon-size);
  margin: 0;
  place-content: center;
  appearance: none;
  border: var(--border-width) solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  color: #100b19;
  background: var(--color-surface);
  cursor: inherit;
  transition:
    border-color 120ms ease,
    background-color 120ms ease;
}

.control::before {
  width: var(--space-sm);
  height: var(--space-xs);
  transform: rotate(-45deg) scale(0);
  border: solid currentColor;
  border-width: 0 0 2px 2px;
  content: '';
}

.control:checked,
.control:indeterminate {
  border-color: var(--color-accent);
  background: var(--color-accent);
}

.control:checked::before {
  transform: rotate(-45deg) scale(1);
}

.control:indeterminate::before {
  width: var(--space-sm);
  height: 2px;
  transform: none;
  border: 0;
  background: currentColor;
}

.control:focus-visible {
  outline: var(--focus-width) solid color-mix(in srgb, var(--color-accent) 45%, transparent);
  outline-offset: var(--focus-offset);
}

.disabled {
  color: var(--color-subtle);
  cursor: not-allowed;
}
.disabled .control {
  opacity: 0.55;
}
</style>
