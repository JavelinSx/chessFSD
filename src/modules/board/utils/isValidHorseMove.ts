import { CellPosition } from '../helpers/moveValidation';

export function isValidHorseMove(
  piece: string,
  from: CellPosition,
  to: CellPosition,
  board: (string | null)[][]
): boolean {

  const isWhite = piece.toUpperCase() === piece;
  const { row: fromRow, col: fromCol } = from;
  const { row: toRow, col: toCol } = to;
  const targetPiece = board[toRow][toCol];

  const isDamageToAllies = targetPiece !== null && isWhite !== (targetPiece.toUpperCase() === targetPiece) //проверка на не пустую клетку и проверка на несоюзную фигуру

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

  const isTargetValid = targetPiece === null || isDamageToAllies;

  return isValidMove && isTargetValid;
}
