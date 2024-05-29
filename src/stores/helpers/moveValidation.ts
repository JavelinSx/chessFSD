import { isValidPawnMove} from "../utils/isValidPawnMove";
import { isValidHorseMove } from '../utils/isValidHorseMove'
import { isValidTowerMove } from "../utils/isValidTowerMove";
import { isValidBishopMove } from "../utils/isValidBishopMove";
import { isValidQueenMove } from "../utils/isValidQueenMove";
import { isValidKingMove } from "../utils/isValidKingMove";
import { IValidPieceMove } from "../../types/ValidPieceMove";


export function isMoveValidAndEmptyRoute({piece, from, to, board} : IValidPieceMove): boolean {
  if (!piece.type) {
    return false;
  }

  const checkEmptyRoute = (): boolean => {
    switch (piece.type) {
      case 'P': return isValidPawnMove({piece, from, to, board});
      case 'N': return isValidHorseMove({piece, from, to, board});
      case 'T': return isValidTowerMove({piece, from, to, board});
      case 'B': return isValidBishopMove({piece, from, to, board});
      case 'Q': return isValidQueenMove({piece, from, to, board});
      case 'K': return isValidKingMove({piece, from, to, board});
      default: return false;
    }
  }

  return checkEmptyRoute()
}
