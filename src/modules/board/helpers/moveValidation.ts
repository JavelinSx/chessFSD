import { isValidPawnMove, isPawnPathClear } from "../utils/validPawnMove";

export interface CellPosition {
  row: number;
  col: number;
}

export function isMoveValidAndEmptyRoute(
  piece: string | null,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {
  if (!piece) {
    return false;
  }

  const checkEmptyRoute = (): boolean => {
    switch (piece.toUpperCase()) {
      case 'P': return isValidPawnMove(piece, from, to, board) && isPawnPathClear(piece, from, to, board);
      default: return false;
    }
  }

  return checkEmptyRoute()
}
