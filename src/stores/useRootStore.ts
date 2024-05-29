import { defineStore } from 'pinia';
import { useBoardStore } from '../modules/board/store/boardStore';
import { IValidPieceMove } from '../types/ValidPieceMove';
import { ICellPosition } from '../types/CellPosition';
import { ref } from 'vue';
import { initialBoardSetup } from '../modules/board/utils/initialBoardSetup';

export const useRootStore = defineStore('root', () => {
  const boardStore = useBoardStore();

  const gameStarted = ref(false);

  const initializeGame = () => {
    gameStarted.value = true;
    boardStore.initializeBoard(initialBoardSetup());
  };

  const movePiece = (from: ICellPosition, to: ICellPosition, validation: ({ piece, from, to, board }: IValidPieceMove) => boolean) => {
    const piece = boardStore.selectedPiece?.piece;
    if (!piece) {
      boardStore.cancelSelection();
      return;
    }
    if (!validation({ piece, from, to, board: boardStore.board })) {
      boardStore.cancelSelection();
      return;
    }
    boardStore.movePiece(from, to);
  };

  const selectPiece = (pieceType: string, position: ICellPosition) => {
    boardStore.selectPiece(pieceType, position);
  };

  const cancelSelection = () => {
    boardStore.cancelSelection();
  };

  return {
    gameStarted,
    initializeGame,
    movePiece,
    selectPiece,
    cancelSelection,
    boardStore,
  };
});
