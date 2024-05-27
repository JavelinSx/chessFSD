<template>
  <v-container class="chess-board-container">
    <v-row v-for="(row, rowIndex) in board" :key="rowIndex" class="no-gutters">
      <v-col v-for="(piece, colIndex) in row" :key="colIndex" class="no-gutters">
        <Square :piece="piece" :row="rowIndex" :col="colIndex" @click="onSquareClick(rowIndex, colIndex, $event)"></Square>
      </v-col>
    </v-row>
    <div v-if="selectedPiece" class="piece-icon" :style="iconStyle">
      <ChessPiece :piece="selectedPiece.piece"></ChessPiece>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useBoardStore } from '../store/boardStore';
import Square from './Square.vue';
import ChessPiece from './ChessPiece.vue';

const boardStore = useBoardStore();
const board = computed(() => boardStore.getBoard);
const selectedPiece = computed(() => boardStore.getSelectedPiece);

const ignoreNextClick = ref(false);

const onSquareClick = (row: number, col: number, event: MouseEvent) => {
  if (selectedPiece.value) {
    boardStore.movePiece(selectedPiece.value.position, { row, col });
    ignoreNextClick.value = true;
  } else {
    const piece = board.value[row][col];
    if (piece) {
      boardStore.selectPiece(piece, { row, col });
      setPieceIconPosition(event);
      ignoreNextClick.value = true;
    }
  }
};

const setPieceIconPosition = (event: MouseEvent) => {
  const pieceIcon = document.querySelector('.piece-icon') as HTMLElement;
  if (pieceIcon) {
    pieceIcon.style.left = `${event.pageX+10}px`;
    pieceIcon.style.top = `${event.pageY+10}px`;
  }
};

const onDocumentClick = (event: MouseEvent) => {
  setPieceIconPosition(event)
  if (ignoreNextClick.value) {
    ignoreNextClick.value = false;
    return;
  }
  if (!selectedPiece.value) return;
  const target = event.target as Element;
  if (!target.closest('.chess-board-container') && !target.closest('.piece-icon')) {
    boardStore.cancelSelection();
  }
};

const onMouseMove = (event: MouseEvent) => {
  if (selectedPiece.value) {
    setPieceIconPosition(event);
  }
};

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('mousemove', onMouseMove);
});

const iconStyle = computed(() => {
  return {
    position: 'absolute',
    pointerEvents: 'none',
  };
});
</script>

<style scoped>
.chess-board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.no-gutters {
  padding: 0;
  margin: 0;
}
.piece-icon {
  position: absolute;
  pointer-events: none;
}
</style>
