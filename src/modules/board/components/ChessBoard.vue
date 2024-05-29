<template>
  <v-container class="chess-board-container">
    <v-row v-for="(row, rowIndex) in board" :key="rowIndex" class="no-gutters">
      <v-col v-for="(piece, colIndex) in row" :key="colIndex" class="no-gutters">
        <slot name="square" :piece="piece" :row="rowIndex" :col="colIndex">
          <div @click="handleSquareClick(rowIndex, colIndex, $event)">
            <!-- Default slot content here if needed -->
          </div>
        </slot>
      </v-col>
    </v-row>
    <slot v-if="selectedPiece" name="selectedPiece" :piece="selectedPiece.piece"></slot>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRootStore } from '../../../stores/useRootStore';
import { ICellPosition } from '../../../types/CellPosition';
import { isMoveValidAndEmptyRoute } from '../../../stores/helpers/moveValidation';

const rootStore = useRootStore();
const board = computed(() => rootStore.boardStore.getBoard);
const selectedPiece = computed(() => rootStore.boardStore.getSelectedPiece);

const ignoreNextClick = ref(false);

const handleSquareClick = (row: number, col: number, event: MouseEvent) => {
  if (selectedPiece.value) {
    const from: ICellPosition = selectedPiece.value.position;
    const to: ICellPosition = { row, col };
    rootStore.movePiece(from, to, isMoveValidAndEmptyRoute);
    ignoreNextClick.value = true;
  } else {
    const piece = board.value[row][col];
    if (piece) {
      rootStore.selectPiece(piece.type, { row, col });
      setPieceIconPosition(event);
      ignoreNextClick.value = true;
    }
  }
};

const setPieceIconPosition = (event: MouseEvent) => {
  const pieceIcon = document.querySelector('.piece-icon') as HTMLElement;
  if (pieceIcon) {
    pieceIcon.style.left = `${event.pageX + 10}px`;
    pieceIcon.style.top = `${event.pageY + 10}px`;
  }
};

const onDocumentClick = (event: MouseEvent) => {
  setPieceIconPosition(event);
  if (ignoreNextClick.value) {
    ignoreNextClick.value = false;
    return;
  }
  if (!selectedPiece.value) return;
  const target = event.target as Element;
  if (!target.closest('.chess-board-container') && !target.closest('.piece-icon')) {
    rootStore.cancelSelection();
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
</script>

<style scoped>
.chess-board-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.no-gutters {
  padding: 0;
  margin: 0;
}
</style>
