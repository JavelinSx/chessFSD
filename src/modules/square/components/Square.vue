<template>
  <div class="square" :class="squareClass">
    <slot name="piece" :piece="props.piece"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IPiecePosition } from '../../../types/piecePosition';

const props = defineProps<IPiecePosition>();

const squareClass = computed(() => {
  return (props.position.row + props.position.col) % 2 === 0 ? 'light' : 'dark';
});
console.log(props)
</script>

<style scoped>
.square {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.light {
  background-color: #f0d9b5;
}
.dark {
  background-color: #b58863;
}
</style>
