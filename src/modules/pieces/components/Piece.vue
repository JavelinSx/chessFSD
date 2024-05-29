<template>
  <v-icon :class="pieceClass">{{ pieceIcon }}</v-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { icons } from '../constant/iconsPiece';
import { IPiece } from '../../../types/Piece';

const props = defineProps<IPiece>();

const pieceClass = computed(() => {
  return props.color === 'white' ? 'white-piece' : 'black-piece';
});

const pieceIcon = computed(() => {
  return icons[props.type] || '';
});
</script>

<style scoped>
.white-piece {
  color: white;
}
.black-piece {
  color: black;
}
</style>
