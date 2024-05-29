import { defineStore } from 'pinia';
import { IBoard } from '../../../types/board';
import { IPiecePosition } from '../../../types/piecePosition';
import { ICellPosition } from '../../../types/CellPosition';

export const useBoardStore = defineStore('board', {
  state: () => ({
    board: [] as IBoard,
    selectedPiece: null as IPiecePosition | null,
  }),
  getters: {
    getBoard: (state) => state.board,
    getSelectedPiece: (state) => state.selectedPiece,
  },
  actions: {
    initializeBoard(initialBoard: IBoard) {
      this.board = initialBoard;
    },
    selectPiece(pieceType: string, position: ICellPosition) {
      this.selectedPiece = { piece: pieceType, position };
    },
    cancelSelection() {
      this.selectedPiece = null;
    },
    movePiece(from: ICellPosition, to: ICellPosition) {
      const piece = this.board[from.row][from.col];
      this.board[to.row][to.col] = piece;
      this.board[from.row][from.col] = null;
      this.selectedPiece = null;
    },
  },
});
