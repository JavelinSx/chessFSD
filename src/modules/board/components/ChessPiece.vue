<template>
  <v-icon :class="pieceClass">{{ pieceIcon }}</v-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { icons } from '../constant/iconsPiece';

interface Props {
  piece: string;
}

const props = defineProps<Props>();

const pieceClass = computed(() => {
  return props.piece.toUpperCase() === props.piece ? 'white-piece' : 'black-piece';
});

const pieceIcon = computed(() => {
  return icons[props.piece] || '';
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
