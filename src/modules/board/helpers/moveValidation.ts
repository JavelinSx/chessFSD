import { isValidPawnMove} from "../utils/isValidPawnMove";
import { isValidHorseMove } from '../utils/isValidHorseMove'
import { isValidTowerMove } from "../utils/isValidTowerMove";
import { isValidBishopMove } from "../utils/isValidBishopMove";
import { isValidQueenMove } from "../utils/isValidQueenMove";
import { isValidKingMove } from "../utils/isValidKingMove";
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
      case 'P': return isValidPawnMove(piece, from, to, board);
      case 'N': return isValidHorseMove(piece, from, to, board);
      case 'T': return isValidTowerMove(piece, from, to, board);
      case 'B': return isValidBishopMove(piece, from, to, board);
      case 'Q': return isValidQueenMove(piece, from, to, board);
      case 'K': return isValidKingMove(piece, from, to, board);
      default: return false;
    }
  }

  return checkEmptyRoute()
}
