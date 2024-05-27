import { defineStore } from 'pinia';
import { initialBoardSetup } from '../utils/initialBoardSetup';
import { isMoveValidAndEmptyRoute, CellPosition } from '../helpers/moveValidation';

interface PiecePosition {
  piece: string;
  position: {
    row: number;
    col: number;
  };
}

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    board: initialBoardSetup() as (string | null)[][],
    selectedPiece: null as PiecePosition | null,
  }),
  getters: {
    getBoard: (state) => state.board,
    getSelectedPiece: (state) => state.selectedPiece,
  },
  actions: {
    initializeBoard() {
      this.board = initialBoardSetup();
    },
    movePiece(from: CellPosition, to: CellPosition) {
      const piece = this.selectedPiece?.piece;
      if (!piece) {
        this.cancelSelection();
        return;
      }
      if (!isMoveValidAndEmptyRoute(piece, from, to, this.board)) {
        this.cancelSelection();
        return;
      }
      this.board[to.row][to.col] = piece;
      this.board[from.row][from.col] = null;
      this.selectedPiece = null;
    },
    selectPiece(piece: string, position: CellPosition) {
      if (this.selectedPiece && this.selectedPiece.position.row === position.row && this.selectedPiece.position.col === position.col) {
        this.cancelSelection();
        return;
      }
      this.board[position.row][position.col] = null;
      this.selectedPiece = { piece, position };
    },
    cancelSelection() {
      if (this.selectedPiece) {
        const { piece, position } = this.selectedPiece;
        this.board[position.row][position.col] = piece;
        this.selectedPiece = null;
      }
    },
  },
});
