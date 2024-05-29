import { IPiece } from "../../types/Piece";
import { IValidPieceMove } from "../../types/ValidPieceMove";

export function isValidHorseMove({ piece, from, to, board }: IValidPieceMove): boolean {

  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetCell: IPiece | null = board[toRow][toCol];

  const isDamageToAllies = targetCell !== null && targetCell.color !== piece.color //проверка на не пустую клетку и проверка на несоюзную фигуру

  const isValidMove = (
    (toRow === fromRow + 2 && toCol === fromCol + 1) || // Ход коня вверх вправо
    (toRow === fromRow + 2 && toCol === fromCol - 1) || // Ход коня вверх влево

    (toRow === fromRow + 1 && toCol === fromCol + 2) || // Ход коня вправо вверх
    (toRow === fromRow - 1 && toCol === fromCol + 2) || // Ход коня вправо вниз

    (toRow === fromRow + 1 && toCol === fromCol - 2) || // Ход коня влево вверх
    (toRow === fromRow - 1 && toCol === fromCol - 2) || // Ход коня влево вниз

    (toRow === fromRow - 2 && toCol === fromCol + 1) || // Ход коня вниз вправо
    (toRow === fromRow - 2 && toCol === fromCol - 1)    // Ход коня вниз влево
  );

  const isTargetValid = targetCell === null || isDamageToAllies;

  return isValidMove && isTargetValid;
}
