<template>
  <ChessBoard>
    <template #square="{ piece, row, col }">
      <Square :position="{ row, col }" :piece="piece">
        <template #piece="{ piece }">
          <Piece :piece="piece"></Piece>
        </template>
      </Square>
    </template>
  </ChessBoard>
</template>

<script setup lang="ts">
import Square from '../modules/square/components/Square.vue';
import Piece from '../modules/pieces/components/Piece.vue';
import ChessBoard from '../modules/board/components/ChessBoard.vue';
import { useRootStore } from '../stores/useRootStore';
import { onMounted } from 'vue';

const rootStore = useRootStore();
onMounted(() => rootStore.initializeGame())

</script>
