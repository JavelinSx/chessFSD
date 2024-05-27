<template>
  <div class="square" :class="squareClass">
    <ChessPiece v-if="piece" :piece="piece" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ChessPiece from './ChessPiece.vue';

interface Props {
  piece: string | null;
  row: number;
  col: number;
}

const props = defineProps<Props>();

const squareClass = computed(() => {
  return (props.row + props.col) % 2 === 0 ? 'light' : 'dark';
});
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
