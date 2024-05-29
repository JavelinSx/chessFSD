<template>
    <div v-if="selectedPiece" class="piece-icon" :style="iconStyle">
      <ChessPiece :piece="props.selectedPiece.piece"></ChessPiece>
    </div>
</template>

<script setup lang="ts">
import { IPiecePosition } from '../../../types/piecePosition';

const props = defineProps<{selectedPiece: IPiecePosition}>()

</script>

<style>
.piece-icon {
  position: absolute;
  pointer-events: none;
}
</style>
