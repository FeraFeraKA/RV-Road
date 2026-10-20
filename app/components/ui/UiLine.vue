<script setup lang="ts">
import { computed } from 'vue';
import { BaseEdge, getBezierPath } from '@vue-flow/core';
import type { EdgeProps } from '@vue-flow/core';

const props = withDefaults(
  defineProps<EdgeProps & { tone?: 'accent' | 'muted'; animated?: boolean }>(),
  {
    tone: 'accent',
    animated: false,
    style: () => ({}),
  },
);

const path = computed(() => getBezierPath(props)[0]);
const edgeStyle = computed(() => ({
  ...props.style,
  stroke: props.tone === 'accent' ? 'var(--color-accent)' : 'var(--color-border-strong)',
  strokeWidth: props.selected ? 2 : 1.5,
}));
</script>

<template>
  <BaseEdge
    :id="id"
    :path="path"
    :style="edgeStyle"
    :marker-start="markerStart"
    :marker-end="markerEnd"
    :interaction-width="interactionWidth"
    :class="{ 'roadmap-flow-edge-animated': animated }"
  />
</template>
